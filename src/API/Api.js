
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://todo-app-backend-b1od.onrender.com/api/v1';

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