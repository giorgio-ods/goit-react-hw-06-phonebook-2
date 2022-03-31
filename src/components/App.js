// import { useState } from "react";
import { useSelector } from "react-redux";
import ContactsList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Input from "./Input/Input";

export const App = () => {
  // const contacts = useSelector((state) => state.contact.contacts)

    
  return (
    
    <><Input />
      {/* <>
        {contacts?.map((contact) => 
          <ContactsList key={contact.id} contact={contact}/>
       )}
      </> */}
      <><Filter/> </>
    </>
    

  );
};
