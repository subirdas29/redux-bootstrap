import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <span className="font-bold ml-2">TaskBar</span>
            </div>
            <Link to="/">Tasks</Link>
            <Link to= "/users">Users</Link>
            <div className="ml-auto">
            <ModeToggle/>
            </div>
        </nav>
    )
}