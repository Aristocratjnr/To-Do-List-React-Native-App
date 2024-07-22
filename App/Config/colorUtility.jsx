import { danger, green, secondary, yellow } from "./Colors"


const setColor = (item)=>{
    if (item){
        if (item === 'Urgent') return danger
        if (item === 'Important') return secondary
        if (item === 'Not Vey Urgent') return green
        if (item === 'Later') return yellow
        
    }else{
        return secondary;
    }
}

export default setColor;