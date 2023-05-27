import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/user"
function OwnerSettings ({data}) {
    const currentUser = useSelector(state => state.user)
    console.log(data.value.users, currentUser)

    const onRemove = (user) => {
        console.log(user)
    }
    const allUserButOwner = data.value.users.filter((el) => {
        return (el.user.some(person => person.id === currentUser.value.user.id))
    })
    console.log(allUserButOwner)
    const serverUsers = data.value.users.map(user => {
        return (
            <button key={user.user.id} onClick={() => onRemove(user.user)}
            className="border border-red-700">{`remove: ${user.user.username}`}</button>
        )
    })

    return (
        <>
        <h1>ownerSettings</h1>
        <div className=" flex flex-col">
        {serverUsers}
        </div>
        </>
    )
}

export default OwnerSettings