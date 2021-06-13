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
                                <img src="toronto.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8">
                                <h1>Huitzitzili</h1>
                                <h3>Junior Developer</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, voluptatibus quas. Deleniti nemo eos, unde natus ducimus tempore eius perspiciatis sequi nihil totam at ab nostrum sapiente laborum blanditiis. Esse.
                                </p>
                                <a className="btn btn-primary rounded-pill px-2" href="/contratar">Contratar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*Segunda seccion*/}
            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Habilidades</h1>
                            {
                                skills.map(({ skill, percentage }, k) => (
                                    <div className="py-3" key={k}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
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
                                projects.map(({ name, description, image }, k) => (
                                    <div className="col-md-4" key={k}>
                                        <div className="card h-100">
                                            <div className="overflow">
                                                <img src={image} alt="" className="card-img-top" />
                                            </div>
                                            <div className="card-body">
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                                <a href="#" className="btn btn-secondary">Saber Mas</a>
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