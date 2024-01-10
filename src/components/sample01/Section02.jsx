import React from 'react'
import { motion } from 'framer-motion'

const Section02 = () => {
    return (
        <section id='section02' className='react__item'>
            <span className='num'>02. Gestures</span>
            <motion.div
                className='circle'
                whileHover={{
                    scale: 0.4,
                    borderRadius: "10px",
                    rotate: 180
                }}
                whileTap={{
                    scale: 1.5,
                    borderRadius: "50%",
                    rotate: -180,
                }}
                whileDrag={{
                    scale: 0.4,
                    borderRadius: "10px",
                    rotate: 180
                }}
                drag
            ></motion.div>
        </section>
    )
}

export default Section02