import { useEffect, useState } from "react";
import { BsPlus, BsStop } from "react-icons/bs";
import { v1 as uuidv1 } from 'uuid';
import { useCreateTodoMutation } from "../../core/hooks";
import { setAddTodo } from "../../redux/logic";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function AddTodos() {

    const addTodo = useSelector((state) => state.details.addTodo);
    const [title, setTitle] = useState("");
    const { mutateAsync: createTodoMutation } = useCreateTodoMutation();

    const dispatch = useDispatch();


    useEffect(() => {
        // Disable scrolling when the form is open
        if (addTodo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup function to re-enable scrolling when the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [addTodo]);


    const handleAddTodo = async (e) => {
        e.preventDefault()

        let newTodo;
        let nn = addTodo;

        if (title) {

            setTitle("")

            newTodo = {
                id: uuidv1(),
                title: title,
                completed: false,
                createdAt: ""
            }

            nn = setAddTodo(false);

            try {
                await createTodoMutation(newTodo)
            } catch (error) {
                // Handle error if needed
                console.error(error);
            }


            return (newTodo, nn)


        } else {
            alert(" Create a todo task ")
            setAddTodo(true);
        }

        setTitle(" ")

    }



    return (
        <>
            <div className={`${addTodo ? "block" : "hidden"}`}>

                <div className="h-full flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-10 ">
                    <div className="layer bg-black/75 absolute top-0 bottom-0 right-0 left-0"
                        onClick={() => dispatch(setAddTodo())}
                    ></div>

                    <div
                        className={` wrap ${addTodo ? "block" : "hidden"} absolute z-50 `}
                    >
                        <form onSubmit={handleAddTodo} className="w-ful rounded flex ">
                            <input
                                type="text"
                                name="todoInput" // Give the input a name
                                id="todoInput" // Give the input an ID
                                className="w-full py-1 px-4 rounded-l-md   focus:outline-none focus:bg-white"
                                placeholder="Add New Todo"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />


                            <button
                                type="submit"
                                className="rounded flex"
                            >
                                <BsPlus className="h-10 w-10  relative cursor-pointer shadow-lg
                                    first-letter: bg-[#6e6e6b] block hover:bg-black/25 hover:text-[#dad7cd]
                                    transition-all delay-50 duration-200 hover:scale-100 "
                                    onClick={() => dispatch(setAddTodo())}
                                />

                            </button>
                            <BsStop
                                className="h-10 w-10 rounded-r-md relative cursor-pointer shadow-lg
                                    first-letter: bg-[#6e6e6b] block hover:bg-black/25 hover:text-[#dad7cd]
                                    transition-all delay-50 duration-200 hover:scale-100 "
                                onClick={() => dispatch(setAddTodo())}
                            />
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AddTodos;
