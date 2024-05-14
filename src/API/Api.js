
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://todo-app-backend-b1od.onrender.com/api/v1';

// registation api call start 
export function RegistationRequest(firstName,lastName,email,password,profilePicture){
  let url = `${baseUrl}/registraion`

  let body ={
    firstName:firstName,
    lastName:lastName,
    email:email,
    password: password,
    profilePicture:profilePicture
  }
  return axios.post(url,body)
   .then((response) => {
      if(response.status === 200) {
        if(response.data.status==="Failed"){
          if(response.data.data.email=== 1){
            toast.error("Email already exist");
            return false;
          }
        }
        else{
          toast.success("Registation Successfuly");
          return true;
        }

      }
      else{
        toast.error("Something went wrong");
        return false
      }
    })
    .catch((error) => {
      toast.error("Something went wrong");
      return false;
    });

}

// registation api call end

// login api call start

export function LoginRequest(email,password){
  let url = `${baseUrl}/login`
  let postBody = {
    email:email,
    password:password,
  }
  return axios.post(url,postBody)
  .then((response) => {
    if(response.status ===200){
      if(response.data.status==="fail"){
        if(response.data.data==="User Not Found"){
          return {error:"User Not Found"}
        }
        else if(response.data.data==="Wrong Password"){
          return {error:"Wrong Password"}
        }
        else{
          // return {error:"Something went wrong"}
          return false
        }
      }
      else{
        return true
      }

    }else{
      toast.error("Something went wrong");
      return false;
    }
}
  )
.catch((error) => {
    toast.error("Something went wrong");
    return false;
  });

}

