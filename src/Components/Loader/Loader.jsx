import "./loader.css";
const Loader = ({loading}) => {
    return (
        <div className={`loader ${loading ? "grid" : "hidden"}`} role="status" aria-hidden="true"></div>
    );
    }
    export default Loader;