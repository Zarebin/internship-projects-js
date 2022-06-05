

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { postData } from "../actions";
// // import { foodCompareHandler } from "../foodCompareSlice";
// import "./Footer.scss";

// import RightFlag from "../assest/right.png";
// import LeftFlag from "../assest/left.png";

// function Footer() {
//   const dispatch = useDispatch();
//   const step = useSelector((state) => state.foodCompareReducer.step);

//   return (
//     <div className="footer">
//       <button
//         onClick={() => {
//           dispatch(sentimentHandler(-1));
//           dispatch(postData());
//         }}
//         disabled={!step}
//       >
//         <span>Previous</span>
//         <img src={LeftFlag} alt="leftFlag" />
//       </button>
//       <button
//         onClick={() => {
//           dispatch(sentimentHandler(0));
//           dispatch(postData());
//         }}
//       >
//         <span>Skip</span>
//         <img src={RightFlag} alt="rightFlag" />
//       </button>
//     </div>
//   );
// }

// export default Footer;



import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { postData } from "../actions";
import { selectQuestion } from "../foodCompareSlice";
import "./Footer.scss";

import RightFlag from "../assest/right.png";
import LeftFlag from "../assest/left.png";

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