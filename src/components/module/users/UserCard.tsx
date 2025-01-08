
import { Button } from "@/components/ui/button"
import { deleteUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hook"
import { IUser } from "@/types/types"
import { Trash2 } from "lucide-react"

interface IProps {
    user: IUser
}

const UserCard = ({user}:IProps) => {

    const dispatch = useAppDispatch()

  return (
   <div>
     <div className="border border-green-500 flex items-center justify-between">
      <p className="py-8 px-4  flex">
        {user.name}
        </p>
        <Button variant="link" onClick={()=>dispatch(deleteUser(user.id))} className=" text-red-500">  
            <Trash2 />
            </Button>
      
    </div>
   </div>
  )
}

export default UserCard
