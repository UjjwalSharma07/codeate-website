import React from 'react'
import styles from "../styles/Coming.module.css"
import Link from 'next/link'
const Coming = () => {
    return (
        <div className={styles.wrapper}>
            <Link href='/CurrentCourses'>
            <h1>Coming Soon !!!</h1>
            </Link>
        </div>
    )
}

export default Coming