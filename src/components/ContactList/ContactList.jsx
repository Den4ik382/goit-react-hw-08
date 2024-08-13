import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import { useSelector } from "react-redux";
export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  if (visibleContacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul>
      {visibleContacts.map((cont) => (
        <Contact key={cont.id} contact={cont} />
      ))}
    </ul>
  );
}
