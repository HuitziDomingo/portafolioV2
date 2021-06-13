import Layout from "../components/Layout"
import Error from './_error'

const Github = ({ user, codeStatus }) => {
    // console.log(props)

    if(codeStatus) return <Error codeStatus={codeStatus} />

    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" className="img-fluid"/>
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" className="btn btn-primary my-2">Mi Blog</a>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-1">Ir a mi GitHub</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    let res = await fetch('https://api.github.com/users/HuitziDomingo')
    let data = await res.json()

    let codeStatus = res.status > 200 ? res.status : false

    return {
        props: {
            user: data,
            codeStatus
        }
    }
}

export default Github