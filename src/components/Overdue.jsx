import { useDispatch, useSelector } from "react-redux";
import { setShowOverDue } from "../redux/logic";
import { BsChevronRight } from "react-icons/bs";



// eslint-disable-next-line react/prop-types
function Overdue() {

    const showOverDue = useSelector(state => state.details.showOverDue);

    const dispatch = useDispatch();


    return (
        <section className="mb-2 bg-white rounded-md shadow-md  px-3 ">

            <div className="wrapper flex items-center">

                <span className=" rounded-md py-3  ">
                    <BsChevronRight
                        className=""
                        onClick={() => dispatch(setShowOverDue())}
                    />
                </span>
                <div className=" border-b border-gray-700/20 pb-1 w-full">
                    <p className="text-sm ">Overdue</p>
                </div>
            </div>

            <div className=' text-sm font-light  '>

                {showOverDue && (
                    <div className="overdue-tasks">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis, sapiente tempora? Sint, voluptatum harum! Et voluptas officiis eveniet,
                            incidunt recusandae sed maiores cumque optio eligendi nisi reiciendis corporis a modi?
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Overdue;
