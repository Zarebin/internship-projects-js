import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { postData } from '../actions';
import { selectQuestion } from '../foodCompareSlice';
import './Footer.scss';

import RightFlag from '../assest/right.png';
import LeftFlag from '../assest/left.png';

enum FooterType {
  skip = 0,
  previous = -1,
}

function Footer() {
  const dispatch = useAppDispatch();
  const question = useAppSelector(selectQuestion);

  const getSendData = (sentiment: any) => ({
    questionId: question.id,
    sentiment,
  });

  return (
    <div className="footer">
      <button
        type="button"
        // onClick={() => {
        //   dispatch(postData(getSendData(FooterType.previous)));
        // }}
      >
        <span>Previous</span>
        <img src={LeftFlag} alt="leftFlag" />
      </button>
      <button
        type="button"
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
