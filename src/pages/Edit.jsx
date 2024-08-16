import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, getOne } from "../features/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Edit() {
  const { userId } = useParams();
  const [userValue, setUserValue] = useState({ name: null, email: null });

  const { status, currentUser } = useSelector((store) => store.users);
  console.log(currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOne(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    if (currentUser) setUserValue(currentUser);
  }, [currentUser]);

  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(userValue)
    // const editedUser = {
    //   name: e.target["nameInp"].value,
    //   email: e.target["emailInp"].value,
    // };
    dispatch(editUser({id: userId, data:userValue}));
    console.log(status);
    // status==="success" &&
    navigate("/");
  };

  return (
    <div className="flex items-center w-full min-h-screen justify-center">
      <div className="bg-slate-500 flex flex-col items-start gap-2 w-[500px]">
        <form
          className="m-7 flex flex-col justify-center gap-2 "
          onSubmit={handleEdit}
        >
          <h1 className="text-xl font-bold">Update User</h1>
          <div className="flex flex-col">
            <label htmlFor="nameInp">Name:</label>
            <input
              value={userValue.name}
              name="nameInp"
              id="nameInp"
              type="text"
              className="rounded-sm w-96"
              onChange={(e) => {
                setUserValue((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailInp">Email:</label>
            <input
              value={userValue.email}
              name="emailInp"
              id="emailInp"
              type="email"
              className="rounded-sm w-96"
              onChange={(e) => {
                setUserValue((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>
          <button
            type="submit"
            className="rounded-sm text-black bg-cyan-400 py-1 w-fit px-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
