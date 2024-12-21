import { useState } from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Signup = ({ setShowSignup, setShowPopup }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSignup = () => {
    const { username, password } = credentials;
    if (!username || !password) {
      setError('Please fill out all fields');
      return;
    }

    if (localStorage.getItem(username)) {
      setError('Username already exists');
      return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    setError('');
    setShowSignup(false);
    setShowPopup(true);
  };

  return (
    <div className=" w-1/2 h-fit p-11 m-auto mt-[3%] flex flex-col items-center justify-center  backdrop-blur-2xl rounded-lg shadow-lg max-[500px]:w-fit ">
      <h1 className="text-3xl font-bold mb-4 w-fit">Sign Up</h1>
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
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <button
        className="text-slate-800 hover:text-slate-500 w-fit"
        onClick={() => setShowSignup(false)}
      >
        Back to Login
      </button>
    </div>
  );
};
export default Signup;