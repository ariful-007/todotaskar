// import { useState } from 'react';

// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setEmailError('')
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError('')
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setEmailError('Email is required');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     }
//     if (email && password) {
//       console.log(email);
//       console.log(password);
//     }
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Login to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={handleEmail}
//                   placeholder='Enter your email'
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                 <p className='text-red-500 mt-2'>{emailError}</p>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={handlePassword}
//                   placeholder='Enter your password'
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                 <p className='text-red-500 mt-2'>{passwordError}</p>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5"; // Importing the Lock icon

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showIcon, setShowIcon] = useState(false);
  const handelShowIcon = () => {
    setShowIcon(!showIcon);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('')
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }
    if (email && password) {
      console.log(email);
      console.log(password);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder='Enter your email'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className='text-red-500 mt-2'>{emailError}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                {
                  showIcon ?(
                    <IoEye onClick={handelShowIcon} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                  ):(
                    <IoEyeOff onClick={handelShowIcon} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                  )
                }
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder='Enter your password'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className='text-red-500 mt-2'>{passwordError}</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
    </div>
  );
};

export default Login;
