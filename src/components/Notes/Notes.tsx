import { useContext } from "react";
import { Context } from "../../utils/context/context";
import Label from "../Label/Label";

export default function Notes() {
    const { notes } = useContext(Context)!;
  return (
    <div className="notes">
        {
            notes.map((note, index) => (
                <Label key={index} title={note.title} subtitle={note.subtitle} id={note.id} />
            ))
        }
      
    </div>
  )
}
