export const userColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {field:'user', headerName:'User', width:230, renderCell:(params=>{
      return(
        <div className="cellWithTable">
            <img className="cellImg" src={params.row.img} alt="avatar"/>
            {params.row.user}
        </div>
      )
    })},
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: 'age',
      headerName: 'age',
      type: 'number',
      width: 100,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160, renderCell:(params=>{
        return(
          <div className={`cellwithstatus ${params.row.status}`}> {params.row.status}</div>
        )
      })
    },
];

export const userRows = [
    { id: 1,user:'Burak Ceylan', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Active', email:'burakbayarceylan@gmail.com' ,age:22},
    { id: 2,user:'Burak Ceylan', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Active', email:'burakbayarceylan1@gmail.com' ,age:22 },
    { id: 3,user:'Burak Ceylan', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Pending', email:'burakbayarceylan2@gmail.com' ,age:22 },
    { id: 4,user:'Burak Ceylan', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Passive', email:'burakbayarceylan3@gmail.com' ,age:22 },
    { id: 5, user:'Burak Ceylan',img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Pending', email:'burakbayarceylan4@gmail.com' ,age:22 },
    { id: 6, user:'Burak Ceylan',img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Passive', email:'burakbayarceylan5@gmail.com' ,age:22 },
    { id: 7,user:'Burak Ceylan', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Passive', email:'burakbayarceylan6@gmail.com' ,age:22 },
    { id: 8,user:'Burak Ceylan', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Pending', email:'burakbayarceylan7@gmail.com' ,age:22 },
    { id: 9, user:'Burak Ceylan',img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU', status: 'Active', email:'burakbayarceylan8@gmail.com' ,age:22 },
  ];