import React from 'react'
import style from '../../styles/course/Main.module.css'
const Main = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.paragraph}>
                <h1>Boost your career with our courses!</h1>
                <p>We believe that every student, irrespective of their college or branch, can make it big. All of our courses are FREE while never compromising on quality. We cover every topic in detail with a hands-on approach and mentor you with career</p>
                <button className={style.btn}>Explore More</button>
            </div>
            <div className={style.logo}>Pic</div>
        </div>
    )
}

export default Main