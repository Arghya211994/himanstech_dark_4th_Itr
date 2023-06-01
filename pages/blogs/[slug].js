import { getAllSlugs, getAllTitles, getPostData } from "@/lib/blogs";
import styles from "../../styles/BlogPost.module.css"
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

const quote ={
  initial:{
      opacity: 0,
  },
  animate: {
      opacity: 1,
      transition: {
          delay: 0.5,
      }
  }
}



export default function BlogPost(props) {
  const {postData} = props;

  return( 
    <>

<Image src={postData.image} alt={postData.title} width={500} height={500} 
    className={styles.img}/>
    <div className={styles.blog_post}>
    
    <div className={styles.author_content}>
        <Image src={postData.author_image} alt={postData.author} width={100} height={100} 
        className={styles.author_image}/>
        <p>Author: {postData.author}</p>  
        <p>{postData.author_position}</p>
        <h5 className={styles.date}>{postData.date}</h5>
    </div>

    <div className={styles.blog_post_content}>
      <motion.h2
       variants={quote}
       initial= "initial"
       animate="animate">{postData.title}</motion.h2>
      <motion.p
      variants={quote}
      initial= "initial"
      animate="animate"
      >{postData.content}</motion.p>
      </div>
      
      
       
    </div>
    <div>   
    <Link href="/blogs" className={styles.link}>
    <p className={styles.button}>⬅️&nbsp;Back to Main Page</p>
    </Link>
    </div>
    </>
  
  )
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return{
    paths,
    fallback: false
  }
};

export const getStaticProps = ({params}) => {
  const postData = getPostData(params.slug);
  return{
    props: {
      postData,
    },
  };
}; 

