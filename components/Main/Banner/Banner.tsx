import Image from "next/image";
import babyImg from "@/assets/images/baby.png";
import balloonImg from "@/assets/images/balloon.svg";
import balloonYearImg from "@/assets/images/balloonYear.svg";
import ropeImg from "@/assets/images/rope.webp";
import styles from "@/components/Main/Banner/Banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.top}>
                <Image src={ropeImg} alt="rope"/>
            </div>

            <div className={styles.center}>
                <div className={styles.imgs}>
                    <Image className={styles.balloon} src={balloonImg} alt="balloon" />
                    <Image className={styles.balloonYear} src={balloonYearImg} alt="balloon 1 year" />        
                    <Image className={styles.balloon} src={balloonImg} alt="balloon" />
                </div>
                
                <div className={styles.container}>
                    <h2>Нәдір</h2>
                    <Image src={babyImg} alt="Photo" />
                    <h2>Тұсау кесер</h2>
                </div>
            </div>
        </div>
    );
}

export default Banner;