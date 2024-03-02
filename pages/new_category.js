import React,{useState} from 'react'
import Image from 'next/image'
import styles from "../styles/NewCategory.module.css"

const NewCategory = () => {
    const [name,setName]=useState("default")
    const [desc,setDesc]=useState("")
    const handleNameChange=(event)=>{
        console.log(name)
        setName(event.target.value)
    }
    const handleDescChange=(event)=>{
        setDesc(event.target.value)
    }
    return (
        <div className={`${styles.block}`}>
            <div className={`${styles.title}`}>New Category</div>
            <form className={`${styles.form}`}>
                <label className={`${styles.contain}`}>
                    <div className={`${styles.name}`}>Name of Domain</div>
                    <input type="text" value={name} onChange={handleNameChange} className={`${styles.textname} ${styles.text}`} required/>
                </label>
                <label className={`${styles.contain}`}>
                    <div className={`${styles.name}`}>Description</div>
                    <textarea type="text" value={desc} onChange={handleDescChange} className={`${styles.textdesc} ${styles.text}`} required/>
                </label>

                <div className={`${styles.buttons}`}>
                    {/* onlick is missing */}
                    <button className={`${styles.button} ${styles.blue}`}>Save</button>
                    <button className={`${styles.button} ${styles.orange}`}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default NewCategory