const DarkModeReducer = (state, action) =>{
    switch(action.type){
        case "LIGHT":{
            return{
                darkMode:false,
            }
        }
        case "DARK":{
            return{
                darkMode:true,
            }
        }
        case "TOGGLE":{
            return{
                darkMode:!state.darkMode,
            }
        }
        case "BLOCK":{
            return{
                fullscreenMode:false,
            }
        }
        case "NONE":{
            return{
                fullscreenMode:true,
            }
        }
        case "FSTOGGLE":{
            return{
                fullscreenMode:!state.fullscreenMode,
            }
        }
        
        default:
        return state;
    }
}



export default DarkModeReducer;