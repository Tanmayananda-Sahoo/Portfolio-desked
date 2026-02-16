import { React, useState } from 'react'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const AboutPage = (props) => {
  return (
    <motion.div
      drag
      dragConstraints={props.constraints}
      className={`absolute top-[20%] right-[20%] `}
      dragMomentum={false}
      dragElastic={0}
      onClick={props.onClick}
      // onDrag={props.onFocus}
      onPointerDown={props.onFocus}
      style={{ zIndex: props.zIndex }}
    >
      <div className={`bg-zinc-900 text-white flex flex-col justify-between px-6`}>
        <div className='p-4 flex justify-between'>
          <h3 className='text-4xl'>About</h3>
          <div onClick={props.onClose}>
            <h5 className='text-2xl'>[X]</h5>
          </div>
        </div>
        <div className='h-full'>
          <div className='py-10 flex items-center gap-20 px-10'>
            <img src='../../public/Me.jpg' className='rounded-full h-40 w-40 bg-cover bg-center' />
            <div>
              <h1 className='text-5xl'>Tanmay</h1>
              <p className=''>Enthusiastic Tech Guy!!</p>
              <p>Student at VIT'V</p>
              <div className='flex gap-2'>
                <Link to='https://www.linkedin.com/in/tanmayananda-sahoo' className='py-0.5 px-1 bg-zinc-400 rounded-lg' target='_blank'>LinkedIn</Link>
                <Link to='https://www.github.com/Tanmayananda-Sahoo' className='py-0.5 px-1 bg-zinc-400 rounded-lg' target='_blank'>Github</Link>
              </div>
            </div>
          </div>
          <div className='w-full p-4'>
            <p>Hi I am Tanmay, a web-developer who loves to develop out of the box ideas.</p>
            <p>Apart from web-developing,</p>
            <ul style={{ listStyleType: 'circle' }}>
              <li>Writes fluent backend code</li>
              <li>I am into cybersecurity</li>
              <li>I am into Machine Learning as well</li>
            </ul>
            <p></p>
          </div>
        </div>
        <div>
          <p className='text-sm tracking-tighter text-center'>&copy;Tanmay Productions</p>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage