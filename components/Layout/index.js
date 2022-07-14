import Head from 'next/head'
import Header from '../Header'
import TopBar from '../Topbar'
import Footer from '../Footer'

export default function Layout({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{title ? title : "Electronica y Montajes"} | {description}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <meta name="description" content={description || "React.js Boilerplate"} />
            </Head>
            <TopBar />
            <Header />
            {children}
            <Footer />
        </>
    )
}
