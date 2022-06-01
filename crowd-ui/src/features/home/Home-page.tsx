import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/imageLabelVerification">
        <button>Image Label Verification</button>
      </Link>
      <Link to="/counter">
        <button>Counter</button>
      </Link>
    </div>
  );
};

export default Home;
