
import './App.css'
import {useForm} from "react-hook-form";
import axios from "axios"


function App() {
  const {handleSubmit, reset, register} = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("role", data.role);

    console.log(formData.get("username"));

    try{
      const response = await axios.post(
        "https://klabbackend-sbhs.onrender.com/api/v1/users",
        formData,
        {
          headers: {
            "content-Type": "application/json",
          }
        }
      );
      alert("registered successfully!");
      console.log(response.data);
    } catch(err){
      console.log(err);
    }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="username" {...register("username")}/>
        <input type="email" placeholder="email" {...register("email")}/>
        <input type="number" placeholder="phone" {...register("phone")}/>
        <input type="password" placeholder="password" {...register("password")}/>
        <select {...register("role")}>
          <option value="0">select role</option>
          <option >company</option>
          <option >parent</option>
          <option >alumni</option>
        </select>
        <input type="submit" value="sign up"/>
      </form>
  )
}

export default App
