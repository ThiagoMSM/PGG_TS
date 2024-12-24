import '../PagLogin.css';

type Props = {
    style: string;
    msg: string;
    setObj: React.Dispatch<React.SetStateAction<string>>;
    delay?: number;
};

function MensagemRetorno({ msg, style, setObj, delay=2000 }: Props) {
    const exibeMsg = () =>{
        new Promise<void>((resolve) => {
            setTimeout(() =>{
                setObj("");
                resolve();
            }, delay)
        })
        if(msg !== "" && style !== ""){
            return <p className={style}>{msg}</p>
        }
        return null;
    }
    return <>{exibeMsg()}</>;
}

export default MensagemRetorno;
