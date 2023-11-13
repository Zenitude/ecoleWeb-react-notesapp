import { Routes, Route } from "react-router-dom";
import { Home, Edit, Note, Notes } from "./Path";

export default function Router() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />}>
            <Route index element={<Notes />} />
            <Route path={"/note/:id"} element={<Note />} />
        </Route>
        <Route path={"/edit"} element={<Edit />}/>
        <Route path={"/edit/:id"} element={<Edit />}/>
    </Routes>
  )
}
