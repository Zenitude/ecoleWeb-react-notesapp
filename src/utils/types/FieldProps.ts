import { NoteProps } from "./NoteProps";

export type FieldProps = {
    type: string;
    id: string;
    label: string;
    value?: string;
    note: NoteProps;
    set: React.Dispatch<React.SetStateAction<NoteProps>>
}