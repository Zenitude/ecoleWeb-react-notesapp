import { Link } from "react-router-dom";
import { LabelProps } from "../../utils/types/LabelProps";

export default function Label({title, subtitle, id}: LabelProps) {
  return (
    <Link to={`/note/${id}`}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Link>
  )
}
