// import React from "react";
// import styles from "./Blogs.module.css";
// import { Image } from "react-bootstrap";
// import {motion} from 'framer-motion';
// import Blog from "./blog/Blog";

// const blog_data = [
//   {
//     id:1,
//     name: "Blog Sagnik",
//     image: "/portfolio__1.png",
//     smallText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente."

//   },
//   {
//     id:2,
//     name: "Blog Arghya",
//     image: "/portfolio__1.png" ,
//     smallText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente."
//   },
//   {
//     id:3,
//     name: "Blog Sumit",
//     image: "/portfolio__1.png" ,
//     smallText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente."
//   },
// ]

// const Blogs = () => {
//   return (
//     <>
//       {/* <section className={styles.blogs} id="blogs">
//         <p className={styles.heading}>
//           Our <span style={{ color: "#5abc2e" }}>Blogs</span>
//         </p>

//         <main className={styles.blogs_content}>
//           <motion.div className={styles.blogs_content_item}
//            whileInView={{ scale: [0, 1] }}
//            animate={{
//              opacity: 1,
//            }}
//            initial={{
//              opacity: 0,
//            }}
//            transition={{ duration: 0.8 }}
//            viewport={{once:true}}>
//             <Image src="/portfolio__1.png"
//             className={styles.img}/>
//             <h2>Blog 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//               magnam?
//             </p>

//             <button>Read More</button>
//           </motion.div>
//           <motion.div className={styles.blogs_content_item}
//            whileInView={{ scale: [0, 1] }}
//            animate={{
//              opacity: 1,
//            }}
//            initial={{
//              opacity: 0,
//            }}
//            transition={{ duration: 0.8 }}
//            viewport={{once:true}}>
//             <Image src="/portfolio__1.png"
//             className={styles.img}/>
//             <h2>Blog 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//               magnam?
//             </p>

//             <button>Read More</button>
//           </motion.div>

//           <motion.div className={styles.blogs_content_item}
//            whileInView={{ scale: [0, 1] }}
//            animate={{
//              opacity: 1,
//            }}
//            initial={{
//              opacity: 0,
//            }}
//            transition={{ duration: 0.8 }}
//            viewport={{once:true}}>
//             <Image src="/portfolio__1.png"
//             className={styles.img}/>
//             <h2>Blog 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//               magnam?
//             </p>

//             <button>Read More</button>
//           </motion.div>

//           <motion.div className={styles.blogs_content_item}
//            whileInView={{ scale: [0, 1] }}
//            animate={{
//              opacity: 1,
//            }}
//            initial={{
//              opacity: 0,
//            }}
//            transition={{ duration: 0.8 }}
//            viewport={{once:true}}>
//             <Image src="/portfolio__1.png"
//             className={styles.img}/>
//             <h2>Blog 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//               magnam?
//             </p>

//             <button>Read More</button>
//           </motion.div>

//           <motion.div className={styles.blogs_content_item}
//            whileInView={{ scale: [0, 1] }}
//            animate={{
//              opacity: 1,
//            }}
//            initial={{
//              opacity: 0,
//            }}
//            transition={{ duration: 0.8 }}
//            viewport={{once:true}}>
//             <Image src="/portfolio__1.png"
//             className={styles.img}/>
//             <h2>Blog 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//               magnam?
//             </p>

//             <button>Read More</button>
//           </motion.div>

//           <motion.div className={styles.blogs_content_item}
//            whileInView={{ scale: [0, 1] }}
//            animate={{
//              opacity: 1,
//            }}
//            initial={{
//              opacity: 0,
//            }}
//            transition={{ duration: 0.8 }}
//            viewport={{once:true}}>
//             <Image src="/portfolio__1.png"
//             className={styles.img}/>
//             <h2>Blog 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
//               magnam?
//             </p>

//             <button>Read More</button>
//           </motion.div>

//         </main>
//       </section> */}

//       <section className={styles.blogs} id="blogs">
//         <>
//         <p className={styles.heading}>
//           Our <span style={{ color: "#5abc2e" }}>Blogs</span>
//         </p>
//         {

//           blog_data.map((item) => {
//             return (
//               <div key={item.id}>
//                   <Blog item={item}/>
//               </div>
//             )
//           })
//         }
//         </>

//       </section>
//     </>
//   );
// };

// export default Blogs;

import React from "react";
import styles from "./Blogs.module.css";
import Layout2 from "../layout/Layout2";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogs = getAllBlogs();
  return (
    // <Layout2>
      <section className={styles.blogs} id="blogs">
        <p className={styles.heading}>
          Our <span style={{ color: "#5abc2e" }}>Blogs</span>
        </p>
        <main className={styles.blogs_content}>
          {blogs.map((p) => (
            <BlogpostPreview key={p.id} data={p} />
          ))}
        </main>
      </section>
    // </Layout2>
  );
};

const BlogpostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", boxShadow:"0px 0px 6px rgba(0,0,0,0.4)", borderRadius: "15px"}}>
      <motion.div className={styles.blogs_content_item}
       whileInView={{ scale: [0, 1] }}
                  animate={{
                    opacity: 1,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{once:true}}>
        <Image
          src={data.image}
          alt="Blog"
          width={500}
          height={300}
          className={styles.img}
        />
        <h2>{data.title}</h2>
        <p style={{textAlign:"center"}}>{data.excerpt}</p>
        <Link href={`/blogs/${data.slug}`}>
          <button className={styles.btn}>Read More</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Blogs;

