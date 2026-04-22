import Banner from "./Banner/Banner";
import Confetti from "../Animations/Confetti/Confetti";
import Countdown from "./Countdown/Countdown";
import Date from "./Date/Date";
import Form from "@/components/Form/Form";
import Image from "next/image";
import Info from "./Info/Info";
import Location from "./Location/Location";
import Organizers from "./Organizers/Organizers";
import { RefObject } from "react";
import baby1Img from "@/assets/images/baby1.png"
import baby2Img from "@/assets/images/baby2.png"
import baby3Img from "@/assets/images/baby3.png"
import cloud1Img from "@/assets/images/cloud1.webp";
import cloud2Img from "@/assets/images/cloud2.png";
import cloud4Img from "@/assets/images/cloud4.webp";
import styles from "@/components/Main/Main.module.scss"

interface MainProps {
    audioRef: RefObject<HTMLAudioElement | null>;
}

const Main = ({ audioRef }: MainProps) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Confetti audioRef={audioRef} />


                <Banner />

                <div className={styles.info}>
                    <Image src={cloud1Img} alt="cloud" />
                    
                    <Info />

                    <Image src={cloud2Img} alt="cloud" />
                </div>
                
                <div className={styles.date}>
                    <Date />

                    <h2>Басталуы 14:00-де</h2>
                </div>

                {/* <TimePath /> */}

                <div className={styles.countdown}>
                    <Image src={baby1Img} alt="baby" />
                    
                    <Countdown />

                    <Image src={baby2Img} alt="baby" />
                </div>

                <Location />


                <div className={styles.organizers}>
                    <Image src={cloud4Img} alt="baby" />
                    
                    <Organizers />

                    <Image src={baby3Img} alt="baby" />
                </div>
                
                <Form />
            </div>
        </main>
    );
}

export default Main;