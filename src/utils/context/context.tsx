import { useState, useEffect, createContext } from "react";
import { NoteProps } from "../types/NoteProps";
import { ContextType, ContextProps } from "../types/ContextTypes";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children}: ContextProps) {
    const [ notes, setNotes ] = useState<NoteProps[]>([]);

    useEffect(() => {
        fetch('/data/notes.json')
        .then(res => res.json())
        .then(({notes}) => setNotes(notes));
    }, []);

    useEffect(() => {
      setNotes(notes);
    }, [notes]);

  return (
    <Context.Provider value={{notes, setNotes}}>
      {children}
    </Context.Provider>
  )
}
