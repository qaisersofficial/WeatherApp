const Congratulations = ({ setShowPopup }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div
          className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn"
          onAnimationEnd={() => setTimeout(() => setShowPopup(false), 3000)}
        >
          <h2 className="text-2xl font-bold text-center mb-4">Congratulations!</h2>
          <p className="text-center">You have successfully signed up.</p>
        </div>
      </div>
    );
  };
  
  export default Congratulations;
  