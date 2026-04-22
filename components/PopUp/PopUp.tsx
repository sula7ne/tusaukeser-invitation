import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";

import Image from "next/image";
import babyNoImg from "@/assets/images/babyNo.webp";
import babyYesImg from "@/assets/images/babyYes.webp";
import stickersImg from "@/assets/images/stickers.jpg";
import styles from "@/components/PopUp/PopUp.module.scss"

interface PopUpProps {
    setIsPopUp: Dispatch<SetStateAction<boolean>>,
    isCome: boolean
}

const PopUp = ({ setIsPopUp, isCome }: PopUpProps) => {
    const [isImgLoading, setIsImgLoading] = useState(true);

    const handleClose = (e: MouseEvent<HTMLDivElement> ) => {
        if (e.target === e.currentTarget) {
            setIsPopUp(false);
        }
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsPopUp(false);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [setIsPopUp]);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div onClick={handleClose} className={styles.container}>
            <div className={styles['pop-up']}>
                <button onClick={() => setIsPopUp(false)} className={styles.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 23 23"> <g fillRule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"></path> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"></path> </g> </svg>
                </button>

                <div className={styles.content}>
                    {/* <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"></path> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"></path> </svg> */}
                    <div className={styles.img}>
                        {isImgLoading && <div className={styles.spinner}></div>}
                        
                        <Image 
                            src={isCome ? babyYesImg : babyNoImg} 
                            alt="come" 
                            onLoad={() => setIsImgLoading(false)}
                            style={{ opacity: isImgLoading ? 0 : 1, transition: 'opacity 0.3s' }}
                        />
                    </div>
                    <h2>{isCome ? 'Рахмет' : 'Өте өкінішті'}! 💌</h2>
                    <div className={styles.description}>
                        <p>Жауабыңыз жіберілді{isCome ? '. Сіздерді біздің тойымызда күтеміз!' : '!'}</p>
                        {isCome && <p>Cізге арналған шағын <a href={stickersImg.src} download="stickers.jpg">сыйлық</a> (басыңыз)</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;