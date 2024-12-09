import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({id, name, number }) => {
  const dispatch = useDispatch()
  return (
    <li className={s.contactItem}>
      <p>
        <FaUser />
        {name}
      </p>

      <p> <BsFillTelephoneFill/> {number}</p>
      <button className={s.delButton} onClick={()=> dispatch(deleteContact(id))}  type="button">Delete</button>
    </li>
  );
};

export default Contact;
