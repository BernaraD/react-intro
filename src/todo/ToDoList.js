import ToDoListItem from "./ToDoListItem";
import './ToDoList.css';

function ToDoList( props ) {

    const { todos } = props;

    return (
        <div className='todo-list'>
            { todos.map(el => <ul key={ el.id }>
                <li>
                    <ToDoListItem
                        title={ el.title }
                        id={ el.id }
                        status={ el.status }
                    />
                </li>
            </ul>) }
        </div>
    );
};

export default ToDoList;