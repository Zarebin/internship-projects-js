// import { FormattedMessage } from 'react-intl';
// import { useAppSelector, useAppDispatch } from '../../../app/hooks';
// import { postData } from '../actions';
// import { selectQuestion } from '../foodCompareSlice';
// import './Footer.scss';

// import RightFlag from '../assest/right.png';
// // import LeftFlag from '../assest/left.png';

// enum FooterType {
//   skip = 0,
//   previous = -1,
// }

// function Footer() {
//   const dispatch = useAppDispatch();
//   const question = useAppSelector(selectQuestion);

//   const getSendData = (sentiment: any) => ({
//     questionId: question.id,
//     sentiment,
//   });

//   return (
//     <div className="footer">
//       {/* <button
//         type="button"
//         // onClick={() => {
//         //   dispatch(postData(getSendData(FooterType.previous)));
//         // }}
//       >
//         <span><FormattedMessage id="shared.previous" /></span>
//         <img src={LeftFlag} alt="leftFlag" />
//       </button> */}
//       <button
//         type="button"
//         onClick={() => {
//           dispatch(postData(getSendData(FooterType.skip)));
//         }}
//       >
//         <span><FormattedMessage id="shared.ignore" /></span>
//         <img src={RightFlag} alt="rightFlag" />
//       </button>
//     </div>
//   );
// }

// export default Footer;

// import React from 'react';
// import './Footer.scss';
// import { KeyboardArrowRight } from '@mui/icons-material';
// import { FormattedMessage } from 'react-intl';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectLoading, selectQuestion } from '../foodCompareSlice';
// import { postData } from '../actions';

// export default function Footer() {
//   enum FooterType {
//   skip = 3,
//   }
//   const sentence: any = useSelector<any, any>(selectQuestion);
//   const isLoading: any = useSelector<any, any>(selectLoading);
//   const dispatch = useDispatch();

//   let sentencesId: any = null;
//   if ('elementItem' in sentence) {
//     sentencesId = 'id' in sentence.elementItem ? sentence.elementItem.id : null;
//   }
//   const getSendData = () => ({
//     sentencesId,
//     userSentenceSelect: FooterType.skip,
//   });

//   return (
//   // eslint-disable-next-line react/jsx-no-useless-fragment
//     <>
//       {!isLoading && (
//         <div className="footer">
//           <button
//             className="footer__next"
//             type="button"
//             onClick={() => {
//               dispatch(postData(getSendData()));
//             }}
//           >
//             <span><FormattedMessage id="shared.ignore" /></span>
//             <span><KeyboardArrowRight /></span>
//           </button>

//         </div>
//       )}
//     </>
//   );
// }

import React from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { postData } from '../actions';
import { selectQuestion } from '../foodCompareSlice';
import './Footer.scss';

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
        className="footer__next"
        type="button"
        onClick={() => {
          dispatch(postData(getSendData(FooterType.skip)));
        }}
      >
        <span>
          <KeyboardArrowRight sx={{ color: 'blue' }} />
        </span>
        <span><FormattedMessage id="shared.ignore" /></span>
      </button>
    </div>
  );
}

export default Footer;
