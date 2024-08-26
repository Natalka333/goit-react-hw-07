import { useSelector } from 'react-redux'
import { selectVisibleContacts } from '../../redux/contactsSlice.js'

import Contact from '../Contact/Contact'
import css from './ContactList.module.css'



const ContactList = () => {

    const filterContacts = useSelector(selectVisibleContacts);

    return (
        <div className={css.container}>
            <ul className={css.section}>
                {filterContacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}

            </ul>
        </div>
    )
}

export default ContactList
