import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


function Widget({type}) {

  let data;

  const amount = 100
  const diff = 20

  switch(type){
      case "user":
          data={
              title:"USERS",
              isMoney:false,
              link:"See all users",
              icon:<PersonOutlineIcon className="icon" style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)",}}/>,
          };
          break;

          case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View all orders",
                icon:<LocalGroceryStoreIcon className="icon"style={{color:"goldenrod", backgroundColor:"rgba(218,165,32,0.2)",}} />,
            };
            break;

            case "earning":
                data={
                    title:"EARNINGS",
                    isMoney:true,
                    link:"View all earnings",
                    icon:<MonetizationOnIcon className="icon" style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)",}} />,
                };
                break;

                case "balance":
                    data={
                        title:"BALANCE",
                        isMoney:true,
                        link:"See details",
                        icon:<AccountBalanceIcon className="icon" style={{color:"whitesmoke", background:"linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",}} />,
                    };
                    break;

          
        default:
          break;
  }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "₺"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
               <KeyboardArrowUpIcon/> {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget