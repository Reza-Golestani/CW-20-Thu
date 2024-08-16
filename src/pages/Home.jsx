import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/userSlice";
import UserRow from "../components/UserRow";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const { loading, error, users } = useSelector((contacts) => contacts.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(users);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start gap-8 p-8">
      <h1 className="text-3xl">React CRUD App with Redux</h1>
      <button
        className="px-4 py-2 bg-green-800 text-white rounded"
        onClick={() => navigate("/create")}
      >
        Create +
      </button>
      <table className="w-full border-collapse text-center">
        <thead className="border-b-2 text-lg">
          <th className="p-4">#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody className="">
          {users?.map((u,index) => (
            <UserRow key={u.id} user={u} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
