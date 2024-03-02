import styles from "../../styles/domain/DomainDescription.module.css"
const domaindesc = () => {
    const dummyData="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    return (
    <div className={`${styles.description}`}>
        <div className={`${styles.titlediv}`}>
            Domain Name
        </div>
        
        <div className={`${styles.imgdiv}`}></div>

        <div className={`${styles.container}`}>
            <div className={`${styles.heading}`}>Heading - 1</div>
            <div className={`${styles.para}`}>
                {dummyData}
            </div>

            <div className={`${styles.heading}`}>Heading - 1</div>
            <div className={`${styles.para}`}>
                {dummyData}
            </div>

            <div className={`${styles.heading}`}>Heading - 1</div>
            <div className={`${styles.para}`}>
                {dummyData}
            </div>
        </div>

        <div className={`${styles.buttContainer}`}>
            <button className={`${styles.butt}`}> Join Community</button>
            <button className={`${styles.butt}`}> Start Building </button>
        </div>
    </div>)
}

export default domaindesc;