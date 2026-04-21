import { useLayoutEffect, useRef } from "react";

import Image from "next/image";
import cloud1Img from "@/assets/images/cloud1.webp";
import cloud2Img from "@/assets/images/cloud2.png";
import gsap from "gsap";
import styles from "@/components/Main/Info/Info.module.scss";

const Info = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.fromTo(titleRef.current, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
            .fromTo(textRef.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.6"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={styles.info}>
            <h2 ref={titleRef} className={styles.title}>Құрметті қонақтар!</h2>
            <p ref={textRef} className={styles.description}>Сіздерді Нәдір ұлымыздың 1 жас тұсаукесер тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!</p>
        </div>
    );
}

export default Info;