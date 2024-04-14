import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectToken } from '../../redux/auth/selectors'

export default function RestrictedRoute({ component: Component, redirectTo }) {
    const isLoggedIn = useSelector(selectToken) !== null
    return (
        <>
            { isLoggedIn ?  Component : <Navigate to={redirectTo} /> }
        </>
    )
}