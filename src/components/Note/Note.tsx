/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context/context";
import { Link } from "react-router-dom";

export default function Notes() {
  const { notes } = useContext(Context)!;
  const { id } = useParams();
  const note = id ? notes.filter(note => note.id === id) : [notes[0]];
  const { title, subtitle, bodyText } = note[0];

  return (
    <>
      <div className="links">
          <Link to={`/`}>Notes</Link>
          <Link to={`/edit/${id}`}>Mettre à jour</Link>
          <Link to={`/note/${id}/delete`}>Supprimer</Link>
      </div>
      <article>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{bodyText}</p>
      </article>
    </>
  )
}
