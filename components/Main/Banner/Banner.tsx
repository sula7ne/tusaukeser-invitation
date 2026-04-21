import Image from "next/image";
import coupleImg from "@/assets/images/baby.jpg";
import styles from "@/components/Main/Banner/Banner.module.scss";

const Banner = () => {
    return (
        // <div className={styles.banner}>
        //     <Image src={coupleImg} alt="Фото пары" />
            
        //     <div className={styles.text}>
        //         <h1 className={styles.names}>
        //             <span className={styles.name}>Нәдір</span>
        //             <span className={styles.event}>Тұсау кесер</span>
        //         </h1>
        //         <p className={styles.date}>23/05</p>
        //     </div>
        // </div>
        <div className={styles.banner}>
            <h2 className={styles.name}>Нәдір</h2>

            <Image src={coupleImg} alt="Фото" />
            
            <h2 className={styles.event}>Тұсау кесер</h2>
        </div>
    );
}

export default Banner;