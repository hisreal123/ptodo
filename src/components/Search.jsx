import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function Search() {
    const [username, setUsername] = useState("");
    const [focus, setFocus] = useState(false)

    return (
        <>
            <div className="rr flex items-center  relative mb-10" >
                <div className={` ${focus ? 'shadow-lg' : ''} flex-1 bg-[#dad7cd] focus:bg-white flex
                        items-center rounded-md `}>
                    <BsSearch className=" text-black/20 h-4 w-4 mx-4" />

                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setFocus(!focus)}
                        placeholder='Quick Search                                              Ctrl+K'
                        className="w-full py-3 pl-2 rounded-r-md focus:otline-white  focus:outline-none focus:bg-white"
                    />

                </div>
            </div>
        </ >
    )
}

export default Search