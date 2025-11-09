import { useAtomValue } from 'jotai';
import { data, myDetails } from '../assets/data';
import "../styles/about.css";

function Contact() {
  const {mode} = useAtomValue(data);
  const email = myDetails.get("email");
  return (
    <div id='contact' className='techStackMainSection' style={{ minHeight: "100vh" }}>
      <p className={`contactText ${mode !== "light" ? "techSectionHeadingDark" : ""}`}>For any questions please mail us:</p>
      {/* <a href={`mailto:${email}`}> */}
        <p className='contactEmailText'>{email}</p>
        {/* </a> */}
    </div>
  )
}

export default Contact
