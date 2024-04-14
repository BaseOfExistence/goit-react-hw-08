import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation.jsx/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css"
import { useSelector } from 'react-redux'
import { selectToken } from '../../redux/auth/selectors'

export default function AppBar() {
    const isLoggedIn = useSelector(selectToken) !== null
    return (
        <div className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    )
}