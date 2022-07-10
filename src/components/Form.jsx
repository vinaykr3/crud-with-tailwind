import React from 'react'

const Form = () => {
    return (
        <div className='md:w-full flex justify-center mt-4'>
            <div className="border border-blue-400">
                <h2 className='text-white bg-blue-400 p-4 text-lg cursor-default'>ADD NEW TO-DO ITEM</h2>
                <div className="m-12">
                    <div className="formInput flex flex-col">
                        <label htmlFor="Title">Title :)</label>
                        <input type="text" className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Title Here!' />
                    </div>

                    <div className="formInput flex flex-col my-3">
                        <label htmlFor="Description">Description :)</label>
                        <input type="text" className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Description Here!' />
                    </div>
                    <div className="flex justify-between">
                        <div className="formInput flex flex-col">
                            <label htmlFor="Date">Date :)</label>
                            <input type="date" className='border border-red-500 outline-none p-1 md:w-32 lg:w-44' />
                        </div>
                        <div className="formInput flex flex-col">
                            <label htmlFor="status">Status :)</label>
                            <select className='border border-red-500 outline-none p-[6px] p- md:w-32 lg:w-44'>
                                <option value="Open">Open</option>
                                <option value="Done">Done</option>
                                <option value="Working">Working</option>
                                <option value="Overdue">Overdue</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col my-1 p-1 bg-red-200">
                        tag, hello tag2
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="Tag">Tags :)</label>
                        <input type="text" className='border rounded border-red-500 outline-none p-1 md:w-72 lg:w-96' placeholder='Enter Your Tags here!' />
                    </div>
                    <div className="btn">
                        <button className='bg-blue-500 text-white px-2 py-1 rounded'>ADD NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form