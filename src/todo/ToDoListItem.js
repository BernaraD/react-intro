import './ToDoListItem.css';
import { FaPen, FaRegTrashAlt } from "react-icons/fa";


function ToDoListItem(props) {

    const {title, id, status } = props;
    return (
        <div className='todo-item'>
            {title}
            <button className='btn delete-btn'><FaRegTrashAlt/></button>
            <button className='btn edit-btn'> <FaPen/></button>
        </div>
    );
};

export default ToDoListItem;