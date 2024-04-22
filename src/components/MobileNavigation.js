import homeIcon from "../icons/nav-icon-2.svg";
import settingsIcon from "../icons/nav-icon-3.svg";
import browseIcons from "../icons/nav-icon-4.svg";
import stopwatchIcon from "../icons/nav-icon-1.svg";
import plusIcon from "../icons/nav-icon-5.svg";
import closeIcon from "../icons/close-circle.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavigation = () => {
    const [showAddMenu, setShowAddMenu] = useState(false);



    const toggleMenu = () =>{
        setShowAddMenu(!showAddMenu)
        console.log(showAddMenu)
    }
    return ( 
        <nav id="mobile-navigation">
            {showAddMenu ? (
                <div className="quick-add-container">
                    <h4>Quick Add</h4>
                    <Link onClick={()=>setShowAddMenu(false)} className="quick-add-button" to={"/new-log"}>New Log</Link>
                    <Link onClick={()=>setShowAddMenu(false)} className="quick-add-button" to={"/new-exercise"}>New Exercise</Link>
                    <Link onClick={()=>setShowAddMenu(false)} className="quick-add-button" to={"/new-workout"}>New Workout</Link>
                </div>
            ) : (<></>)}
            <Link to={"/"} className="navigation-button">
                <img src={homeIcon}></img>
            </Link>
            <Link to={"/browse"} className="navigation-button">
                <img src={browseIcons}></img>
            </Link>
            <a onClick={toggleMenu} className="navigation-button center-button">
                <img src={showAddMenu ? closeIcon : plusIcon}></img>
            </a>
            <Link to={"/stopwatch"} className="navigation-button">
                <img src={stopwatchIcon}></img>
            </Link>
            <Link to={"/settings"} className="navigation-button">
                <img src={settingsIcon}></img>
            </Link>
        </nav>
     );
}
 
export default MobileNavigation;