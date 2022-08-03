import React from 'react';
import './List.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datable from '../../components/datable/Datable';

const List = () => {
  return (
    <div className='list'>
        <Sidebar />
        <div className='listContainer'>
            <Navbar />
            <Datable />
        </div>
    </div>
  )
}

export default List