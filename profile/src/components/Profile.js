import React from 'react'
import Header from './HeaderProfile';
import {useNavigate} from 'react-router-dom'
import {ReactComponent as ReactLogo} from '../images/girl.svg';
// import { Link } from 'react-router-dom';


function Profile(){

    const navigate=useNavigate()

    const handelNavigateAge=()=>{
        navigate('age')
    }
    const handelNavigateGender=()=>{
        navigate('gender')
    }
     return(
        <div className='wrapper'>
            <Header/>
            <div className='wrapper__content'>
                <div className='profileLogoBorder'>
                    <ReactLogo className='profileLogoBorder__profileLogo'/>
                </div>
                <form>
                    <div className='form'>
                        <div className='form__inputBox'>
                            <span for='mobileNumber' className='form__span'>شماره موبایل</span>
                            <input type='text'  className='form__input' id='mobileNumber' placeholder='09123334455' readOnly></input>
                        </div>
                        <div className='form__inputBox'>
                            <span for='ageYear' className='form__span'>سال تولد</span>
                            {/* <Link to='age'> */}
                            <input type='text'  className='form__input' id='ageYear' placeholder='1371' onClick={handelNavigateAge} readOnly ></input>
                            {/* </Link>   */}
                            <label for='ageYear' className='form__label'onClick={console.log('hgd')}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10.0938V12.75H2.83582L11.1996 4.91583L8.36378 2.25958L0 10.0938ZM2.20816 11.3333H1.51244V10.6817L8.36378 4.26417L9.0595 4.91583L2.20816 11.3333ZM13.3926 1.86292L11.6231 0.205417C11.4718 0.06375 11.2828 0 11.0862 0C10.8896 0 10.7005 0.0708333 10.5568 0.205417L9.17294 1.50167L12.0088 4.15792L13.3926 2.86167C13.6876 2.58542 13.6876 2.13917 13.3926 1.86292Z" fill="#FE7A30"/>
                            </svg>
                            </label>
                        </div> 
                        <div className='form__inputBox'>
                            <span for='gender' className='form__span'>جنسیت</span>
                            {/* <Link to='Gender'> */}
                            <input type='text'  className='form__input' id='gender' placeholder='خانم' onClick={handelNavigateGender}  readOnly></input>
                            {/* </Link> */}
                            <label for='gender' className='form__label'>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10.0938V12.75H2.83582L11.1996 4.91583L8.36378 2.25958L0 10.0938ZM2.20816 11.3333H1.51244V10.6817L8.36378 4.26417L9.0595 4.91583L2.20816 11.3333ZM13.3926 1.86292L11.6231 0.205417C11.4718 0.06375 11.2828 0 11.0862 0C10.8896 0 10.7005 0.0708333 10.5568 0.205417L9.17294 1.50167L12.0088 4.15792L13.3926 2.86167C13.6876 2.58542 13.6876 2.13917 13.3926 1.86292Z" fill="#FE7A30"/>
                            </svg>
                            </label>
                        </div>   
                    </div>
                </form>
            </div>
            <div className="saveChanges">
                <button className="saveChanges__button"> ذخیره تغییرات </button>
            </div>
            <div className='Footer'>
                <div className='Footer__grade'>
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7808 2.77778H20.0411V1.38889C20.0411 0.625 19.4247 0 18.6712 0H7.71232C6.9589 0 6.34246 0.625 6.34246 1.38889V2.77778H3.60273C2.09588 2.77778 0.863007 4.02778 0.863007 5.55556V6.94444C0.863007 10.4861 3.49314 13.375 6.87671 13.8056C7.73972 15.8889 9.58903 17.4583 11.8219 17.9167V22.2222H7.71232C6.9589 22.2222 6.34246 22.8472 6.34246 23.6111C6.34246 24.375 6.9589 25 7.71232 25H18.6712C19.4247 25 20.0411 24.375 20.0411 23.6111C20.0411 22.8472 19.4247 22.2222 18.6712 22.2222H14.5616V17.9167C16.7945 17.4583 18.6438 15.8889 19.5068 13.8056C22.8904 13.375 25.5205 10.4861 25.5205 6.94444V5.55556C25.5205 4.02778 24.2877 2.77778 22.7808 2.77778ZM3.60273 6.94444V5.55556H6.34246V10.8611C4.75342 10.2778 3.60273 8.75 3.60273 6.94444ZM22.7808 6.94444C22.7808 8.75 21.6301 10.2778 20.0411 10.8611V5.55556H22.7808V6.94444Z" fill="#3F3F3F" fill-opacity="0.44"/>
                    </svg>
                    <a href='#' className='Footer__linkgrade'>امتیازات</a>
                </div>
                <div className='Footer__home'>
                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0566 21.2702V14.4768H15.4169V21.2702C15.4169 22.0175 16.0199 22.6289 16.757 22.6289H20.7772C21.5142 22.6289 22.1172 22.0175 22.1172 21.2702V11.7594H24.3954C25.0118 11.7594 25.3066 10.985 24.8376 10.5774L13.6346 0.346465C13.1254 -0.115488 12.3481 -0.115488 11.8389 0.346465L0.635884 10.5774C0.180259 10.985 0.461674 11.7594 1.07811 11.7594H3.35623V21.2702C3.35623 22.0175 3.95926 22.6289 4.6963 22.6289H8.71652C9.45356 22.6289 10.0566 22.0175 10.0566 21.2702Z" fill="#5C49D8"/>
                    </svg>
                    <a href='#' className='Footer__linkhome'>خانه</a>
                </div>
            </div> 
        </div>
      )
}
  
export default Profile
  
  