import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { lazy, Suspense } from "react"
import Layout from "../Layout/Layout"
import { Route, Routes } from "react-router-dom"
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"))
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"))
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"))
import { refreshUser } from "../../redux/auth/operations"
import { selectIsRefreshing } from "../../redux/auth/selectors"


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return (
    <>
      {useSelector(selectIsRefreshing) ? <div>Loading...</div> :
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
              <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />} />
              <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
            </Routes>
          </Layout>
        </Suspense>}
    </>
  )
}


