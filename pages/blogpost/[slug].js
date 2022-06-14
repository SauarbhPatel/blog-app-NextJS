import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";


//  Step 1 : Find the file corresponding to the slug
//  Step 2 : Populate them inside the page

const slug = () => {

  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <style jsx>
        {`
        p{
          max-width:900px;
        }
        `}
      </style>
      <div className={styles.comtainer}>
        <main className={styles.main}>
          <h1>Title of the page {slug}</h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere non
            ea perferendis voluptate officia at adipisci explicabo quos ratione.
            Magni, quas debitis? Minima dicta esse quaerat vel. Quo vero dicta
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias magni sint sed eaque odit necessitatibus impedit debitis quis nulla. Et rem repellat dolorem dolorum aliquam saepe vitae iure dolore.
            
          </p>
        </main>
      </div>
    </>
  );
};

export default slug;
