import React, { useRef, useState } from 'react'
import Navbar from '../parts/Taskbar.jsx';
import Topbar from '../parts/Topbar.jsx';
import FilesIcons from '../parts/FilesIcons.jsx';
import ProjectPage from './ProjectPage.jsx';
import AboutPage from './AboutPage.jsx';
import ContactPage from './ContactPage.jsx';
import MeetingPage from './MeetingPage.jsx';
const HomePage = () => {
  const [windows, setWindows] = useState({
    about: false,
    projects: false,
    contact: false,
    meeting: false
  })

  const openWindow = (name) => {
    setWindows((prev) => ({...prev, [name]: true}));
    console.log(windows);
  }

  const closeWindow = (name) => {
    setWindows((prev) => ({...prev, [name]: false}));
    // console.log(windows);
  }

  const [topz, setTopz] = useState(10);
  const [zmap, setZmap] = useState({});

  const focusWindow = (name) => {
    setTopz(prev => {
      const next = prev+1;
      setZmap(prev => ({...prev, [name]: next}));
      return next;
    })
    // console.log(zmap);
  }

  const desktopScreen = useRef(null);
  return (
        <div
        className='w-screen h-screen bg-[url("https://wallpapercave.com/wp/wp2218310.jpg")] bg-center bg-cover'
        ref={desktopScreen}
        >
          <Topbar />
          {windows.projects && 
          <ProjectPage 
          constraints={desktopScreen} 
          onClose={() => closeWindow('projects')} 
          onFocus={() => focusWindow('projects')}
          zIndex={zmap.projects}
          />}
          {windows.about && 
          <AboutPage 
          constraints={desktopScreen} 
          onClose={() => closeWindow('about')} 
          onFocus={() => focusWindow('about')}
          zIndex={zmap.about}
          />}
          {windows.contact && 
          <ContactPage 
          constraints={desktopScreen} 
          onClose={() => closeWindow('contact')} 
          onFocus={() => focusWindow('contact')}
          zIndex={zmap.contact}
          />}
          {windows.meeting &&
          <MeetingPage
          constraints={desktopScreen}
          onClose={() => closeWindow('meeting')}
          onFocus={() => focusWindow('meeting')}
          zIndex={zmap.meeting}
          />}

          <div className='w-screen h-screen text-white py-10 px-10 flex flex-col gap-6'>
            <div className='max-w-[14%] flex justify-between rounded-md'>
              <div className='flex flex-col gap-6'>
                <FilesIcons 
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=256&q=75' 
                name='Have a meet'
                onClick={() => openWindow('meeting')}
                />
                <FilesIcons 
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work.webp&w=256&q=75' 
                name='LinkedIn'
                toLink='https://www.linkedin.com/in/tanmayananda-sahoo'
                />
                <FilesIcons 
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=256&q=75' 
                name='Leetcode'
                toLink='https://leetcode.com/u/Tanmayananda_Sahoo/'
                />
                <FilesIcons 
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work.webp&w=256&q=75' 
                name='Github'
                toLink='https://github.com/Tanmayananda-Sahoo'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <FilesIcons
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work.webp&w=256&q=75' 
                name='Projects'
                onClick={() => openWindow('projects')}
                />
                <FilesIcons 
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=256&q=75' 
                name='About'
                onClick={() => openWindow('about')}
                />
                <FilesIcons 
                link='https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=256&q=75' 
                name='Contact'
                onClick={() => openWindow('contact')}
                />
              </div>
            </div>
          </div>
          <Navbar />
        </div>
  )
}

export default HomePage