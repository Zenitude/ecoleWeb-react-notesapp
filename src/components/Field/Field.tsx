import { FieldProps } from "../../utils/types/FieldProps"

export default function Field({type, idNote, label, note, set}: FieldProps) {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    switch(target.id) {
      case "title" : 
        set({...note, title: target.value})
        break;
      case "subtitle" : 
        set({...note, subtitle: target.value})
        break;
      case "bodyText" : 
        set({...note, bodyText: target.value})
        break;
    }
  }

  const displayValue = () => {
    if(idNote === "title") { return note.title}
    else if(idNote === "subtitle") { return note.subtitle}
  }
  
  return (
    <div>
        <label htmlFor={idNote}>{label}</label>
        {
            type === 'area'
            ? (<textarea name={idNote} id={idNote} onChange={(e) => changeValue(e)} value={note.bodyText}></textarea>)
            : (<input type={type} name={idNote} id={idNote} onChange={(e) => changeValue(e)} value={displayValue()}/>)
        }
    </div>
  )
}
