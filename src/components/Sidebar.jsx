import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom";
//this is for the sidebar, and i am also importing fontawesome icons to make my web app look more nicer
function Sidebar({links, close}){
    const location = useLocation()
    return(
        <aside className="sidebar" onClick={close}>
                { links.map(link => (
                    <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}
                        </Link>
                )) }
        </aside>
    )
}

export default Sidebar;