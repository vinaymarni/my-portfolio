import { building, calender, location } from '../assets/commonSvgs';
import { data, otherDetails } from '../assets/data';

export function Card({keyName, mode}) {
  const data = otherDetails.get(keyName);
  const { name, city, joinDate, endDate, role, type } = data;
  return (
    <div className='experienceCard'>
      <div className='experienceCardInnerCon'>
        <p className={`rollText ${mode !== "light" ? "techSectionHeadingDark" : ""}`}>{role}</p>
        <p className='roleTime'>{type}</p>
      </div>
      <div className={`experienceCardInnerCon ${mode !== "light" ? "aboutDark" : ""}`}> 
        <p className='iconAndText'>{building} {name}</p>
        <p className='iconAndText'>{location} {city}</p>
        <p className='iconAndText lastText'>{calender} {joinDate}{endDate !== "" ? ` - ${endDate}` : ""}</p>
      </div>
    </div>
  )
};