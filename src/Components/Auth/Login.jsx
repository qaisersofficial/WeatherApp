import { useState } from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const Login = ({ setIsLoggedIn, setShowSignup }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = () => {
    const { username, password } = credentials;
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className=" w-1/2 h-fit p-11 m-auto mt-[3%] flex flex-col items-center justify-center  backdrop-blur-md rounded-lg shadow-lg max-[500px]:w-fit ">
      
      <h1 className="text-3xl font-bold mb-4 w-fit">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="border rounded-xl px-4 py-2 mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded-xl px-4 py-2 mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <ErrorMessage error={error} />
      <button
        className="rounded-md bg-slate-800 text-center  text-xl px-10 py-2 text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:ml-2 my-4"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="text-slate-800 hover:text-slate-500 w-fit"
        onClick={() => setShowSignup(true)}
      >
        Don't have an account? Sign up
      </button>
    </div>
  );
};

export default Login;