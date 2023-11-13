import { NoteProps } from "./NoteProps";

export type ContextType = {
    notes: NoteProps[];
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
}

export type ContextProps = {
    children: React.ReactNode;
}