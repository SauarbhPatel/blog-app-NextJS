import React from "react";
import stylesBlog from "../styles/blog.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";


//  Step 1 : Collect all the files from blogdata directory
//  Step 2 : Iterate through the and Display them
const Blog = () => {
  return (
    <>
      <div className={styles.comtainer}>
        <main className={styles.main}>
          <div className={stylesBlog.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h3 className={stylesBlog.blogheading}>
                How to learn JavaScript in 2022?
              </h3>
            </Link>
            <p>JavaScript is the language used to degign logic for the web</p>
          </div>
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
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
