import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const Navbar = () => {
  return (
   <div className='navbar'>
     <div className='wrapper'>
       <div className='search'>
         <input type="text" placeholder='Search...' />
         <SearchIcon />
       </div>
       <div className='items'>
         <div className='item'>
         <LanguageIcon className='icon' />
         English
         </div>
         <div className='item'>
         <DarkModeIcon className='icon' />
         </div>
         <div className='item'>
         <FullscreenExitIcon className='icon' />
         </div>
         <div className='item'>
         <NotificationsNoneIcon className='icon' />
         <div className='counter'>1</div>
         </div>
         <div className='item'>
         <ChatBubbleOutlineIcon className='icon' />
         <div className='counter'>2</div>
         </div>
         <div className='item'>
         <FormatListNumberedIcon className='icon' />
         </div>
         <div className='item'>
         <img src='https://media.istockphoto.com/photos/buddhist-temple-in-tibet-picture-id519886871?k=20&m=519886871&s=612x612&w=0&h=XeUTll3DNCJ7GJRhVlQKKasDnYxT4zOnMhJKI2A2JfY='
          className='avatar' />
         </div>
       </div>
     </div>
   </div>
  )
}

export default Navbar;
