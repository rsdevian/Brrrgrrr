import { Link } from "react-router-dom";
import templateImage from "./assets/template-image.webp";

import "./Account.css";

function Account() {
    function handleLogout() {
        localStorage.removeItem("user");
        window.location.reload();
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        return (
            <div className='account'>
                <div className='action-area'>
                    <div className='column1'>
                        <h2> Welcome {user.userData.name}!</h2>
                        <button onClick={handleLogout}> Logout </button>
                    </div>

                    <div className='column2'>
                        <img src={templateImage} alt='signin' />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='account'>
                <div className='action-area'>
                    <div className='column1'>
                        <div className='login-button'>
                            <Link to='/account/login'>
                                <button> Log In </button>
                            </Link>
                        </div>

                        <div className='signup-button'>
                            <Link to='/account/signup'>
                                <button> Sign Up </button>
                            </Link>
                        </div>
                    </div>

                    <div className='column2'>
                        <img src={templateImage} alt='signin' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
