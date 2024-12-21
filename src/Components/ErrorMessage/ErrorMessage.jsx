const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <p className="text-red-500 text-center text-[1.5rem] animate-pulse">
      {error}
    </p>
  );
};

export default ErrorMessage;
