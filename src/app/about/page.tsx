import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
       
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>
              We create digital ideas that are bigger, bolder, braver and better.
            </h1>
            <p className={styles.desc}>
              We create digital ideas that are bigger, bolder, braver and better. We
              believe in good ideas flexibility and precission We’re world’s Our
              Special Team best consulting & finance solution provider. Wide range
              of web and software development services.
            </p>
            <div className={styles.info}>
              <div className={styles.item}>
                <h1 className={styles.itemTag}>10 K+</h1>
                <p className={styles.text}>Year of experience</p>
              </div>
              <div className={styles.item}>
                <h1 className={styles.itemTag}>10 K+</h1>
                <p className={styles.text}>Year of experience</p>
              </div>
              <div className={styles.item}>
                <h1 className={styles.itemTag}>10 K+</h1>
                <p className={styles.text}>Year of experience</p>
              </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image alt='about image' src={'/about.png'} fill className={styles.photo}/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
