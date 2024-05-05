"use client"
import  Link  from "next/link"
import styles from'./navLink.module.css'
import { usePathname } from "next/navigation"
const NavLik = ({item}) => {
    const pathName = usePathname();
    const isActive = pathName === item.path && styles.active;
    console.log(pathName , item.title)
  return (
    <div>
        <Link href={item.path} className={`${styles.container} ${isActive}`}>
            {item.title}
        </Link>

    </div>
  )
}

export default NavLik
