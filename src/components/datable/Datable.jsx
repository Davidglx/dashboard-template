import React from 'react';
import './Datable.scss';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns,  userRows } from '../../datablesource';


const Datable = () => {
  return (
    <div className='datable'>
         <DataGrid
        rows={ userRows }
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
  )
}

export default Datable