import { NoteProps } from "./NoteProps";

export type ContextType = {
    notes: NoteProps[];
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
    addNote: (note: NoteProps) => void,
    updateNote: (note: NoteProps) => void
}

export type ContextProps = {
    children: React.ReactNode;
}