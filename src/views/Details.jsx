import { useDispatch, useSelector } from 'react-redux';
import { useAddTodo } from '../core/hooks';
import DetailsHeader from '../components/Misc/DetailsHeader';
import { MdOutlineDone } from 'react-icons/md'
import { useState } from 'react';

import pop from "../assets/sounds/pop.wav"
import { setStrikeTask } from '../redux/logic';


function Details() {

    const { data: todoss } = useAddTodo()
    const showDetails = useSelector(state => state.details.showDetails)


    const todoId = useSelector(state => state.details.todoId)
    const getTodo = todoss?.find((todo) => todo.id === todoId);

    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

    const [editedTitle, setEditedTitle] = useState('');
    const [editedDesc, setEditedDesc] = useState('');




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // try {
        // Call the API to update the todo
        // await updateTodoApi(todoId, { title: editedTitle, desc: editedDesc });
        // Invalidate the query to refetch the data
        // queryClient.invalidateQueries(['Todos']);
        // Exit edit mode
        //     setEditMode(false);
        // } catch (error) {
        //     // Handle error
        //     toast.error(error?.response?.data?.message || error?.message, {
        //         ...errStyles,
        //     });
        // }
    };

    const handleTitleClick = () => {
        setEditMode(true);
        const todo = todoss?.find((todo) => todo.id === todoId);
        if (todo) {
            setEditedTitle(todo.title);
            setEditedDesc(todo.desc);
        }
    };


    const [audio] = useState(new Audio(pop))


    const handlePlay = () => {
        dispatch(setStrikeTask())
        audio.play().catch((error) => {
            console.error("Error playing sound:", error);
        });
    }


    return (
        <div
            className={`h-full flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-10 ${showDetails ? "block" : "hidden"}`}
        >
            <div className="layer bg-black/50 absolute top-0 bottom-0 right-0 left-0"> {/* Overlay  */}

                <div className="modalIn flex items-center justify-center h-full">
                    <div className="wrapper overflow-hidden rounded-md bg-white w-[80%] m-auto ">

                        <DetailsHeader />

                        <div className="details ">
                            <div className="wrapp relative">
                                <div className="r flex py-4 px-5 space-x-3">

                                    <button type='checkbox'
                                        className={` ${getTodo?.completed ? 'cursor-not-allowed border-gray-400 bg-gray-200' : 'border-green-400 '} self-start  h-5 w-5 mt-1 rounded-full
                                        border flex items-center justify-center group hover:bg-gray-200
                                        duration-200 transition-all `}
                                        onClick={handlePlay}
                                    >
                                        <MdOutlineDone className={` ${getTodo?.completed === true ? 'block ' : ' hidden'} rounded-full text-xs group-hover:block
                                        duration-200 transition-all text-gray-400`} />
                                    </button>

                                    <div className="ctn w-full">
                                        {editMode ? (
                                            <form onSubmit={handleFormSubmit}
                                                className='flex flex-col w-full '>
                                                <div className="inputs flex flex-col border rounded-xl px-2">
                                                    <input
                                                        type="text"
                                                        name="Title"
                                                        id="Title"
                                                        className=" font-bold outline-none mb-2"
                                                        value={editedTitle}
                                                        onChange={(e) => setEditedTitle(e.target.value)}
                                                    />
                                                    <textarea
                                                        name="Description"
                                                        id=""
                                                        cols="20"
                                                        // rows=""
                                                        aria-setsize={false}
                                                        value={editedDesc}
                                                        onChange={(e) => setEditedDesc(e.target.value)}
                                                        className=" outline-none h-full "
                                                    ></textarea>

                                                </div>
                                                <div className="wrapBtn self-end space-x-2">
                                                    <button
                                                        onClick={() => setEditMode(!editMode)}
                                                        className="bg-slate-300/50  text-[#081d2b] py-1 px-4 rounded mt-2"
                                                    >
                                                        Cancle
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="bg-[#669bbc]  text-white py-1 px-4 rounded mt-2"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <>
                                                <h1
                                                    className={` cursor-text mb-1 text-md font-bold
                                                            ${editMode ? 'hidden' : 'cursor-pointer'}
                                                            ${getTodo?.completed ? 'line-through' : ''}`}
                                                    onClick={handleTitleClick}
                                                >
                                                    {getTodo?.title}
                                                </h1>
                                                <span className="text-black/50 text-sm "
                                                    onClick={handleTitleClick}
                                                >
                                                    {getTodo?.desc}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Details