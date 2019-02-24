import { withRouter } from 'next/router';
import Layout from '../src/components/Layout';

const Content = withRouter((props: any) => {
    return (
        <>
            <div>post page</div>
            {props.router.query.title}
        </>
    );
});

const Post = (props: any) => {
    return (
        <>
            <Layout>
                <Content />
            </Layout>
        </>
    )
};

export default Post;