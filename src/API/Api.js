import axios from "axios";
import { toast } from "react-toastify";
import {
  getAuthToken,
  setAuthToken,
  setEmail,
  setOtp,
} from "../Helper/SessionHepler";

const baseUrl = "https://todo-app-backend-b1od.onrender.com/api/v1";

const token = { headers: { token: getAuthToken } };

// registation api call start
export function RegistationRequest(
  firstName,
  lastName,
  email,
  password,
  profilePicture
) {
  let url = `${baseUrl}/registraion`;

  let body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    profilePicture: profilePicture,
  };
  return axios
    .post(url, body)
    .then((response) => {
      if (response.status === 200) {
        if (response.data.status === "Failed") {
          if (response.data.data.email === 1) {
            toast.error("Email already exist");
            return false;
          }
        } else {
          toast.success("Registation Successfuly");
          return true;
        }
      } else {
        toast.error("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      toast.error("Something went wrong");
      return false;
    });
}
// registation api call end

// login api call start
export function LoginRequest(email, password) {
  let url = `${baseUrl}/login`;
  let postBody = {
    email: email,
    password: password,
  };
  return axios
    .post(url, postBody)
    .then((response) => {
      if (response.status === 200) {
        if (response.data.status === "Failed") {
          if (response.data.data === "User Not Found") {
            return { error: "User Not Found" };
          } else if (response.data.data === "Wrong password") {
            return { error: "Wrong password" };
          } else {
            // return {error:"Something went wrong"}
            return false;
          }
        } else {
          setAuthToken(response.data.token);
          return true;
        }
      } else {
        toast.error("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      toast.error("Something went wrong");
      return false;
    });
}
// login api call end

// Email verify start
export function EmailVerifyRequest(email) {
  let url = `${baseUrl}/email-verifiy/${email}`;
  return axios.get(url).then((response) => {
    if (response.status === 200) {
      if (response.data.status === "fail") {
        toast.error("User not found");
        return false;
      } else {
        toast.success("OTP Send Successfully");
        setEmail(email);
        return false;
      }
    } else {
      toast.error("Something went wrong");
      return false;
    }
  });
}
// Email verify end

// OTP verify start
export function OtpVerifyRequest(email, otp) {
  let url = `${baseUrl}/otp-verifiy/${email}/${otp}`;
  return axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        if (response.data.status === "Failed") {
          toast.error("Invalid OTP");
          return false;
        } else {
          toast.success("OTP Verified Successfully");
          setOtp(otp);
          return true;
        }
      } else {
        toast.error("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      toast.error("Something went wrong");
      return false;
    });
}
// OTP verify end
// Reset password start
export function ResetNewPasswordRequest(email, otp, password){
  let url = `${baseUrl}/reset-password`;

  let postBody = {
    email: email,
    opt: otp,
    password: password,
  };
  return axios
    .post(url, postBody)
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      toast.error("somthing went error");
      return false;
    });
}
// Reset password end



