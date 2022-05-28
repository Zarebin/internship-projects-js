import React from "react";
import Header from "./Header";
import GirlImg from "./girl.svg";
import BoyImg from "./boy.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { selectGender, isChecked } from "../rootSlice";

function Gender(props) {
  let [isDisable, setIsDisable] = useState(true);
  let [gender, setGender] = useState("");

  props.func(gender);

  const selectWoman = () => {
    setGender("woman");
    setIsDisable((isDisable = !isDisable));
  };
  const selectMan = () => {
    setGender("man");
    setIsDisable((isDisable = !isDisable));
  };

  const navigate = useNavigate();
  //const dispatch = useDispatch();
  //let chk = document.getElementById("myCheckBox").value;
  //function checkboxHandler() {
  // let chk = document.getElementById("myCheckBox").value;
  // dispatch(isChecked(!chk));
  //}
  return (
    <div className="container">
      <div className="gender">
        <Header />
        <p id="gender-header">لطفا جنسیت خودت رو انتخاب کن</p>
        <div className="parent">
          <div className="child" onClick={() => selectMan()}>
            <div className="pic">
              <img src={BoyImg} alt="boy img" />
            </div>
            <p> آقا </p>
          </div>
          <div className="child" onClick={() => selectWoman()}>
            <div className="pic">
              <img src={GirlImg} alt="girl img" />
            </div>
            <p> خانم </p>
          </div>
        </div>
        <div id="checkBox">
          <input type="checkbox" id="myCheckBox" checked />
          <label htmlFor="myCheckBox">با قوانین و مقررات موافقم</label>
        </div>
        <div className="button">
          <button
            id="genderButton"
            disabled={isDisable}
            onClick={() => {
              navigate("/age");
            }}
          >
            ادامه
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;
