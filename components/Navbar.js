import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true)
    const handleNavCollaps = () => setCollapsed(!collapsed)


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Portafolio Huitzitzili</a>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!collapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollaps}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${collapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/github">
                                <a className="nav-link">Github</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar