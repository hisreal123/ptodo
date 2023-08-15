import { BsChevronDown, BsChevronUp, BsInbox } from 'react-icons/bs'
import { CiMenuKebab } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { isOpenDetails, setStrikeTask } from '../../redux/logic';
import { useEffect } from 'react';

function DetailsHeader() {

    const dispatch = useDispatch();
    const strikeTask = useSelector((state) => state.strikeTask)




    useEffect(() => {

        let dataF = () => {
            const data = window.localStorage.getItem('item', strikeTask)
            if (data !== null)
                dispatch(setStrikeTask(JSON.parse(data)))
            console.log(JSON.parse(data))
        }

        return dataF
    }, [])


    const handleClose = () => {
        dispatch(isOpenDetails());
    }


    return (
        <div className="top">
            <div className=" flex  items-center  justify-between inbox bg-white
                                bottom-1 border py-2 px-3  duration-105 delay-0 transition-all">

                <p className='flex space-x-2 items-center'>
                    <BsInbox className=' text-[1rem]  cursor-pointer text-blue-500  hover:text-blue-800' />
                    <span className=' font-light hover:underline text-xs cursor-pointer'>  Inbox</span>
                </p>

                <div className="left flex  items-center  space-x-3 ">
                    <BsChevronUp className='text-[1rem] cursor-pointer text-gray-200 ' />
                    <BsChevronDown className='text-[1rem] cursor-pointer ' />
                    <CiMenuKebab className='text-[1rem]  cursor-pointer rotate-90' />
                    <IoMdClose className='text-[1.4rem] cursor-pointer hover:rotate-90 duration-105 delay-0 transition-all
                     hover:bg-slate-300/30 rounded-md '
                        onClick={handleClose}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsHeader