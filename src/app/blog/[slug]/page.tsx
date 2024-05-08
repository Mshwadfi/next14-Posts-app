import styles from './blog.module.css'
import { getPost } from "../../../lib/data";
const singleBlog = async ({params}) => {
  console.log(params)
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
     <h1>{post.title}</h1>
     <p>{post.desc}</p>
    </div>
  )
}

export default singleBlog
