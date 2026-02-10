import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const hoverHandler = () => {
    setDisplay(!display);
  }
  return (
    <div className='backdrop-blur-md bg-white/10 backdrop-saturate-100 tracking-tighter flex gap-4 text-sm text-zinc-300 justify-center items-center absolute bottom-2 left-[50%] translate-x-[-50%] px-2 py-1 rounded-md'>
      {[
        {
          link: 'https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work.webp&w=256&q=75',
          path: '/contact',
          name: 'contact'
        },
        {
          link: 'https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=256&q=75',
          path: '/about',
          name: 'about'
        },
        {
          link: 'https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=256&q=75',
          path: '/projects',
          name: 'projects'
        }]
        .map((elem, index) => {
          return (
            <div className='bg-green-500'>
              <div 
              key={(index*2)+1} 
              className={`absolute top-[-25px] rounded-md bg-white/10 px-1 opacity-${display? 1: 0} text-sm`}>
                {elem.name}
              </div>
              <div 
              key={index} 
              className='hover:scale-[1.5] transition-all' 
              onMouseEnter={() => hoverHandler} 
              onMouseLeave={() => hoverHandler}>
                <Link to={`${elem.path}`}>
                  <img src={`${elem.link}`} className='h-10' />
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Navbar