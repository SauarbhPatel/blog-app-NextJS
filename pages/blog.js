import React, { useEffect, useState } from "react";
import stylesBlog from "../styles/blog.module.css";
import styles from "../styles/Home.module.css";
import * as fs from 'fs';
import Link from "next/link";

//  Step 1 : Collect all the files from blogdata directory
//  Step 2 : Iterate through the and Display them
const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       // console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <>
      <style jsx>
        {`
          .para {
            max-width: 1100px;
          }
        `}
      </style>
      <div className={styles.comtainer}>
        <main className={styles.main}>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className={stylesBlog.blogItem}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3 className={stylesBlog.blogheading}>{blogItem.title}</h3>
                </Link>
                <p className="para"> {blogItem.content.substr(0,200)}...</p>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};
// Static site generation

export async function getStaticProps(context){
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }

      return{
        props:{allBlogs},//will be passed to the oage component as props
      }
}

// server side redering 

// export async function getServerSideProps(context){
//   let data = await  fetch("http://localhost:3000/api/blogs")
//   let allBlogs = await data.json()

//       return{
//         props:{allBlogs},//will be passed to the oage component as props
//       }
// }

export default Blog;
