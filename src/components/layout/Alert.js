import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {
 const {alert} = useContext(AlertContext)
  return alert !== null && (
    <div className="p-1 flex">
        <span className="text-red-600 font-semibold">{`X`}</span>
        <p className="font-semibold pl-2 text-white">{alert.msg}</p>
    </div>
  )
}

export default Alert