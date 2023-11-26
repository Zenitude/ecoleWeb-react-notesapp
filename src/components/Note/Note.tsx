/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context/context";
import { Link } from "react-router-dom";

export default function Note() {
  const { notes } = useContext(Context)!;
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  return (
    <>
      <div className="links">
          <Link to={`/`}>Notes</Link>
          <Link to={`/edit/${id}`}>Mettre à jour</Link>
          <Link to={`/note/${id}/delete`}>Supprimer</Link>
      </div>
      <article>
        <h2>{note?.title}</h2>
        <h3>{note?.subtitle}</h3>
        <p>{note?.bodyText}</p>
      </article>
    </>
  )
}
