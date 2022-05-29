import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <Link to="/"><button>Image Label Verification</button></Link>
            <Link to="/foodFacts"><button>Food Facts</button></Link>
            <Link to="/counter"><button>Counter</button></Link>
            
        </div>

    )
}


export default Home;