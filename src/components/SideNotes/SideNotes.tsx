import { useState, useContext } from "react";
import { Context } from "../../utils/context/context";
import { Link } from "react-router-dom";
import { openMenu, closeMenu } from "../../assets";
import useDimension from "../../utils/hooks/useDimension";

export default function SideNotes() {
  const { notes } = useContext(Context)!;
  const [ toggle, setToggle ] = useState(false);
  const [ dimension ] = useDimension();

  return (
    <div className='sidebar-notes'>
        <h1>Mes notes</h1>
        {
          ((dimension > 760) || (dimension < 760 && toggle)) 
          && (<nav className="notes">
            {
              notes.map((note, index) => (
                <Link key={`${index}-${note.title}`} to={`note/${note.id}`}>
                    <h2>{note.title}</h2>
                    <h3>{note.subtitle}</h3>
                </Link>
              ))
            }
          </nav>)
        }
        {
          dimension < 760 
            && (<button className="menu" onClick={() => setToggle(!toggle)}>
              {
                toggle 
                ? (<img src={closeMenu} alt={"Masquer le menu"} />)
                : (<img src={openMenu} alt={"Afficher le menu"} />)
              }
            </button>)
        }
        
      
    </div>
  )
}
