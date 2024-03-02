import React from 'react'
import styles from "../../styles/Build/Writtinghelloworld.module.css"

const Writtinghelloworld = () => {
  return (<div className={styles.Writtinghelloworld}>
          <img src="/images/Build/still_writing.png" style={{height:"auto",width:"85%",margin:"auto"}}></img>
          <div className={styles.Writtinghelloworld_right}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                marginTop: "80px",
                fontSize: "36px",
                fontFamily: "Poppins",
                fontWeight: "600",
                letterSpacing: "0.01em",
                padding: "1.1rem",
              }}
            >
              Still writing “Hello World”?
            </h1>

            <p
              style={{
                fontFamily: "Poppins",
                paddingLeft: "30px",
                fontSize: "1.6rem",
                lineHeight: "27px",
                marginTop: "14px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
                width: "85%",
              }}
            >
              start building real world projects with us.
            </p>
          </div>
        </div>
  )
}

export default Writtinghelloworld