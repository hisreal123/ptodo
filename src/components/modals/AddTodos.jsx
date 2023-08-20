import { Fragment, useEffect, useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import { useCreateTodoMutation } from "../../core/hooks";
import { setAddTodo } from "../../redux/logic";
import { useDispatch, useSelector } from "react-redux";
import { differenceInMinutes, format } from "date-fns";


// eslint-disable-next-line react/prop-types
function AddTodos() {

    const addTodo = useSelector((state) => state.details.addTodo);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [timeToFinish, setTimeToFinish] = useState("");
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

        if (title && desc && timeToFinish) {

            const currentDate = format(new Date(), "HH:mm");

            const timeRemainingInMinutes = differenceInMinutes(
                new Date(`2023-08-17T${currentDate}:00`),
                new Date(`2023-08-17T${timeToFinish}:00`)
            );

            setDesc(" ")
            setTitle(" ")
            setTimeToFinish("");

            newTodo = {
                id: uuidv1(),
                title: title,
                desc: desc,
                completed: false,
                timeCreated: currentDate,
                timeToFinish: timeToFinish,
                timeRemaining: timeRemainingInMinutes,
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
                        <form onSubmit={handleAddTodo}
                            className="w-ful rounded flex flex-col">
                            <>
                                <input
                                    type="text"
                                    name="todoInput" // Give the input a name
                                    id="todoInput" // Give the input an ID
                                    className="w-full py-1 px-4 focus:outline-none mb-2 focus:bg-white"
                                    placeholder="Enter Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <input
                                    type="time"
                                    name=""
                                    id=""
                                    value={timeToFinish}
                                    onChange={(e) => setTimeToFinish(e.target.value)}
                                />
                                <textarea
                                    name="Description"
                                    id=""
                                    cols="20"
                                    // rows=""
                                    aria-setsize={false}
                                    placeholder="Enter Description"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    className="px-4 py-3 outline-none h-full "
                                ></textarea>


                            </>


                            <Fragment>
                                <div className="flex space-x-2">
                                    <button
                                        type="submit"
                                        className="bg-slate-300/50  hover:bg-slate-300/20  hover:text-white text-[#081d2b] py-1 px-4 rounded mt-2"
                                        onClick={() => dispatch(setAddTodo())}
                                    >Save
                                    </button>
                                </div>
                            </Fragment>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AddTodos;
