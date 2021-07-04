import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* <title>Portafolio</title> */}
                    <meta name='og:type' content='Portafolio' />
                    <meta name='og:title' content='PrtafolioHuitzitzili - Portafolio sobre C.V de desarrollo web' />
                    <meta name='og:description' content='Portafolio de trabajo de Huitzitzili Domingo Leon Nieves' />
                    <meta name='og:url' content='https://huitzi.xyz' />
                    {/* <meta name='og:image' content='https://neuralpin.xyz/media/covers/default.jpg' /> */}
                    <meta name="description" content="Portafolio de Huitzitzili Domingo Leon Nieves" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument