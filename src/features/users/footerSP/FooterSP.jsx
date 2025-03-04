import React from 'react'
import './FooterSP.scss'
import Cses_logo from './images/CSES_Logo.svg'
import mail from './images/mail.png'
import location from './images/locationPin.svg'
import phone from './images/phone.png'
import useAuth from "@/hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

const footerSP = () => {
    const navigate = useNavigate();
    const { deleteToken } = useAuth();
    function handleLogout() {
        deleteToken();
        navigate("/", { replace: true });
    }

    function logoutClicked(){
        if(window.confirm("Do you want to Logout?")){
            handleLogout();
        }
    }

    return (
        <div className='footerSP'>
            <div className="footerContents">
                {/* <img src={Cses_logo} alt="CSE Society Logo" /> */}

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="180.600000pt" height="123.000000pt" viewBox="0 0 300.000000 191.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g className='csesSvg' transform="translate(0.000000,191.000000) scale(0.100000,-0.100000)"
                        fill="#000" stroke="none">
                        <path d="M825 1770 c-299 -44 -554 -265 -635 -550 -12 -41 -24 -121 -27 -177
-7 -127 19 -247 80 -373 34 -71 58 -102 142 -186 80 -80 117 -109 183 -143
259 -133 594 -119 828 35 67 44 204 176 204 197 0 7 -42 55 -94 105 l-93 92
-357 0 c-196 0 -356 -3 -356 -7 0 -5 42 -46 92 -93 l92 -85 240 -3 c133 -2
245 -7 249 -11 18 -18 -138 -107 -237 -136 -87 -25 -319 -17 -394 13 -175 72
-309 212 -366 383 -48 143 -45 258 10 396 57 143 154 250 293 322 133 69 279
88 432 56 120 -25 294 -123 275 -153 -5 -9 -79 -12 -256 -12 l-250 0 -92 -89
c-81 -77 -91 -91 -83 -109 6 -12 106 -118 224 -237 l214 -215 118 0 c71 0 120
4 124 10 4 6 -9 29 -29 50 -20 22 -36 45 -36 52 0 7 72 -59 159 -146 88 -88
165 -163 173 -167 7 -5 109 -9 226 -9 165 0 212 3 212 13 0 7 -36 48 -80 92
l-80 80 -220 3 -219 4 -6 61 c-4 34 -5 80 -3 102 l3 40 113 3 c80 2 112 6 112
15 0 7 -25 38 -57 70 -54 55 -58 57 -108 57 -39 0 -54 4 -59 16 -11 28 -6 113
6 120 7 5 109 10 228 13 l215 6 -79 83 -79 82 -75 0 -74 0 -92 93 c-99 100
-157 139 -287 192 -120 49 -282 66 -424 45z m615 -362 c0 -7 -30 -43 -67 -80
l-68 -68 -5 -177 -5 -177 -155 157 c-85 87 -156 165 -158 173 -3 12 18 14 124
14 l127 0 86 85 c79 78 121 103 121 73z"/>
                        <path d="M1620 500 c-11 -11 -20 -30 -20 -43 0 -26 33 -61 67 -71 35 -11 48
-33 35 -61 -11 -23 -15 -24 -58 -18 -38 5 -46 3 -42 -8 3 -8 22 -15 47 -17
106 -8 135 90 41 138 -23 12 -44 28 -47 37 -9 23 24 43 58 36 22 -4 29 -2 29
11 0 25 -84 22 -110 -4z"/>
                        <path d="M1819 491 c-26 -26 -29 -36 -29 -91 0 -55 3 -65 29 -91 24 -24 38
-29 76 -29 25 0 55 5 66 10 28 15 49 63 49 110 0 79 -39 119 -113 120 -40 0
-53 -5 -78 -29z m126 -16 c33 -32 36 -124 5 -155 -29 -29 -74 -26 -99 6 -26
33 -29 118 -5 152 21 30 68 29 99 -3z"/>
                        <path d="M2094 486 c-30 -30 -34 -40 -34 -89 0 -45 5 -61 26 -86 23 -28 32
-31 79 -31 30 0 57 4 60 10 4 6 -11 10 -38 10 -62 0 -81 24 -82 99 0 75 13 91
76 91 37 0 49 4 49 15 0 11 -12 15 -51 15 -45 0 -55 -4 -85 -34z"/>
                        <path d="M2294 507 c-10 -28 1 -220 14 -225 9 -3 12 25 12 117 0 77 -4 121
-10 121 -6 0 -13 -6 -16 -13z"/>
                        <path d="M2390 400 l0 -120 65 0 c72 0 90 17 23 22 -43 3 -43 3 -46 46 l-3 42
35 0 c45 0 47 18 4 22 -35 3 -44 21 -34 64 5 20 13 24 41 24 19 0 35 5 35 10
0 6 -27 10 -60 10 l-60 0 0 -120z"/>
                        <path d="M2560 511 c0 -5 12 -11 28 -13 l27 -3 5 -105 c4 -84 8 -105 20 -105
12 0 16 21 20 105 l5 105 41 3 c41 3 42 2 74 -52 20 -36 33 -76 37 -111 8 -78
43 -73 43 6 0 16 16 61 36 100 19 39 33 73 30 76 -11 11 -34 -18 -51 -62 -9
-25 -21 -45 -26 -45 -6 0 -21 25 -34 55 l-25 55 -115 0 c-64 0 -115 -4 -115
-9z"/>
                    </g>
                </svg>


                <div className="footerDetails">
                    <p className="aboutUs">
                        Department of Computer Science and Engineering,<br />Indian Institute of Technology (Indian School of Mines), Dhanbad
                    </p>
                    <p className="contactUs">
                        <a href="mailto:office@cse.iitism.ac.in" className='mail'>
                            {/* <img className='svgEle' src={mail} alt="" /> */}
                            <svg className='mailSvg' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                            office@cse.iitism.ac.in</a>
                        <p className='location'>
                            {/* <img className='svgEle' src={location} alt="" />  */}
                            <svg width="20px" height="20px" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 19.325C7.76667 19.325 7.53333 19.2833 7.3 19.2C7.06667 19.1167 6.85833 18.9917 6.675 18.825C5.59167 17.825 4.63333 16.85 3.8 15.9C2.96667 14.95 2.27083 14.0292 1.7125 13.1375C1.15417 12.2458 0.729167 11.3875 0.4375 10.5625C0.145833 9.7375 0 8.95 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 8.95 15.8542 9.7375 15.5625 10.5625C15.2708 11.3875 14.8458 12.2458 14.2875 13.1375C13.7292 14.0292 13.0333 14.95 12.2 15.9C11.3667 16.85 10.4083 17.825 9.325 18.825C9.14167 18.9917 8.93333 19.1167 8.7 19.2C8.46667 19.2833 8.23333 19.325 8 19.325ZM8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10Z" fill="black" />
                            </svg>
                            <span>Dhanbad - 826004 <br />Jharkhand, India</span></p>
                        <p className="phone">
                            {/* <img className='svgEle' src={phone} alt="" />  */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                            +91 1234567890</p>
                    </p>
                </div>
            </div>
            <div className='userFns'>
                <span className="changePass" >Change Password</span>
                <span className="logout" onClick={logoutClicked}>Logout</span>
                
            </div>
            <p className='footCopyright'>© Department of CSE, IIT ISM Dhanbad</p>
        </div>
    )
}

export default footerSP