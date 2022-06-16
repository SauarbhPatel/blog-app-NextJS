import React, { useState } from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import * as fs from 'fs';

//  Step 1 : Find the file corresponding to the slug
//  Step 2 : Populate them inside the page

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myblog);

  return (
    <>
      <style jsx>
        {`
          p {
            max-width: 900px;
          }
        `}
      </style>
      <div className={styles.comtainer}>
        <main className={styles.main}>
          <h1> {blog && blog.title}</h1>
          <hr />
          <p>{blog && blog.content}</p>
        </main>
      </div>
    </>
  );
};

// Static site generation
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug : 'how-to-learn-javascript' } },
      { params: { slug : 'how-to' } }
    ],
    fallback: true // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBLog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
  return {
    props: { myblog :JSON.parse(myBLog) }, //will be passed to the oage component as props
  };
}



// server side redering
// export async function getServerSideProps(context) {
//   const { slug } = context.query;

//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myblog = await data.json();

//   return {
//     props: { myblog }, //will be passed to the oage component as props
//   };
// }

export default Slug;
