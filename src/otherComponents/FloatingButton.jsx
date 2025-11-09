import React, { useEffect } from 'react'
import "../styles/header.css"
import { arrowIcon } from '../assets/commonSvgs'
import { itemScrollIntoView, scrollValue } from '../assets/data';
import { useAtom } from 'jotai';

function FloatingButton() {
    const [show, setShow] = useAtom(scrollValue);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Current scroll position
            const docHeight = document.documentElement.scrollHeight; // Total height of page
            const winHeight = window.innerHeight; // Viewport height
            const totalScrollable = docHeight - winHeight;
            const scrolled = (scrollTop / totalScrollable) * 100;
            setShow(Math.round(scrolled));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        show > 0 && <span onClick={()=>itemScrollIntoView("home")} className="floatingBtnClass" >
            {arrowIcon}
        </span>
    )
}

export default FloatingButton
