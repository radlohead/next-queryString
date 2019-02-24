import Link from 'next/link';
import Layout from '../src/components/Layout';

const PostLink = (props: any) => {
    return (
        <li>
            <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
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
                    <PostLink id="hello" title="Hello" />
                    <PostLink id="next.js" title="Next.js" />
                    <PostLink id="good morning" title="Good morning" />
                </ul>
            </Layout>
        </>
    )
}

export default Index;