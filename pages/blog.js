import Layout from "../components/Layout"
import Post from "../components/Post"
import { posts } from '../profile'

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <div className="row">
                {
                    posts.map((p, k) => (
                        <Post post={p} key={k} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Blog