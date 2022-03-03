import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1>Estás perdido, incauto. Não tem nada aqui.</h1>
            <Link href="/" passhref>
                Ir para o Home
            </Link>
            
        </div>
    )
}