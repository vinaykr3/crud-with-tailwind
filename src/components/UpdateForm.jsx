import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
const options = ["Open", "Done", "Working", "Overdue"];
const UpdateForm = () => {
    const {toggle, update} = useSelector(state => state.toggleReducer);
    // console.log(update);
    // console.log(toggle);
    const dispatch = useDispatch();
    const [tag, setTag] = useState('');
    const handleOnChange = () => {

    }
    const handleOnPress = (e) => {
        if(e.key === "Enter"){
            dispatch({type: 'ADD_TAG', payload: tag});
            setTag('');
        }
    }
    return (
        <div>
            <div className={`md:w-full ${toggle} justify-center mt-4 absolute top-[-4px] backdrop-blur-sm`}>

                <div className="border border-blue-400">
                    <h2 className='text-white bg-blue-400 p-4 text-lg cursor-default'>UPDATE TO-DO ITEM</h2>
                    <div className="m-12">
                        <div className="formInput flex flex-col">
                            <label htmlFor="Title">Title :)</label>
                            <input type="text" name='title' onChange={handleOnChange} value={update.title}  className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Title Here!' />
                        </div>

                        <div className="formInput flex flex-col my-3">
                            <label htmlFor="Description">Description :)</label>
                            <input type="text" name='description' onChange={handleOnChange} value={update.description} className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Description Here!' />
                        </div>
                        <div className="flex justify-between">
                            <div className="formInput flex flex-col">
                                <label htmlFor="Date">Date :)</label>
                                <input type="date" name='date' onChange={handleOnChange} value={update.date} className='border border-red-500 outline-none p-1 md:w-32 lg:w-44' />
                            </div>
                            <div className="formInput flex flex-col">
                                <label htmlFor="status">Status :)</label>
                                <select onChange={handleOnChange} value={update.status} name="status" className='border border-red-500 outline-none p-[6px] p- md:w-32 lg:w-44'>
                                    {
                                        options.map((option, index) => {
                                            return <option key={index} value="">{option}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex my-1 p-1 space-x-1">
                            { 
                                update.tags ?
                                update.tags.map((tags, index) => {
                                    return tags ? <span className="p-1 bg-red-100 cursor-default" key={index}>{tags} <button onClick={() => {dispatch({type: 'REMOVE_TAG', payload: index})}} className="px-1 py-0 hover:bg-red-400 rounded-md">x</button></span> : ""
                                }) : ''
                            }
                        </div>
                        <div className="flex flex-col my-1">
                            <label htmlFor="Tag">Tags :)</label>
                            <input type="text" onChange={(e) => {setTag(e.target.value)}} onKeyPress={handleOnPress} value={tag} className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Tags here!' />
                        </div>
                        <div className="btn flex justify-between">
                            <button  className='bg-blue-500 text-white px-2 py-1 rounded'>Update Now</button>
                            <button onClick={() => {dispatch({type: "HIDE"})}} className='border border-red-400 px-2 py-1 rounded'>CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateForm;