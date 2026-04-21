import { RefObject, useEffect } from "react";
import { setIsIntro, setIsIntroOpening } from "@/state/slices/appSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";

import Image from "next/image";
import babyIntroImg from "@/assets/images/babyIntro.png";
import clickImg from "@/assets/images/click.webp";
import letterBottomImg from "@/assets/images/letter-bottom.webp";
import letterTopImg from "@/assets/images/letter-top.webp";
import stepImg from "@/assets/images/step1.png";
import styles from "@/components/Intro/Intro.module.scss"

interface IntroProps {
    audioRef: RefObject<HTMLAudioElement | null>
}

const Intro = ({ audioRef }: IntroProps) => {
    const { isIntroOpening } = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();

    const handleOpen = () => {
        dispatch(setIsIntroOpening(true));
        audioRef.current?.play();
        
        setTimeout(() => dispatch(setIsIntro(false)), 5000);
    }

    useEffect(() => {
        if (isIntroOpening) {
            document.body.style.overflow = "";
        } else {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isIntroOpening]);

    return (
        <div className={`${styles.intro} ${isIntroOpening ? styles.opening : ""}`}>
            <div className={styles['letter-wrapper']}>
                <div className={styles['letter-top']}>
                    <div className={styles.container}>
                        {/* <Image className={styles.baby} src={babyIntroImg} alt="baby" /> */}

                        <h1 className={styles.title}>Тұсау кесер шақыру</h1>
                    </div>
                    <Image src={letterTopImg} alt="Верхняя часть письма" className={styles.letter} />
                </div>

                <div className={styles['letter-btn']} onClick={handleOpen}>
                    <Image src={clickImg} alt="Открыть письмо" className={styles.btn} />
                </div>

                <div className={styles['letter-bottom']}>
                    <Image src={letterBottomImg} alt="Нижняя часть письма" className={styles.letter} />
                        <div className={styles.container}>
                            <Image className={styles.step} src={stepImg} alt="step" />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;