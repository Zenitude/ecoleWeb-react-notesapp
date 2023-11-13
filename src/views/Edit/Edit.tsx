/* eslint-disable react-hooks/exhaustive-deps */
import { useState, /*useEffect,*/ useContext } from "react";
import { Context } from "../../utils/context/context";
import { useParams } from "react-router-dom";
import Field from "../../components/Field/Field";
import { NoteProps } from "../../utils/types/NoteProps";
import { nanoid } from "nanoid";

export default function Edit() {
    const { id } = useParams();
    const { notes, setNotes } = useContext(Context)!;
    const [ note, setNote ] = useState<NoteProps>({
        title: id ? notes[notes.findIndex(note => note.id === id)].title : "",
        subtitle: id ? notes[notes.findIndex(note => note.id === id)].subtitle : "",
        bodyText: id ? notes[notes.findIndex(note => note.id === id)].bodyText : "",
        id: id ? id : nanoid(8)
    })

    const sendNote = (e: React.FormEvent) => {
        e.preventDefault();
                    
        setNotes(() => {
            if(id) {
                const indexNote = notes.findIndex(note => note.id === id);
                notes[indexNote] = note;
                return notes;
            } else {
                notes.push(note);
                return notes;
            }
        })
    }

    return (
        <main className="main main-edit">
        <h2>Ajouter une note</h2>
        <form onSubmit={(e) => sendNote(e)}>
            <Field type={"text"} id={"title"} label={"Le titre"} note={note} set={setNote}/>
            <Field type={"text"} id={"subtitle"} label={"Le sous-titre"} note={note} set={setNote}/>
            <Field type={"area"} id={"bodyText"} label={"Contenu de la note"} note={note} set={setNote}/>
            <button>Enregistrer</button>
        </form>
        </main>
    )
}
