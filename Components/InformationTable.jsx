import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, editData } from '../redux/userSlice.js';

function InformationTable() {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const newData = prompt("Enter new data:");
    if (newData) {
      dispatch(editData({ id, newData }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Information Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Business Arena</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Employees</th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-300">
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.company}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.businessArena}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.employees}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InformationTable;
