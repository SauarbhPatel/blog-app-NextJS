import React, { useState } from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

//  Step 1 : Find the file corresponding to the slug
//  Step 2 : Populate them inside the page

const slug = (props) => {
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

// server side redering
export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myblog = await data.json();

  return {
    props: { myblog }, //will be passed to the oage component as props
  };
}

export default slug;
