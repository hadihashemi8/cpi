import React from 'react'
import { motion } from 'framer-motion'
import arrow from "/./src/assets/icons/arrow-circle-up.svg"


export default function BackToTopBtn({ backTopHandlear }) {
    return (
        <motion.div initial={{ top: '100%' }} animate={{ top: "90%" }}  exit={{ top: '100%' }} className=' z-50 cursor-pointer fixed bottom-4 right-4  flex' onClick={() => backTopHandlear()}>
            <img  src={arrow} alt="" />
        </motion.div>
    )
}
