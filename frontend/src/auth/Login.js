import { GoogleLogin } from 'react-google-login';

// const clientId = process.env.GOOGLE_CLIENT_ID
const clientId = '1083364487049-876c0qc973fc5a0pjatqnh59pc9nkf7s.apps.googleusercontent.com'



const Login = ()=>{

    const login = async(name,email,photo)=>{
        const data = await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({
                name,email,photo
            }),
            headers:{
                "Content-Type" : "application/json"
             }
        })
    }
    const onSuccess = (res)=>{
        // console.log(res.profileObj);
        localStorage.setItem("name",res.profileObj.name);
        localStorage.setItem("email",res.profileObj.email);
        localStorage.setItem("googleId",res.profileObj.googleId);
        login(res.profileObj.name,res.profileObj.email,res.profileObj.imageUrl);
    }
    const onFailure =(res)=>{
        console.log(res);
    }
  

  return(  
  <div id="signupButton">
       <GoogleLogin
 clientId={clientId}
  buttonText="Login"
  onSuccess={onSuccess}
  onFailure = {onFailure}
  cookiePolicy={'single_host_origin'}
  isSignedIn = {true}
       />      
    </div>)
}
export default Login;
