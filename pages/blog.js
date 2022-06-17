import React, { useEffect, useState } from "react";
import stylesBlog from "../styles/Blog.module.css";
import styles from "../styles/Home.module.css";
import * as fs from "fs";
import Link from "next/link";
// yarn add react-infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component";

//  Step 1 : Collect all the files from blogdata directory
//  Step 2 : Iterate through the and Display them
const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(5);


  const fetchData = async() => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count+2}`)
    setCount(count+2)
    let data = await d.json()
    setBlogs(data);
  };

  return (
    <>
      <style jsx>
        {`
          .para {
            max-width: 1100px;
          }
        `}
      </style>
      <div className={styles.container}>
        <main className={stylesBlog.main}>
          <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={props.allCount!== blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {blogs.map((blogItem) => {
              return (
                <div key={blogItem.slug} className={stylesBlog.blogItem}>
                  <h3 className={stylesBlog.blogheading}>{blogItem.title}</h3>
                  <p className="para"> {blogItem.metadesc.substr(0, 200)}...</p>
                  <Link href={`/blogpost/${blogItem.slug}`}>
                    <button className={styles.btn}>Read More...</button>
                  </Link>
                </div>
              );
            })}
          </InfiniteScroll>
        </main>
      </div>
    </>
  );
};
// Static site generation

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount= data.length;
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < 5; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs,allCount }, //will be passed to the oage component as props
  };
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
