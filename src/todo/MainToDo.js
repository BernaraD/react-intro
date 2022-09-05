import '../App.css';
import axios from "axios";
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/Spinner";


function MainToDo() {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchAllTodos() {
        setIsLoading(true);
        try {
            const allTodos =
                await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodos(allTodos.data);
            setIsLoading(false);
            console.log(allTodos);
        } catch
            ( err ) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllTodos()
    }, []);

    if (!todos) {
        return <Spinner/>
    }
    return (
        <div className='App'>
            <h1>To do list</h1>
            { isLoading ? (
                <p>Please wait...</p>
            ) : (
                <ToDoList todos={ todos }/>
            ) }

        </div>
    );
};

export default MainToDo;