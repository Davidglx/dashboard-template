import React from 'react';
import './Widget.scss';
import { KeyboardArrowUp } from '@mui/icons-material';
import { PersonOutlineOutlined } from '@mui/icons-material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { MonetizationOnOutlined } from '@mui/icons-material';
import { AccountBalanceOutlined } from '@mui/icons-material';

const Widget = ({ type}) => {
    let data;

    // temporary
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlined className='icon' style={{ color: "crimson", backgroundColor: "rgb(255, 0 , 0, 0.2)", }} />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                 isMoney: false,
                 link: "View all orders",
                 icon: <ShoppingCartOutlined  className='icon' style={{ color: "goldenrod", backgroundColor: "rgb(218, 165 , 32, 0.2)", }} />
            };
            break;
       case "earnings":
             data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className='icon' style={{ color: "green", backgroundColor: "rgb(0, 128 , 0, 0.2)", }} />
            };
            break;
        case "balance":
             data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceOutlined className='icon' style={{ color: "purple", backgroundColor: "rgb(128, 0, 128, 0.2)", }} />
               };
               break;
            default:
                break;
    }



  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>
                {data.isMoney && "$"} {amount}
            </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <KeyboardArrowUp />
                {diff}
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget;

