import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const filteredData = selectContacts.filter(item =>item.name.toLowerCase().includes(selectNameFilter.toLowerCase()))
  return (
    <div>
      <ul className={s.contactList}>
        {filteredData.map((item) => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
