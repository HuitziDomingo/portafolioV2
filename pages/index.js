import Layout from '../components/Layout'
import { skills, expirencies, projects } from '../profile'
import Link from 'next/link'

const Index = () => {
    return (

        <Layout>
            {/*Primera Seccion*/}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="perfil.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8">
                                <h1>Huitzitzili Domingo Leon Nieves</h1>
                                <h3>Frontend Developer</h3>
                                <p>
                                    Soy un desarrollador semi senior web, me gusta el diseño y programacion de softaware, suelo practicar con algunas
                                    tecnologias como Laravel, React, Next, React Native y el 
                                    sistema de paqutes de Node; NPM.
                                    Tengo algunos conocimientos en el desarrollo de aplicaciones moviles, usando react native y express.
                                    Pero lo que mas me apasiona es el diseño frontend tanto en web como en movil.
                                </p>
                                <a className="btn btn-primary rounded-pill px-2" href="/contratar">Contratar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*Segunda seccion*/}
            <div className="row py-2">
                <div className="col-md-4 mar-responsive">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Habilidades</h1>
                            {
                                skills.map(({ skill, percentage, num }, k) => (
                                    <div className="py-3" key={k}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            {num}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experiencia</h1>
                            <ul>
                                {
                                    expirencies.map(({ title, description, from, to }, k) => (
                                        <li key={k}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*Tercera Secion Portafolio*/}
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portafolio</h1>
                            </div>
                            {
                                projects.map(({ name, description, image, url }, k) => (
                                    <div className="col-md-4 mar-responsive" key={k}>
                                        <div className="card h-100">
                                            <div className="overflow">
                                                <img src={image} alt="" className="card-img-top" />
                                            </div>
                                            <div className="card-body">
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                                <a href={url} target="_blank" className="btn btn-secondary">Visitar</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="text-center">
                            <Link href="/portafolio">
                                <a className="btn btn-outline-light mt-2"> Portafolio</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Index