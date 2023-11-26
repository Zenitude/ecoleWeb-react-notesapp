import { Routes, Route } from "react-router-dom";
import { Home, Edit, Note, Notes, DeleteNote } from "./Path";

export default function Router() {

  return (
    <Routes>
        <Route path={"/"} element={<Home />}>
            <Route index element={<Notes />} />
            <Route path={"/note/:id"} element={<Note />} />
            <Route path={"/note/:id/delete"} element={<DeleteNote />} />
        </Route>
        <Route path={"/create"} element={<Edit />}/>
        <Route path={"/edit/:id"} element={<Edit />}/>
    </Routes>
  )
}
