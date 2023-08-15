import { BsPlus } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineLineChart, AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { GoBellFill } from 'react-icons/go'
import { RxAvatar } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { setAddTodo } from "../../redux/logic"

function Nav() {
    const dispatch = useDispatch();

    const repeatIcons = 'text-[1.5rem] my-2 cursor-pointer text-white '

    return (
        <section className=' bg-[#669bbc]'>
            <div className='flex items-center justify-between w-full px-2 '>


                <AiOutlineMenu className={` ${repeatIcons} `} />
                <AiOutlineHome className={` ${repeatIcons} `} />

                <span className=' star rounded-md px-3 my-2 bg-slate-400/20'>
                    <AiOutlineStar
                        className={` ${repeatIcons} text-white `} />
                </span>

                <span>
                    <AiOutlineLineChart className={` ${repeatIcons} `} />
                </span>

                <GoBellFill className={` ${repeatIcons} `} />

                <BsPlus
                    className={` ${repeatIcons} `}
                    onClick={() => dispatch(setAddTodo())}
                />
                <RxAvatar className={` ${repeatIcons} `} />

            </div>
        </section>
    )
}

export default Nav