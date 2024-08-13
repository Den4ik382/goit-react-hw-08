import { useSelector } from "react-redux";
import Contact from "./Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../redux/contacts/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div>
      {isError ? (
        <p>{isError}</p>
      ) : visibleContacts.length > 0 ? (
        <ul>
          {visibleContacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      ) : (
        !isLoading && <p>List is empty</p>
      )}
    </div>
  );
};

export default ContactList;
