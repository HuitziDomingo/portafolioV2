import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { posts } from '../profile'

const Post = () => {

    const router = useRouter();
    // console.log(router.query.title)
    const currentPost = posts.filter(post => post.title == router.query.title)[0]
    // console.log(currentPost)
    return (
        <Layout footer={false}>
            <div className="text-center">
                <h1>{currentPost.title}</h1>
                <img src={currentPost.imageUrl} className="img-fluid" style={{ width: '50%' }} alt="" />
                <p>{currentPost.content}</p>
            </div>
        </Layout>
    )
}

export default Post

// const Post = () => (
//     <Layout>
//         <h1>Aqui va el contenideo de los posts</h1>
//     </Layout>
// )

// export default Post