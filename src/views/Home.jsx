import { BsTrash3 } from "react-icons/bs";
import AddTodos from "../components/modals/AddTodos";
import { useAddTodo, useDeleteTodo } from "../core/hooks";
import DatedHeader from "../components/Misc/DatedHeader";
import Details from "./Details";
import { useDispatch, useSelector } from "react-redux";
import { isOpenDetails, setTodoId, setAddTodo } from "../redux/logic";
import Overdue from "../components/Overdue";


export const User = () => {

    const showDetails = useSelector((state) => state.details.showDetails);
    const addTodo = useSelector((state) => state.details.addTodo);

    const dispatch = useDispatch()

    const handleTodoClick = (id) => {

        console.log(showDetails)

        if (!showDetails) {
            dispatch(isOpenDetails()); // Toggle the details display
            dispatch(setTodoId(id))
        }
    }


    const { data: todos } = useAddTodo()
    const deleteMutation = useDeleteTodo(todos?.id)

    const handleDelete = (id) => {
        if (deleteMutation.mutate(id))
            console.log(' Successfully deleted ', id)
    }

    return (
        <>

            <Details />

            <section className="bg-[#dad7cd] group min-h-screen">
                <div className="wrap w-[60%] mx-auto py-20 ">

                    {/* Add New todos  */}
                    <AddTodos addTodo={addTodo} setTodo={setAddTodo} />

                    {/* DatedHeader */}
                    <DatedHeader />


                    {/* OverDue */}
                    <Overdue />


                    {/* mainTask */}
                    <div className=" rounded-md overflow-hidden flex flex-col  space-y-4 ">
                        {todos?.map((todo, i) => (
                            <div key={i} className=" shadow-md w-full  relative" >
                                <div className="wraped overflow-hidden ">
                                    <div
                                        className="rounded-md bg-white cursor-pointer fetched hover:bg-[#ebebebde] flex justify-between  items-center py-4 px-4 "
                                        key={todo.id}

                                    >
                                        <div className="dt flex relative w-full"
                                            onClick={() => handleTodoClick(todo.id)}
                                        >
                                            <span>{i + 1}</span>

                                            <div className="wrap relative w-full">
                                                <h1 className='Working pl-5 text-md text-gray '>{todo.title} </h1>

                                                <p className='Working pl-5 mt-1 text-xs text-gray-400 '>  Desc :
                                                    <span className="">
                                                        {todo.desc}</span>
                                                </p>

                                                <div className="divider  w-full h-[1px] bg-gray-200 my-3  relative "></div>
                                                <p className='Working pl-5 text-sm text-gray-400 '>
                                                    Today: {`${todo?.timeRemaining < 60
                                                        ? `${todo?.timeRemaining} ${todo?.timeRemaining === 1 ? "minute" : "minutes"} remaining`
                                                        : `${Math.floor(todo?.timeRemaining / 60)} ${Math.floor(todo?.timeRemaining / 60) === 1 ? "hour" : "hours"} and ${todo?.timeRemaining % 60}
                                                        ${todo?.timeRemaining % 60 === 1 ? "minute" : "minutes"} remaining`}`} | to complete task
                                                </p>
                                            </div>

                                        </div>


                                        <BsTrash3
                                            className="text-[#00afb9] relative  block self-start mt-1 hover:scale-125 transition-all duration-105 "
                                            onClick={() => handleDelete(todo.id)}
                                        />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section >
        </>
    );
};

