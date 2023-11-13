import SideMenu from "../SideMenu/SideMenu";
import SideNotes from "../SideNotes/SideNotes";
import Router from "../Router/Router";

export default function Layout() {

  return (
    <div className="layout">
        <SideMenu />
        <SideNotes />
        <Router />
    </div>
  )
}
