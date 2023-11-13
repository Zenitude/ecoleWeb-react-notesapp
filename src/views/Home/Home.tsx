import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <main className="main main-home">
            <h2>Bienvenue sur notes101</h2>
            <Outlet />
        </main>
    )
}
