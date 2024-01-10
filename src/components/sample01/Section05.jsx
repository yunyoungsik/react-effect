import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const Section05 = () => {
    const controls = useAnimation();

    const handleButtonClick = () => {
        controls.start({
            scale: 1.5,
            borderRadius: "10px",
            rotate: 720,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20
            }
        })
    }

    return (
        <section id='section05' className='react__item'>
            <span className='num'>05. useAnimation</span>
            <motion.div
                className='circle'
                initial={{ scale: 0.5 }} // 초기값
                animate={controls}
            ></motion.div>
            <span className='btn' onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.2 4.654V2a.7.7 0 111.4 0v5a.7.7 0 01-.7.7h-5a.7.7 0 110-1.4h3.573a4.845 4.845 0 00-4.53-3.1C5.266 3.2 3.1 5.35 3.1 8s2.167 4.8 4.842 4.8a4.849 4.849 0 003.426-1.408.7.7 0 01.986.994A6.244 6.244 0 017.942 14.2C4.496 14.2 1.7 11.426 1.7 8s2.796-6.2 6.242-6.2A6.261 6.261 0 0113.2 4.654z" fill="#fff" data-projection-id="2" transform-origin="8.149999141693115px 7.750005125999451px" style={{ transform: "none", transformOrigin: "8.15px 7.75001px" }}></path></svg>
            </span>
        </section>
    )
}

export default Section05