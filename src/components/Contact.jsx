import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { useState } from "react";
import EditContactForm from "./EditContactForm";

const Contact = ({ contact: { id, name, number } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <EditContactForm
          handleEditClose={handleEditClose}
          id={id}
          name={name}
          number={number}
        />
      ) : (
        <div>
          <div>
            <p>{name}</p>
            <p>
              <FaPhoneAlt /> {number}
            </p>
          </div>
          <div>
            <button onClick={() => handleDelete(id)}>
              <MdDeleteForever />
            </button>
            <button onClick={handleEdit}>
              <MdEditSquare />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Contact;
