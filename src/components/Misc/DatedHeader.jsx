import { format } from 'date-fns'
import { CiFilter } from 'react-icons/ci'


// eslint-disable-next-line react/prop-types
function DatedHeader() {

    const presentDate = format(new Date(), 'EEEE d, yyyy')

    return (
        <div className="Header mb-2 bg-white px-3 h-auto py-3 rounded-md  shadow-md flex justify-between items-center ">
            <div className="wrap">

                <h1 className="font-bold  text-gray-700 ">Today&apos;s Task </h1>
                <p className="font-normal text-[.5rem] mt-1 text-gray-500/50"> {presentDate} </p>
                {/* <p className="font-normal text-sm mt-1 text-gray-500"> Wednesday, 11 May</p> */}
            </div>

            <p className='rounded-md flex  lg:space-x-1 items-center hover:bg-slate-300/50 p-2 delay-100 duration-150 cursor-pointer'>
                <CiFilter className='text-[1.2rem]' />
                <span className='text-sm font-light lg:block hidden'>views </span>
            </p>
        </div>
    )
}

export default DatedHeader