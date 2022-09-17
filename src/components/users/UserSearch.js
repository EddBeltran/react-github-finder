import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GitHubActions";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert('Please enter something', 'error')
    } else {
      // to do search users
      dispatch({type: 'SET_LOADING'})
      const users  = await searchUsers(text);
      dispatch({type: 'GET_USERS', payload: users})
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 outline-0"
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-28 p-2 text-bold rounded-r-lg bg-gray-800 text-white"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={ ()=> dispatch({type: 'CLEAR_USERS'}) } className="bg-gray-100 opacity-25 p-2 rounded-lg w-28">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
