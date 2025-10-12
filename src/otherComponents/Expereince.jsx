import React from 'react';
import "../styles/expereince.css";
import { data, myDetails, otherDetails } from '../assets/data';
import { useAtomValue } from 'jotai';


const ExpereinceDetails = () => {
    const companyDetails = myDetails.get("experience");
    const {mode} = useAtomValue(data);
    const textStyle = mode !== "light" ? "textIfDark" : "textIfLight";

    return (
        <div className={`expereinceMainCon ${
            mode === "dark" ? "expereinceMainConDrak" : 
            mode === "digital" ? "expereinceMainConDigital" : ""
        }`}>
            <hr className="hrLineInCenter" />
            {companyDetails.map((eachOne, ind)=>{
                const data = otherDetails.get(eachOne);
                const { name, city, joinDate, endDate, role, type, logo, keyPoints } = data;
                return (
                    <div key={`eachCard ${ind}`} id={`${name}_block`} className="expereinceEachBox" >
                        <div className={`topCompanyDetailsBox ${(ind%2) != 0 ? "row-reverse" : "" }`}>
                            <div className={`topCompanyDetailsLeftBox ${(ind%2) === 0 ? "flex-end" : "flex-start" }`} >
                                <p className="comapanyNumber">.0{ind+1}</p>
                                <p className={`comapanyRoll ${textStyle}`}>{role}</p>
                            </div>

                            <div className="topCompanyDetailsMiddleBox">
                                <img src={logo} alt="" /> 
                            </div>

                            <div className={`topCompanyDetailsRightBox ${(ind%2) !== 0 ? "flex-end" : "flex-start" }`}>
                                <p className="comapanyName">{name}</p>
                                <p className={`comapanyJoiningDate ${textStyle}`}>{joinDate}{endDate !== "" ? ` - ${endDate}` : ""}</p>
                            </div>
                        </div>
        
                        <div className={`bottomCardHoldingCon ${(ind%2) != 0 ? "row-reverse" : "" }`}>
                            {/* Card */}
                            <div 
                                className={`CompanyDetailscardHoldingCon ${(ind%2) == 0 ? "ifCardIsLeftSide" : "ifCardIsRightSide"}`}
                                style={{ justifyContent: (ind%2) != 0 ? "flex-start" : "" }} 
                            >
                                <p className="comapanyRollForMobile">{role}</p>
                                <div className={`CompanyDetailscard ${mode === "light" ? "CompanyDetailscardIfDark" : ""}`}> 
                                    {keyPoints.map((eachPoint, index)=>{
                                        return(
                                            <div key={`point_${name}_${index}`} className="CompanycardContantCon">
                                                <span className="companyDescNumber">//{index+1}</span>
                                                <p className={`companyDesc ${textStyle}`}>{eachPoint}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
        
                            <div className={`CompanyCardRightSideSpace ${(ind%2) != 0 ? "row-reverse" : "" }`}>
                                <h2 className="companyNameVertical">{name}</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExpereinceDetails;