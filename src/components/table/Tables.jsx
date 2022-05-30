import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Tracking ID', width: 150 },
  { field: 'product', headerName: 'Product', width: 150 },
  { field: 'customer', headerName: 'Customer', width: 150},
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 150,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 150,
  },
  { field: 'payment', headerName: 'Payment Method', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
];

const rows = [
  { id: 1, product: 'Snow', customer: 'Burak Ceylan', date:'10.05.2022' , amount:'500', payment:'Cash on Delivery',status: 'Approved' },
  { id: 2, product: 'Lannister', customer: 'Burak Ceylan', date:'10.05.2022' ,amount:'500',payment:'Online Payment', status: 'Approved' },
  { id: 3, product: 'Lannister', customer: 'Burak Ceylan',date:'10.05.2022' ,amount:'500',payment:'Cash on Delivery', status: 'Pending' },
  { id: 4, product: 'Stark', customer: 'Burak Ceylan', date:'10.05.2022' ,amount:'500',payment:'EFT',status: 'Approved' },
  { id: 5, product: 'Targaryen', customer: 'Burak Ceylan', date:'10.05.2022' ,amount:'500',payment:'Online',status: 'Pending' },
  { id: 6, product: 'Melisandre', customer: 'Burak Ceylan',date:'10.05.2022' ,amount:'500', payment:'Online',status: 'Approved' },
  { id: 7, product: 'Clifford', customer: 'Burak Ceylan', date:'10.05.2022' ,amount:'500',payment:'EFT',status: 'Approved' },
  { id: 8, product: 'Frances', customer: 'Burak Ceylan',date:'10.05.2022' , amount:'500',payment:'EFT',status: 'Approved' },
  { id: 9, product: 'Roxie', customer: 'Burak Ceylan', date:'10.05.2022' , amount:'500',payment:'EFT',status: 'Approved' },
];

export default function Tables() {
  return (
    <div style={{ height: 400, width: '100%' }} className='table'>
      <DataGrid
        rows={rows}
        columns={columns}
        pstatusSize={5}
        rowsPerPstatusOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}