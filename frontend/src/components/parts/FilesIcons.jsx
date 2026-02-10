import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const FilesIcons = (props) => {
    return (
            <div className='flex flex-col' onClick={props.onClick}>
                {props.toLink?  
                    <Link to={`${props.toLink}`} target='_blank'>
                        <img src={props.link} className='h-20'/>
                    </Link>: 
                    <Link>
                        <img src={props.link} className='h-20' />
                    </Link>
                }
                <p className='text-sm text-center tracking-tight'>{props.name}</p>
            </div>
    )
}

export default FilesIcons