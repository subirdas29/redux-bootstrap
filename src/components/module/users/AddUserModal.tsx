import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hook"
import { IUser } from "@/types/types"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

export function AddUserModal() {
    const form = useForm()
    const dispatch = useAppDispatch()

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        console.log(data)
         dispatch(addUser(data as IUser))
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input {...field} value={field.value || ""}/>
        </FormControl>
      </FormItem>
    )}
  />
        <DialogFooter>
          <Button className="mt-4" type="submit">Save changes</Button>
        </DialogFooter>
        </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
