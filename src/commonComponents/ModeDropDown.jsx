import React, { useState } from 'react';
import { data } from '../assets/data';
import { useAtom } from 'jotai';

function ModeDropDown() {
    const [isHovered, setIsHovered] = useState(false);
    const [{mode}, setMode] = useAtom(data);
    const onMode = (value) => {
        setMode(prev => ({ ...prev, mode: value }))
    }

    const url = 
        mode === "light" ? "/sun.png" : 
        mode ===  "dark" ? "/moon.png" : "/digital.png"

    return (
        <div 
            className='ModeDropDownMainCon'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={url}
                alt="mode"
                className="modeIcon"
            />

            {isHovered && 
            <div 
                className='ModeDropDownCon'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button className="dropdownButton" onClick={()=>onMode("light")}>
                    <span>Light</span>
                    <img 
                        src="/day-time.webp"
                        alt="mode"
                        className="dropdownIamges"
                    />
                </button>
                <button className="dropdownButton" onClick={()=>onMode("dark")}>
                    <span>Dark</span>
                    <img 
                        src="/night-time.jpg"
                        alt="mode"
                        className="dropdownIamges"
                    />
                </button>
                <button className="dropdownButton" onClick={()=>onMode("digital")}>
                    <span>Digital</span>
                    <img 
                        src="/digital.webp"
                        alt="mode"
                        className="dropdownIamges"
                    />
                </button>
            </div>
            }
        </div>    
    )
}

export default ModeDropDown
