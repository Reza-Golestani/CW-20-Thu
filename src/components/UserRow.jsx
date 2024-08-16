import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function UserRow({ user, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, email } = user;
  return (
    <tr className=" border-b-2">
      <td className="p-2">{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td className="space-x-4">
        <button
          className="
        px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button
          className="
        px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => dispatch(deleteUser(id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
