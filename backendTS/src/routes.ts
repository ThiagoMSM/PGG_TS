import express, { Request, Response } from 'express';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const { app } = require('./Firebase/Firebase')
const { db } = require('./Firebase/FirebaseAdmin');

const routes = express.Router();


routes.get('/teste', async (req: Request, res: Response) => {
    res.json("hahaha teste");
});



// Login types, interfaces, tudo aí:
type LoginRequestBody =  {
    email: string;
    password: string;
}

interface LoginRequest extends Request {
    body: LoginRequestBody;
}

type UserData = {
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

        const userData:UserData = userDoc.data();
        return res.status(200).json({
            message: 'Sucesso',
            id: user.uid,
            userData: userData
        });
    } catch (error: any) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            return res.status(401).json({ message: "Senha ou email inválidos"});
        }
        return res.status(500).json({ message: "Erro desconhecido/Erro de banco de dados", error: error.message });
    }
});


export default routes;
