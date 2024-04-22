import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import { faHome, faList} from "@fortawesome/free-solid-svg-icons"
//this is for my navbar, these functions will show use states do decide when to show or not show the sidebar.
function Navbar(){
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Available Routes",
            path: "/",
            icon: faHome
        },
        {
            name: "Ticket Purchase",
            path: "/TicketPurchase",
            icon: faList
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
//used the same code as my other assignment, basically just using paths i got from //https://www.youtube.com/watch?v=-5X6r0oC0Og&list=PLBh9z20x5LUqfmToGINwM5GnDL9caB-Sn&index=16//
    return(
        <>
        <header className="navbar container">
            <a href="#!" className="logo">Louie<span>'s </span>R<span>o</span>utes</a>
            <nav className="nav-links">
                {links.map(link => (
                    <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                )) }
            </nav>
            <aside onClick={() => setShowSidebar(true)}  className= { showSidebar ? "sidebar-btn active" : "sidebar-btn"} >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </aside>
        </header>
        { showSidebar && <Sidebar close={closeSidebar} links={links}/> }
        </>
        //this is my nav bar
    )
}

export default Navbar;