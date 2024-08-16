import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.users);

  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const newUser = {
      id: +new Date(),
      name: e.target["nameInp"].value,
      email: e.target["emailInp"].value,
    };
    dispatch(createUser(newUser));
    console.log(status)
    // status==="success" && 
    navigate("/");
  };

  return (
    <div className="flex items-center w-full min-h-screen justify-center">
      <div className="bg-slate-500 text-white flex flex-col items-start gap-2 w-[500px]">
        <form
          className="m-7 flex flex-col justify-center gap-2 "
          onSubmit={handleCreate}
        >
          <h1 className="text-xl font-bold">Create User</h1>
          <div className="flex flex-col">
            <label htmlFor="nameInp">Name:</label>
            <input
              name="nameInp"
              id="nameInp"
              type="text"
              className="rounded-sm w-96"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailInp">Email:</label>
            <input
              name="emailInp"
              id="emailInp"
              type="email"
              className="rounded-sm w-96"
            />
          </div>
          <button
            type="submit"
            className="rounded-sm text-black bg-cyan-400 py-1 w-fit px-2"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
