import { NavLink } from "react-router-dom";
import { folder, edit } from "../../assets";

export default function SideMenu() {
  return (
    <div className="sidebar-menu">
        <div className="dots">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav>
            <NavLink to={"/"}>
                <img src={folder} alt="display notes list" />
            </NavLink>
            <NavLink to={"/edit"}>
                <img src={edit} alt="create note" />
            </NavLink>
        </nav>
      
    </div>
  )
}
