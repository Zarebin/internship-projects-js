import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { postData } from "../sentiment/actions";
import { selectQuestion } from "../sentiment/sentimentSlice";
import "./Footer.scss";

import RightFlag from "../../assest/right.png";
import LeftFlag from "../../assest/left.png";

enum FooterType {
  skip = 0,
  previous = -1,
}

function Footer() {
  const dispatch = useAppDispatch();
  const question = useAppSelector(selectQuestion);

  const getSendData = (sentiment: any) => {
    return {
      questionId: question.id,
      sentiment: sentiment,
    };
  };

  return (
    <div className="footer">
      <button
        onClick={() => {
          dispatch(postData(getSendData(FooterType.previous)));
        }}
      >
        <span>Previous</span>
        <img src={LeftFlag} alt="leftFlag" />
      </button>
      <button
        onClick={() => {
          dispatch(postData(getSendData(FooterType.skip)));
        }}
      >
        <span>Skip</span>
        <img src={RightFlag} alt="rightFlag" />
      </button>
    </div>
  );
}

export default Footer;
