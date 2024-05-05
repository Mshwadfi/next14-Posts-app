"use client"
import React, { useState } from 'react'
import styles from'./links.module.css'
import NavLik from './navLink/NavLik'
const links = [
  {
      title: 'Home',
      path: '/',
  },
  {
      title: 'About',
      path: '/about',
  },
  {
      title: 'Contact',
      path: '/contact',
  },
  {
      title: 'Blog',
      path: '/blog',
  },
]
const Links = () => {
    const [isOpen , setIsOpen] = useState(false);
    const session = true;
    const admin = true;

  return (
   <div>
     <div className={styles.links}>
      {
        links.map(link =>(
           
              <NavLik item ={link} key={link.title} />
            
        ))
      }
        {
          session? (
            <>
            {admin && <NavLik item={{title: 'Admin', path:'/admin'}} />}
            <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLik item={{title: 'Login' , path: '/login'}} />
          )
          
        }
      
    </div>
    <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>Menu</button>
        {
          isOpen && <div className={styles.mobileMenu}>
            {
              links.map(item =>(
                <NavLik item={item} key={item.title} />
              ))
            }
          </div>
        }
   </div>
  )
}

export default Links
