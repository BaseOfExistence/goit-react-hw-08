import { Link } from "react-router-dom";
import css from "./AuthNav.module.css"

export default function AuthNav() {
    
    return (
        <div className={css.nav}>
            <Link className={css.link} to={"/register"}>Register</Link>
            <Link className={css.link} to={"/login"}>Login</Link>
        </div>
    )
}