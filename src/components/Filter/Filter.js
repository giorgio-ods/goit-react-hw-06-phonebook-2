import ContactsList from "components/ContactList/ContactList";
import { useState } from "react";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function Filter() {
  const { contacts } = useSelector((state) => state.contact)
  const [filterValue, setFilterValue] = useState('');
  
  const filterContacts = 
   contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

  console.log(filterContacts);
  
  return (
    <div>
      <label>
        Search
        <input value={filterValue} type="text" onChange={e => setFilterValue(e.target.value)}></input>
        <div> <>
        {filterContacts?.map((contact) => 
          <ContactsList key={contact.id} contact={contact}/>
       )}
      </> </div>
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };