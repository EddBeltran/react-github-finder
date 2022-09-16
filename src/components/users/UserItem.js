import { PropTypes } from "prop-types"
import { Link } from 'react-router-dom'

function UserItem({user: { login, avatar_url }}) {
  return (
    <div className="flex items-center bg-slate-800 p-2">
        <div className="rounded-full overflow-hidden">
            <img width={60} src={avatar_url} alt="" />
        </div>
        <div className="pl-2 text-white">
            <h2 className="text-2xl">{login}</h2>
            <Link className="text-sm text-blue-300" to={`/user/${login}`}>Visit profile</Link>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem