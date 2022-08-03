import React from 'react';
import './Sidebar.scss';
import {BsDashSquareFill} from 'react-icons/bs';
import {HiUsers} from 'react-icons/hi';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
import {MdPayment} from 'react-icons/md';
import {MdDeliveryDining} from 'react-icons/md';
import {ImStatsBars2} from 'react-icons/im';
import {MdOutlineNotificationsActive} from 'react-icons/md';
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import {FaMicroblog } from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {ImProfile} from 'react-icons/im';
import {AiOutlineLogout} from 'react-icons/ai'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">Johnson David</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                     <BsDashSquareFill className='icon' />
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
            </ul>
            <ul>
                <li>
                     <HiUsers className='icon' /> 
                    <span>Users</span>
                </li>
            </ul>
            <ul>
                <li>
                     <MdOutlineProductionQuantityLimits className='icon' />
                    <span>Products</span>
                </li>
            </ul>
            <ul>
                <li>
                   <MdPayment className='icon'/>
                    <span>Orders</span>
                </li>
            </ul>
            <ul>
                <li>
                    <MdDeliveryDining className='icon' />
                    <span> Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
            </ul>
            <ul>
                <li>
                    <ImStatsBars2 className='icon'/>
                    <span>Stats</span>
                </li>
            </ul>
            <ul>
                <li>
                     <MdOutlineNotificationsActive className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
            </ul>   
            <ul>              
                <li>
                    <MdOutlineHealthAndSafety className='icon'/>
                    <span>Sysytem Health</span>
                </li>
            </ul>
            <ul>              
                <li>
                     <FaMicroblog className='icon'/>
                    <span>Logs</span>
                </li>
            </ul>
            <ul>
                <li>
                <FiSettings className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
            </ul>
            <ul>  
                <li>
                <ImProfile className='icon'/>
                    <span>Profile</span>
                </li>
            </ul>
            <ul>
                <li>
                    <AiOutlineLogout className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default Sidebar;
 