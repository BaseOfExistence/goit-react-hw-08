import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactForm from "../../components/ContactForm/ContactForm"
import css from "./ContactsPage.module.css"
import { fetchContacts } from "../../redux/contacts/operations"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export default function ContactsPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    return (
        <div className={css.contacts}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
}