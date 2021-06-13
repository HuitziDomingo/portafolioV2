import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

const Layout = ({ children, footer = true }) => {

    const router = useRouter();
    useEffect(() => {
        const handleRouterChange = url => {
            console.log(url)
            NProgress.start()
        }
        router.events.on('routeChangeStart', handleRouterChange)
        router.events.on('routeChangeComplete', () => NProgress.done())
        return () => {
            router.events.off('routeChangeStart', handleRouterChange)
        }
    }, [])

    return (
        <>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>

            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>Huitzitzili Domingo Leon Nieves</h1>
                            <p>&copy; 2020 - {new Date().getFullYear()}</p>
                            <p>Derechos reservados</p>
                        </div>
                    </footer>
                )
            }
        </>
    )
}

export default Layout