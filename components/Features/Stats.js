import React from 'react'
import styles from '../../styles/home/Stats.module.css'

const Stats = () => {
    return (
        <div className={`${styles.Stats}`}>
            <div className={`${styles.Stats_head}`}>
                Our Mentors works at ..
            </div>
            <div className={`${styles.Stats_holder}`}>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                   <img src="https://imageio.forbes.com/specials-images/imageserve/5d825aa26de3150009a4616c/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                        Amazon
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://sambadenglish.com/wp-content/uploads/2020/09/paytm.png" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                        Paytm
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://cdn.worldvectorlogo.com/logos/tata-consultancy-services.svg" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                       TCS
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://financialit.net/sites/default/files/hitachi_vantara_0.jpg" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                      Hitachi Vantara
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/CognizantLogo400.jpg" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                      Cognizant
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                     Infosys
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://brc.org.uk/media/675924/deloitte.png" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                     Deloitte
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://i.gadgets360cdn.com/large/Teos_website_small_1650287397786.jpg" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                     Tezos India
                    </div>
                </div>
                <div className={`${styles.stats_block}`}>
                    <div className={`${styles.stats_data}`}>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/5c13d2f64bbe6f0f2aa26233/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds" alt="" />
                    </div>
                    <div className={`${styles.stats_data_type}`}>
                     Cisco
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats