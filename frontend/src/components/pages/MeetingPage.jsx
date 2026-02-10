import { React, useState } from 'react'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axios.js';

const MeetingPage = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const formHandler = async(e) => {
        e.preventDefault();
        const formData = {
            email,
            name,
            phone
        }
        await axiosInstance.post('/user/register', formData)
        .then((response) => console.log(response.data.message))
        .catch((error) => console.log(error.response?.data.message));
        // console.log(response?.data.message);
    }
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
            <div className={`bg-zinc-900 text-white flex flex-col justify-between px-8 w-[35vw] h-[70vh]`}>
                <div className='p-4 flex justify-between'>
                    <h3 className='text-4xl'>About</h3>
                    <div onClick={props.onClose}>
                        <h5 className='text-2xl'>[X]</h5>
                    </div>
                </div>
                <div className='py-8 w-full'>
                    <form className='w-full' name='meetForm'>
                        <p className=''>Name :</p>
                        <input 
                        type='text' 
                        placeholder='Enter your name' 
                        className='border rounded-md p-2 tracking-tight w-full'
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                        <p className='mt-3'>Email :</p>
                        <input 
                        type='email' 
                        placeholder='Enter your email' 
                        className='border rounded-md p-2 tracking-tight w-full'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        />
                        <p className='mt-3'>Phone No. :</p>
                        <input 
                        type='text' 
                        placeholder='Enter your phone number' 
                        className='border rounded-md p-2 tracking-tight w-full'
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        />
                        <input 
                        type='submit' 
                        value='Submit' 
                        className='px-4 py-1 bg-sky-500 rounded-md cursor-pointer mt-6 font-semibold tracking-tighter'
                        onClick={(e) => formHandler(e)}
                        />
                    </form>
                </div>
                <div>
                    <p className='text-sm tracking-tighter text-center'>&copy;Tanmay Productions</p>
                </div>
            </div>
        </motion.div>
    )
}

export default MeetingPage