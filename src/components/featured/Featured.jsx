import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Featured() {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={67} text={"67%"} strokeWidth={5} />
            </div>
            <p className="title">Total sale made today</p>
            <p className="amount">₺420</p>
            <p className="desc">Previous transactions proccessing.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">₺37.2k</div>
                    </div>                    
                </div>

                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">₺6.05k</div>
                    </div>                    
                </div>

                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">₺17.52k</div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured