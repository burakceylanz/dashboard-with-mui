import { height } from "@mui/system"
import Chart from "../../components/chart/Chart"
import DataTable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./single.scss"

function Single() {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editbutton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU"
            alt="avatar"
            className="itemImg"/>
            <div className="details">
              <h1 className="title">Burak Ceylan</h1>
              <div className="detailItem">
                <span className="itemKey"><b>Email:</b></span>
                <span className="itemKey">Burak Ceylan</span>
              </div>
              <div className="detailItem">
                <span className="itemKey"><b>Phone:</b></span>
                <span className="itemKey">+90 542 542 42 42</span>
              </div>
              <div className="detailItem">
                <span className="itemKey"><b>Adress:</b></span>
                <span className="itemKey">Istanbul Turkey</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title="User Pending (Last 6 Motnhs)" height={height}/>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomtitle">Other Users</div>
        <DataTable table={3/2}/>
      </div>
      </div>
    </div>
  )
}

export default Single