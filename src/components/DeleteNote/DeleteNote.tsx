import { useContext } from "react";
import { Context } from "../../utils/context/context";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function DeleteNote() {
    const { notes, setNotes } = useContext(Context)!;
    const navigate = useNavigate();
    const { id } = useParams();

    const deleteThisNote = (e: React.FormEvent) => {
        e.preventDefault();
        const filteredNotes = notes.filter(note => note.id !== id);
        setNotes(filteredNotes);
        navigate("/");
    }

    return (
        <form onSubmit={(e) => deleteThisNote(e)}>
        <Link to={`/note/${id}`}>Annuler</Link>
        <button>Confirmer</button>
        </form>
    )
}
