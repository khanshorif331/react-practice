import React, { useState } from 'react';
import logo from './battery-status.png';

const Mobile = () => {
    const [battery,setBattery]=useState(100)

    const batteryDataDown=()=>{
        document.getElementById('full').style.display='none'
        const newBatteryData =battery-10
        if(newBatteryData<0){
            return
        }
        setBattery(newBatteryData)
    }
    const batteryDataUp=()=>{ 
        const newBatteryData =battery+10
        
        
        if(newBatteryData>100){
            return(
                document.getElementById('full').style.display='block'
            )
        }
        setBattery(newBatteryData)
    }
    return (
        <div>
            <h1>Charging Battery</h1>
            <img width={50} src={logo} alt="" />
            <h1>Charging on Battery: {battery}%</h1>
            <p id='full' style={{display:'none'}}>Battery Full</p>
            <button onClick={batteryDataDown}>Battery Down</button>
            <button onClick={batteryDataUp}>Battery Up</button>
        </div>
    );
};

export default Mobile;