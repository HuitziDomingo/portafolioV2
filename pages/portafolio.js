import Layout from '../components/Layout'
import Link from 'next/link'

const portafolio = () => {
    return (
        <Layout>
            <div className="text-center">
                <h1>404</h1>
                <p>Esta pagina no existe. Por favor regrese</p>
                <Link className="d-flex " href="/">
                    <a className="btn btn-primary px-2 rounded-pill">Inicio</a>
                </Link>
            </div>
        </Layout>
    )
}

export default portafolio