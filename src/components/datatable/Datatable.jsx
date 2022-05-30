import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function DataTable(table) {

  const [data,setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !==id));
  };
  
  const actionColumn = [{field:'action', headerName:'Action', width:200, renderCell:(params=>{
    return(
      <div className="actionColumn">
        <Link to="/users/test" style={{textDecoration:"none"}}>
         <div className="viewButton">View</div>
        </Link>
         <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
      </div>
    )
  })},];

  return (
    <div style={{ height: 400, width: '95%' }} className="datatable">
      <Link to="/users/new" style={{textDecoration:"none"}}>
      <button>Add new User</button> 
      </Link>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        table={table}
      />
    </div>
  );
}
