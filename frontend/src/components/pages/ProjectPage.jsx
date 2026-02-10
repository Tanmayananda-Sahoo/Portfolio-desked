import { React, useState } from 'react'
import { motion } from 'motion/react';

const ProjectPage = (props) => {
  return (
    <motion.div
      drag
      dragConstraints={props.constraints}
      className={`absolute top-[18%] right-10`}
      dragMomentum={false}
      dragElastic={0}
      onClick={props.onClick}
      // onDrag={props.onFocus}
      onPointerDown={props.onFocus}
      style={{zIndex: props.zIndex}}
    >
      <div className={`bg-zinc-900 w-[65vw] h-[70vh] text-white flex flex-col justify-between`}>
        <div className='p-4 flex justify-between'>
          <h3 className='text-4xl'>Projects</h3>
          <div onClick={props.onClose}>
            <h5 className='text-2xl'>[X]</h5>
          </div>
        </div>
        <div className='w-full h-full p-4'>
          
        </div>
        <div>
          <p className='text-sm tracking-tighter text-center'>&copy;Tanmay Productions</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectPage