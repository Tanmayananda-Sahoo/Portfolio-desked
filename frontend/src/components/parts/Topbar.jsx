import React from 'react'
import { Link } from 'react-router-dom'
const Topbar = () => {
    return (
        <div className='absolute bg-[#0B0C0D] w-screen top-0 text-white tracking-tight text-sm px-4 py-1 flex gap-3 '>
            {[
                {
                    name: 'File',
                    link: '/'
                },
                {
                    name: 'Github',
                    link: 'https://github.com/Tanmayananda-Sahoo'
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/tanmayananda-sahoo'
                },
                {
                    name: 'Leetcode',
                    link: 'https://leetcode.com/u/Tanmayananda_Sahoo/'
                }]
                .map((elem, index) => {
                    return (
                        <div key={index}>
                            <Link to={`${elem.link}`} target='_blank'>{elem.name}</Link>
                        </div>
                    )
                })}
        </div>
    )
}

export default Topbar