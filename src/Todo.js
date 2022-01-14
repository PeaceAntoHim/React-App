import { useState } from "react";

function Todo() {
    // Bagian pengumpulan data
    const [activity, setActivity] = useState('');
    const [edit, setEdit] =useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');


    function genereateId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();

        if(!activity) {
            return setMessage('Nama aktifitas jangan kosong!')
        }

        setMessage('');
// Logic
        if(edit.id) {
            const updatedTodo ={
                ...edit,
                activity,
            }
            const editTodoIndex = todos.findIndex(function(todo) {
                return todo.id === edit.id;
            });

            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo; 
            
            setTodos(updatedTodos);

            return cancleEditHandler();
        }
// setting
        setTodos([
            ...todos, 
            {
                id: genereateId(),
                activity,
                done: false
            },
    ]);
        setActivity('');
    }

    // Fungsi hapus
    function removeTodoHandler(todoId) { 
        const filteredTodos = todos.filter(function (todo) {
            return todo.id !== todoId;
        });
        setTodos(filteredTodos);

        if(edit.id)cancleEditHandler();
    }
    // Fungso edit

    function editTodoHandler(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }
    // Fungsi batal
    function cancleEditHandler(todo) {
        setEdit({});
        setActivity([]);
    }

    // Fungsi ceklist
    function doneTodoHandler(todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true 
        };
        const editTodoIndex = todos.findIndex(function(currentTodo) {
            return currentTodo.id === todo.id;
        });

        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex] = updatedTodo;

        // console.log(updatedTodos);
        setTodos(updatedTodos);
    }

    /* Eksekusi Aplikasii */

    return ( 
        <>
        <h1>Simple todo list</h1>
        {message && <div style={{color: 'red'}}>{message}</div>}
        <form onSubmit = {saveTodoHandler}>
            <input type = "text"
            placeholder = "Nama aktifitas"
            value={activity}
            onChange = {function (event) {
                    setActivity(event.target.value);
                }}
            /> 
            <button type="submit">{edit.id ? 'Simpan perubahan' : 'Tambah'}</button>
            {edit.id && <button onClick={cancleEditHandler}>Batal Edit</button>}
            </form>
            {todos.length > 0 ? (
                <ul> 
                {todos.map(function (todo) {
                    return ( 
                    <li key={todo.id}>
                        <input 
                        type="checkbox" 
                        checked={todo.done}
                        onChange={doneTodoHandler.bind(this, todo)} />
                        {todo.activity}({todo.done ? 'Selesai' : 'Belum Selesai'})
                    <button onClick={editTodoHandler.bind(this, todo)}>edit</button>
                    <button onClick={removeTodoHandler.bind(this, todo.id)}>hapus</button>
                    </li>
                    );
                })} 
            </ul>
            ): (
                <p>
                    <i>Tidak ada to do</i>
                </p>    
            )}
        </>
    );
}

export default Todo;