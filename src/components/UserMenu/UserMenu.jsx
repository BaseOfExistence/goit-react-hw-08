import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/auth/operations"
import { selectUserName } from "../../redux/auth/selectors"
import css from "./UserMenu.module.css"

export default function UserMenu() {
      const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logout())
    }
    return (
        <div className={css.user}>
            <h2>Welcome, {useSelector(selectUserName)}</h2>
            <button type="button" onClick={handleClick}>Log out</button>
        </div>
    )
}