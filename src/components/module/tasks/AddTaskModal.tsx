import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { addTask } from "@/redux/features/task/taskSlice"
import { selectUsers } from "@/redux/features/user/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { ITask } from "@/types/types"
import { DialogDescription } from "@radix-ui/react-dialog"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"


export function AddTaskModel() {
    const form = useForm() //react hook form er 7e shdcn-ui er form k connect korte ae hook niya hyse
    const [open,setOpen] = useState(false)

    const users = useAppSelector(selectUsers)
    const dispatch = useAppDispatch()
    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        dispatch(addTask(data as ITask))
        setOpen(false)
        form.reset() 
        //react hook form e reset namer ekta method ashe ja form clear kore
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
       {/* shdcn e open and onOpenChange namer 2ta propertise ashe model k handle korar jonno */}
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Fill up this form to add task</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          
        </DialogHeader>
        
      <Form {...form}> 
     <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
           {/* react hook form er 7e shdcnui form connect kore use kora hoi */}
      <FormField
    //field form maddhome uncontroll k control kori
    control={form.control} 
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
        {/* input holo uncontroll ekta jinis ar ekhane field form moddhe diya control element e convert korsi */}
         <Input {...field} value={field.value || ""} />
        </FormControl>
      </FormItem>
    )}
  />

<FormField
    control={form.control} 
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
         <Textarea {...field} value={field.value || ""} />
        </FormControl>
      </FormItem>
    )}
  />
   <FormField
          control={form.control}
          name="assignedTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assigned To</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Assign To" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {
                  users.map((user) => <SelectItem value={user.id}>{user.name}</SelectItem>)
                }
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a priority to set" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
  <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
