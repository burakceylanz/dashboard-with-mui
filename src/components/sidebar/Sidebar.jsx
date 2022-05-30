import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";


function Sidebar() {
    const {dispatch,fullscreenMode} =useContext(DarkModeContext)
    const [openmenu, setOpenmenu] = useState(false)
  return (
    <div className={openmenu ? "sidebar closemenu" :"sidebar"} style={{display: fullscreenMode ? "none" : "block"}}>
        <div className="top">
            <Link to="/" className="linktorouter">
                <div className="logo">{openmenu ? <text></text> : <text>BURAK CEYLAN</text>}
                <button className="list">
                <ListIcon onClick={()=>setOpenmenu(!openmenu)}/>
                </button>
                </div>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <h1 className="title">MAIN</h1>
                <Link to="/" className="linktorouter">
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <h1 className="title">LIST</h1>
                
                <Link to="/users" className="linktorouter">
                     <li>
                    <PersonOutlineIcon className="icon"/>
                    <span>Users</span>
                    </li>
                </Link>

                <Link to="/products" className="linktorouter">
                 <li>
                    <ProductionQuantityLimitsIcon className="icon"/>
                    <span>Products</span>
                    </li>  
                </Link>
              

                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>

                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>

                <h1 className="title">USEFUL</h1>
                <li>
                    <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>

                
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notification</span>
                </li>

                <h1 className="title">SERVICES</h1>
                <li>
                    <HealthAndSafetyIcon className="icon"/>
                    <span>System Healts</span>
                </li>
                                
                <li>
                    <LogoDevIcon className="icon"/>
                    <span>Logs</span>
                </li>
                                
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <h1 className="title">USER</h1>               
                <li>
                    <ManageAccountsIcon className="icon"/>
                    <span>Profile</span>
                </li>
                                                
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom" style={{display: openmenu ? "block" : "flex"}}>
            <div className="coloroptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="coloroptions" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar