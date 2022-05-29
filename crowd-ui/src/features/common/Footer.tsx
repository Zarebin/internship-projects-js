import "./Footer.scss";
import { useDispatch,useSelector } from "react-redux";
import { nextInfo,previousInfo} from "../foodFacts/FoodFactsSlice";
function Footer() {
  const dispatch=useDispatch()
  return (
    <div className="Footer">

      <button className="Footer__button" onClick={()=>{dispatch(previousInfo("skip"))}}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="gray" d="m14 20l-8-8l8-8l1.414 1.414L8.828 12l6.586 6.586z"/></svg>
            {/* <span href='#'>Previous</span> */}
            <span>Previous</span>
      </button>
      <button className="Footer__button" onClick={()=>{dispatch(nextInfo("skip"))}}>
            {/* <span href='#'>Skip</span> */}
            <span>Skip</span>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="gray" d="m10 20l8-8l-8-8l-1.414 1.414L15.172 12l-6.586 6.586z"/></svg>
      </button>
      
    </div>
  );
}

export default Footer;

