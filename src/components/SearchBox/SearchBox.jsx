import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filters/slice"
import { useDispatch } from "react-redux"
import { selectNameFilter } from "../../redux/filters/selectors"
import { useSelector } from "react-redux"

export default function SearchBox() {
    const filters =  useSelector(selectNameFilter)
    const dispatch = useDispatch()
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filters} onChange={(event) => {
                dispatch(changeFilter(event.target.value))
            }} />
        </div>
    )
}