import Image from 'next/image'
import styles from './contact.module.css'
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='contactImg' fill className={styles.photo} />
      </div>
      <div className={styles.formContainer}>
      <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default AboutPage
