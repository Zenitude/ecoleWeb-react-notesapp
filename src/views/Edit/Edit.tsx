/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { Context } from "../../utils/context/context";
import { useParams } from "react-router-dom";
import Field from "../../components/Field/Field";
import { nanoid } from "nanoid";

export default function Edit() {
    const [ toggle, setToggle ] = useState(false);
    const { id } = useParams();
    const { notes, addNote, updateNote } = useContext(Context)!;
    const currentNote = notes.find((note) => note.id === id);
    const [ note, setNote ] = useState({
        title: "",
        subtitle: "",
        bodyText: "",
        id: nanoid(8)
    })
    const [title, setTitle ] = useState("");

    useEffect(() => {
        if(id) {
            if(currentNote) {
                setNote({
                    title: currentNote.title,
                    subtitle: currentNote.subtitle,
                    bodyText: currentNote.bodyText,
                    id: id
                })
            }
        } else if(!id) {
            setNote({
                title: "",
                subtitle: "",
                bodyText: "",
                id: nanoid(8)
            })
        }
    }, [id, notes])

    const sendNote = (e: React.FormEvent) => {
        e.preventDefault();

        if(!id) {
            addNote(note);
        } else {
            updateNote(note);
        }

        setTitle(note.title);
        setToggle(true);

        setTimeout(() => {
            setTitle("");
            setToggle(false);
        }, 2000)
    }

    return (
        <main className="main main-edit">
        <h2>{id ? "Modifier" : "Ajouter"} une note</h2>
        {toggle && 
            (<p className="success">Note <strong>{title}</strong> {id ? "modifiée" : "créé"} avec succès.</p>)
        }
        <form onSubmit={(e) => sendNote(e)}>
            <Field type={"text"} idNote={"title"} label={"Le titre"} note={note} set={setNote}/>
            <Field type={"text"} idNote={"subtitle"} label={"Le sous-titre"} note={note} set={setNote}/>
            <Field type={"area"} idNote={"bodyText"} label={"Contenu de la note"} note={note} set={setNote}/>
            <button>Enregistrer</button>
        </form>
        </main>
    )
}
