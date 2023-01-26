import {GoogleLogout} from 'react-google-login'
import { useNavigate } from 'react-router-dom';


// const clientId = process.env.GOOGLE_CLIENT_ID;
const clientId = '1083364487049-876c0qc973fc5a0pjatqnh59pc9nkf7s.apps.googleusercontent.com'


const Logout = ()=>{


    const Navigate = useNavigate();

    const onSuccess = (res)=>{
        console.log(res);
        localStorage.clear();
        Navigate('/logging');
    }
    const onFailure =(res)=>{
        console.log(res);
    }

    return(
        <div id='LogoutButton'>

            <GoogleLogout
                      clientId={clientId}
                      buttonText={"Logout"}
                      onLogoutSuccess ={onSuccess}
            />
        </div>
    )
}

export default Logout;
