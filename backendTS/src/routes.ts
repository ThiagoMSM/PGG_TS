import express, { Request, Response } from 'express';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { app } from './Firebase/Firebase';
import { db } from './Firebase/FirebaseAdmin';

const routes = express.Router();


routes.get('/teste', async (req: Request, res: Response) => {
    res.json("hahaha teste");
});



// Login types, interfaces, tudo aí:
type LoginRequestBody = {
    email: string;
    password: string;
}

interface LoginRequest extends Request {
    body: LoginRequestBody;
}

interface UserData {
    CPF: string;
    Celular: string;
    Email: string;
    Grupo_Acesso: number,
    Nome: string;
};

type LoginResponse = Response<{
    message: string;
} | (errorResponse | OkResponse)>;


type errorResponse = {
    error?: string
}

type OkResponse = {
    id: string,
    userData: UserData
}

routes.post('/Login', async (req: LoginRequest, res: LoginResponse): Promise<any> => {
    const auth = getAuth(app);
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email e senha são obrigatórios" });
        }

        await signInWithEmailAndPassword(auth, email, password);

        const user = auth.currentUser;
        if (!user) {
            throw new Error("Erro crítico ao buscar o usuário");
        }

        const userDoc = await db.collection('Logins').doc(user.uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: "Sem usuários com essas credenciais" });
        }

        const userData: UserData = userDoc.data() as UserData;

        return res.status(200).json({
            message: 'Sucesso',
            id: user.uid,
            userData: userData
        });
    } catch (error: any) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            return res.status(401).json({ message: "Senha ou email inválidos" });
        }
        console.log(error);
        return res.status(500).json({ message: "Erro desconhecido/Erro de banco de dados" });
    }
});


// Redefinir senha:

type RedefSenhaBody = {
    email: string;
}

interface RedefSenhaRequest extends Request {
    body: RedefSenhaBody;
}

type RedefSenhaResponse = Response<{
    message: string;
}>

routes.post('/RedefinirSenha', async (req: RedefSenhaRequest, res: RedefSenhaResponse): Promise<any> => {
    const auth = getAuth(app);
    const { email } = req.body;
    try {
        await sendPasswordResetEmail(auth, email); // se der ruim, manda exception....

        return res.status(200).json({ message: "Caso o e-mail estiver cadastrado, enviamos um link de redefinição" })

    } catch (error: any) {
        if (error.code === 'auth/invalid-email')
            return res.status(400).json({ message: "Email inválido inserido" }) //400 = Bad Request, nao foi possivel concluir a operação
        else if (error.code === 'auth/user-not-found')
            return res.status(404).json({ message: "Email não encontrado na base de dados" }) // 404 = Not found, nao achou
        else
            return res.status(500).json({ message: "Erro desconhecido" }); //500 internal server error, ou seja, deu merda mas nao se sabe qual
    }
});

export default routes;
