import React, { useState } from 'react';

const Mobile = () => {
    const [battery,setBattery]=useState(100)

    const batteryDataDown=()=>{
        const newBatteryData =battery-10
        if(newBatteryData<0){
            return
        }
        setBattery(newBatteryData)
    }
    const batteryDataUp=()=>{
        const newBatteryData =battery+10
        if(newBatteryData>100){
            return
        }
        setBattery(newBatteryData)
    }

    return (
        <div>
            <h1>{battery}%</h1>
            <button onClick={batteryDataDown}>Battery Down</button>
            <button onClick={batteryDataUp}>Battery Up</button>
        </div>
    );
};

export default Mobile;