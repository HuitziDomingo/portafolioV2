import Layout from '../components/Layout'
import Link from 'next/link'

const _error = ({ codeStatus }) => {
    return (
        <Layout>
            <div className="text-center">
                {
                    codeStatus ? (
                        <p>No se pudo carrgar esta pagina {codeStatus} </p>
                    ) : (
                        <p>No se pudo carrgar esta pagina</p>
                    )
                }
                <Link className="d-flex " href="/">
                    <a className="btn btn-primary px-2 rounded-pill">Inicio</a>
                </Link>
            </div>
        </Layout>
    )
}

export default _error