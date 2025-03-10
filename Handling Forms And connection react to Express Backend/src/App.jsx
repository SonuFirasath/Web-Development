import { useForm } from "react-hook-form"
import './App.css'

function App() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className="container">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("username",{required:true, minLength:{value:3,message:"The min length is 3"},maxLength:{value:9,message:"The maximum length is 9 dude."}})} type="text"/>{
              errors.username && <div className="red">{errors.username.message}</div>
            }
            <input  {...register("password")} type="password"/>
            <input type="submit" value='submit' />
          </form>
        </div>
    </>
  )
}

export default App
