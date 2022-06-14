import React, { useEffect, useState } from "react";
import stylesBlog from "../styles/blog.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//  Step 1 : Collect all the files from blogdata directory
//  Step 2 : Iterate through the and Display them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

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
          {/* 
          <div className="blogItem">
            <h3 className={stylesBlog.blogheading}>
              How to learn JavaScript in 2022?
            </h3>
            <p>JavaScript is the language used to degign logic for the web</p>
          </div>
          <div className="blogItem">
            <h3 className={stylesBlog.blogheading}>
              How to learn JavaScript in 2022?
            </h3>
            <p>JavaScript is the language used to degign logic for the web</p>
          </div> */}
        </main>
      </div>
    </>
  );
};

export default Blog;
