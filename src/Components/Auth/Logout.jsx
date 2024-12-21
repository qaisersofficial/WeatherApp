const Logout = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="absolute right-1 md:right-4 max-[425px]:w-fit max-[425px]:px-1 max-[425px]:py-0.5 rounded-md bg-slate-800 text-center  text-xl px-8 py-2 text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:ml-2 my-4"
      title="Logout"
    >
      Logout
    </button>
  );
};

export default Logout;
