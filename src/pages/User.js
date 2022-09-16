import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams()
  useEffect(()=>{
    getUser(params.login)
    //getUserRepos(params.login)
  }, [])

  return <div>User</div>;
}

export default User;
