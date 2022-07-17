import React, { useState } from 'react'
import { useDispatch } from "react-redux";
const options = ["Open", "Done", "Working", "Overdue"];

const Form = () => {
    const dispatch = useDispatch();
    const [NewState, setState] = useState({ Timestamp: Math.floor(Date.now() / 1000), title: "", description: "", date: "", status: "Open", tags: [] })
    const [tag, setTag] = useState('');
    const [allTags, setAllTags] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(false);

    const handleOnChange = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const {name, value} = e.target;

        setState((preValue) => {
            return {...preValue, [name]: value}
        })
    }

    const handleTags = (e) => {
        setTag(e.target.value);
    }

    const handleOnPress = (e) => {
        if(e.key === "Enter"){
            setAllTags([...allTags, tag]);
            setTag('');
            NewState.tags.push(tag);
        }
    }

    const handleOnClick = () => { 
        dispatch({type: "ADD_DATA",payload: NewState})
        setAllTags([]);
        setState({
            Timestamp: Math.floor(Date.now() / 1000), title: "", description: "", date: "", status: "Open", tags: [],
        })
        setToggleBtn(false);
    }
    return (
        <>
        <div className="flex justify-center mt-3">
        <button onClick={() => {setToggleBtn(true)}} className='border border-blue-500 py-1 px-2 bg-blue-400 hover:bg-blue-500 text-white'>ADD NEW DATA</button>
        </div>
            <div className={`${toggleBtn ? 'md:w-full flex justify-center mt-4': 'hidden'}`}>
                
                <div className="border border-blue-400">
                    <h2 className='text-white bg-blue-400 p-4 text-lg cursor-default'>ADD NEW TO-DO ITEM</h2>
                    <div className="m-12">
                        <div className="formInput flex flex-col">
                            <label htmlFor="Title">Title :)</label>
                            <input type="text" name='title' onChange={handleOnChange} value={NewState.title} className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Title Here!' />
                        </div>

                        <div className="formInput flex flex-col my-3">
                            <label htmlFor="Description">Description :)</label>
                            <input type="text" name='description' onChange={handleOnChange} value={NewState.description} className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Description Here!' />
                        </div>
                        <div className="flex justify-between">
                            <div className="formInput flex flex-col">
                                <label htmlFor="Date">Date :)</label>
                                <input type="date" name='date' onChange={handleOnChange} value={NewState.date} className='border border-red-500 outline-none p-1 md:w-32 lg:w-44' />
                            </div>
                            <div className="formInput flex flex-col">
                                <label htmlFor="status">Status :)</label>
                                <select onChange={handleOnChange} value={NewState.status} name="status" className='border border-red-500 outline-none p-[6px] p- md:w-32 lg:w-44'>
                                    {
                                        options.map((option, index) => {
                                            return <option key={index}>{option}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex my-1 p-1 ">
                            {
                                allTags.map((tags, index) =>{
                                    return tags ? <span className="p-1 bg-red-200" key={index}>{tags}</span> : ""
                                })
                            }
                        </div>
                        <div className="flex flex-col my-1">
                            <label htmlFor="Tag">Tags :)</label>
                            <input type="text" onChange={handleTags} onKeyPress={handleOnPress} value={tag} className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Tags here!' />
                        </div>
                        <div className="btn flex justify-between">
                        <button onClick={handleOnClick} className='bg-blue-500 text-white px-2 py-1 rounded'>ADD NOW</button>
                        <button onClick={() => setToggleBtn(false)} className='border border-red-400 px-2 py-1 rounded'>CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form

// if (name === "title") {
//     return {
//         title: value,
//         description: preValue.description,
//         date: preValue.date,
//         status: preValue.status,
//     }
// }
// else if (name === "description") {
//     return {
//         title: preValue.title,
//         description: value,
//         date: preValue.date,
//         status: preValue.status,
//     }
// }
// else if (name === "date") {
//     return {
//         title: preValue.title,
//         description: preValue.description,
//         date: e.target.value,
//         status: preValue.status,
//     }
// }
// else if (name === "status") {
//     return {
//         title: preValue.title,
//         description: preValue.description,
//         date: preValue,
//         status: value,
//     }
// }