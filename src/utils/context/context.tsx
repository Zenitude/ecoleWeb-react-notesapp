import { useState, createContext } from "react";
import { NoteProps } from "../types/NoteProps";
import { ContextType, ContextProps } from "../types/ContextTypes";
import datas from "../data/notes.json";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children}: ContextProps) {
    const [ notes, setNotes ] = useState<NoteProps[]>(datas.notes);
    const [ , setNote ] = useState<NoteProps>({} as NoteProps);

    const addNote = (note: NoteProps) => {
      setNotes(notes => [...notes, note])
    }

    const updateNote = (note: NoteProps) => {
      const updatedNote = notes.find(n => n.id === note.id);
      
      if(!updatedNote) return;
      
      setNote({
        title: updatedNote.title,
        subtitle: updatedNote.subtitle,
        bodyText: updatedNote.bodyText,
        id: updatedNote.id
      });

      setNotes(notes => {
        const indexNote = notes.findIndex(n => n.id === note.id);
        notes[indexNote] = note;
        return notes;
      })
    }

  return (
    <Context.Provider value={{notes, setNotes, addNote, updateNote}}>
      {children}
    </Context.Provider>
  )
}
