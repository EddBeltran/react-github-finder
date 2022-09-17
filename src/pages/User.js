import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import { getUser, getUserRepos } from "../context/github/GitHubActions";

function User() {
  const { user, loading, repos, dispatch} = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getUserData = async () => {
      const userData = await getUser(params.login)
      dispatch({type: 'GET_USER', payload: userData})

      const userRepoData = await getUserRepos(params.login)
      dispatch({type: 'GET_REPOS', payload: userRepoData})
    }
    getUserData()
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    hirable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="p-2 bg-blue-900 text-white rounded">
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div>
            <figure>
              <img src={avatar_url} alt="" />
            </figure>
            <div className="p-3 mt-2 bg-gray-800 text-white">
              <h2 className="text-xl font-bold">{name}</h2>
              <p>@{login}</p>
            </div>
          </div>
          <div className="col-start-2 col-end-4">
            <div className="flex flex-row items-center mb-4">
              <h1 className="text-white text-3xl">{name}</h1>
              <span className="bg-gray-800 px-3 ml-2 rounded-xl text-green-400 font-bold">
                {type}
              </span>
              {hirable ? (
                <span className="bg-gray-800 px-3 ml-2 rounded-xl text-red-400 font-bold">
                  Hirable
                </span>
              ) : (
                <span className="bg-gray-800 px-3 ml-2 rounded-xl text-red-400 font-bold">
                  No hirable
                </span>
              )}
            </div>
            <div className="text-white text-l mb-6">
              <p>{bio}</p>
            </div>
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-l text-white border-solid border-2 border-white"
            >
              Github Profile
            </a>
            <div className="my-6 text-white flex gap-2">
              {location && (
                <div className="bg-gray-800 p-2">
                  <p className="text-gray-400 text-l">Location: </p>
                  <p className="font-bold text-l">{location}</p>
                </div>
              )}
              {blog && (
                <div className="bg-gray-800 p-2">
                  <p className="text-gray-400 text-l">Website: </p>
                  <a className="cursor-pointer text-blue-400 font-bold text-l" target="_blank" rel="noreferrer" href={`https://${blog}`}>{blog}</a>
                </div>
              )}
              {twitter_username && (
                <div className="bg-gray-800 p-2">
                  <p className="text-gray-400 text-l">Twitter: </p>
                  <a className="cursor-pointer text-blue-400 font-bold text-l" target="_blank" rel="noreferrer" href={`https://${blog}`}>@{twitter_username}</a>
                </div>
              )}
            </div>
            <div className="my-6 text-white flex gap-2">
              <div className="border-solid border-2 border-gray-400 p-2">
                <p>Public Github Repos</p>
                <p className="text-3xl text-center">{public_repos}</p>
              </div>
              <div className="border-solid border-2 border-gray-400 p-2">
                <p>Followers</p>
                <p className="text-3xl text-center">{followers}</p>
              </div>
              <div className="border-solid border-2 border-gray-400 p-2">
                <p>Following</p>
                <p className="text-3xl text-center">{following}</p>
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos}/>
      </div>
    </>
  );
}

export default User;
