import { useSelector } from "react-redux";

const TableList = () => {
    const {Items} = useSelector(state => state.dataReducer) 
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            TimeStump
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Title
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Description
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Date
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Status
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Tags
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Items.length > 0 ?
                                        Items && Items.map((Elem) => {
                                            return (
                                                 
                                                 <tr className="border-b" key={Elem.Timestamp}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Elem.Timestamp}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {Elem.title}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {Elem.description}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {Elem.date}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {Elem.status}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {
                                                            Elem.tags.map((tag, index) => {
                                                                return <span className="space-x-2 mx-1" key={index}>{tag}</span>
                                                            })
                                                        }
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 space-x-2 py-4 whitespace-nowrap">
                                                        <button className="border border-blue-500 bg-blue-300 hover:bg-blue-500 hover:text-white py-[2px] px-2 rounded-md">Edit</button>
                                                        <button className="border border-blue-500 bg-red-300 hover:bg-red-500 hover:text-white py-[2px] px-2 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }) : <div className="flex justify-center">
                                            <h1 className=" bg-red-300">"No Item yet here! Please add"</h1>
                                        </div>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableList;