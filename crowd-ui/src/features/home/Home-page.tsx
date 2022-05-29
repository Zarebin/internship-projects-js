import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">
        <button>Image Label Verification</button>
      </Link>
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/sentiment">
        <button>Sentiment</button>
      </Link>
    </div>
  );
};

export default Home;