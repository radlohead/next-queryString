import Link from 'next/link';

const Layout = ({children}: any) => {
    return (
        <>
            <Link href="/"><span>index | </span></Link>
            <Link href="about"><span>about</span></Link>
            {children}
        </>
    )
}

export default Layout;