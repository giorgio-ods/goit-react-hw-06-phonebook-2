import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "features/ContactsSlice";

export default function ContactsList({ contact }) {
  const dispatch = useDispatch();

  const removeContactHandler = (id) => dispatch(removeContact(id))

  return (
    
      
          <div>
            <p>{`${contact.name}:${contact.number}`}</p>
            <button type="button" onClick={() => removeContactHandler(contact.id)}>
              Remove
            </button>
          </div>
        
      
    
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onChange: PropTypes.func,
};