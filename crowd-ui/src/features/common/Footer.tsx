import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { sentimentHandler, previousHandler } from "../sentiment/sentimentSlice";
import "./Footer.scss";

import RightFlag from "../../assest/right.png";
import LeftFlag from "../../assest/left.png";

enum SkipType {
  skip = 0,
}

function Footer() {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.sentimentReducer.step);

  return (
    <div className="footer">
      <button onClick={() => dispatch(previousHandler())} disabled={!step}>
        <span>Previous</span>
        <img src={LeftFlag} alt="leftFlag" />
      </button>
      <button onClick={() => dispatch(sentimentHandler(SkipType.skip as any))}>
        <span>Skip</span>
        <img src={RightFlag} alt="rightFlag" />
      </button>
    </div>
  );
}

export default Footer;
