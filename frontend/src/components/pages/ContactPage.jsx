import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const ProjectPage = (props) => {
    return (
        <motion.div
            drag
            dragConstraints={props.constraints}
            className={`absolute top-[5%] left-8`}
            dragMomentum={false}
            dragElastic={0}
            onClick={props.onClick}
            // onDrag={props.onFocus}
            onPointerDown={props.onFocus}
            style={{ zIndex: props.zIndex }}
        >
            <div className={`bg-zinc-900 pb-2 text-white flex flex-col justify-between`}>
                <div className='p-4 flex justify-between'>
                    <h3 className='text-4xl'>Contact</h3>
                    <div onClick={props.onClose}>
                        <h5 className='text-2xl'>[X]</h5>
                    </div>
                </div>
                <div className='p-4 text-center flex flex-col items-center gap-4'>
                    <h1 className='text-4xl uppercase tracking-tighter'>Email !</h1>
                    <p className='w-[50%]'>It should be good if you email me.. I don't really check my social media messages. So please e-mail me.</p>
                    <div className='flex gap-1.5 items-center'>
                        <p>Mail me at </p>
                        <Link to='mailto:boyvector06@gmail.com' className='py-0.5 px-1 bg-zinc-400 rounded-lg'>Email-Id</Link>
                    </div>
                    <p>Mail Id: <code>boyvector06@gmail.com</code></p>
                </div>
                <div>
                    <p className='text-sm tracking-tighter text-center'>&copy;Tanmay Productions</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectPage