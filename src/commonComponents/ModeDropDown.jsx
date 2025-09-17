import React, { useState } from 'react';
import { DarkModeSvg, ModeSwitchSvg } from '../assets/commonSvgs';
import { data } from '../assets/data';
import { useAtom } from 'jotai';

function ModeDropDown() {
    const [isHovered, setIsHovered] = useState(false);
    const [{mode}, setMode] = useAtom(data);
    const onMode = (value) => {
        setMode(prev => ({ ...prev, mode: value }))
    }
  return (
    <div 
        className='ModeDropDownMainCon'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {mode !== "light" ?
        <ModeSwitchSvg className="modeIcon" />
        :
        <DarkModeSvg className="modeIcon" />
        }
        {isHovered && 
        <div 
            className='ModeDropDownCon'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span onClick={()=>onMode("light")}>Light</span>
            <span onClick={()=>onMode("dark")}>Dark</span>
            <span onClick={()=>onMode("digital")}>Digital</span>
        </div>
        }
    </div>    
  )
}

export default ModeDropDown
