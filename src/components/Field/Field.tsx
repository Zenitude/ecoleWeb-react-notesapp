import { FieldProps } from "../../utils/types/FieldProps"

export default function Field({type, id, label, note, set}: FieldProps) {
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
    if(id === "title") { return note.title}
    else if(id === "subtitle") { return note.subtitle}
  }
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        {
            type === 'area'
            ? (<textarea name={id} id={id} onChange={(e) => changeValue(e)} value={note.bodyText}></textarea>)
            : (<input type={type} name={id} id={id} onChange={(e) => changeValue(e)} value={displayValue()}/>)
        }
    </div>
  )
}
