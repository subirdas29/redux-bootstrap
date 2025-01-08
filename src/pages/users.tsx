import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function Users(){
    const users = useAppSelector(selectUsers)
    // console.log(users)
    return(
        <div>
            <AddUserModal/>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {
                    users.map(user => <UserCard key={user.id} user={user}/>)
                }
            </div>
        </div>
    )
}