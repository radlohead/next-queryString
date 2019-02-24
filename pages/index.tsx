import Link from 'next/link';
import Layout from '../src/components/Layout';

const PostLink = (props: any) => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}

const Index = () => {
    return (
        <>
            <Layout>
                <div>Index page</div>
                <ul>
                    <PostLink title="hello" />
                    <PostLink title="next.js" />
                    <PostLink title="good morning" />
                </ul>
            </Layout>
        </>
    )
}

export default Index;