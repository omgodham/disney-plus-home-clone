import React,{useEffect} from 'react'
import styled from 'styled-components';
import {useDispatch , useSelector} from 'react-redux';
import {setUser , setLogout} from "../features/User/userSlice";
import {auth , provider} from "../firebase";
import {useHistory} from 'react-router-dom';

function Header() {

const dispatch = useDispatch();
const userName = useSelector(state => state.user.name);
const userPhoto = useSelector(state => state.user.photo);
const history = useHistory();

useEffect(()=>{
    auth.onAuthStateChanged(async (user) => { //This is for populating state after the reload(beacuse after reaload state vanished) , the last person was logged in will be saved in firebase cookie      
          if(user){
            dispatch(setUser({
                name: user.displayName,
                photo : user.photoURL
            }));
            history.push("/");
        }
    });
},[]);

const signIn = () => {
    auth.signInWithPopup(provider) //here provider is the google auth provider
    .then((result) => {
        let user = result.user;
        // console.log(result);
        dispatch(setUser({
            name: user.displayName,
            photo : user.photoURL
        }));
        history.push("/");
    });
}

const signOut = () => {
    auth.signOut().then(()=>{
        dispatch(setLogout());
        history.push("/login");
    });
}

    return (
        <Nav>
            <Logo src='\images\logo.svg' />
            { !userName ? <Login onClick={signIn}>LOGIN</Login>
                : <>
                <NavMenu>
                <a>
                    <img src="\images\home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="\images\search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="\images\watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="\images\movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="\images\series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src={userPhoto} onClick={signOut}/>
                </>
            }
        
            
        </Nav>
    )
}

export default Header

const Nav = styled.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;

`   
const Logo = styled.img`
width:80px;
`

const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;

a{
        display:flex;
        align-items:center;   
        padding:0 12px;
       
        cursor:pointer;

        img{
             height:20px;   
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
            

            &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform:scaleX(0.4);
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
        }
        
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1);
            }
                
            }
        
    }
`
const UserImg = styled.img`
height:48px;
width:48px;
border-radius:50%;
cursor:pointer;
`
const Login = styled.div`
border: 1px solid white;
padding:9px 12px;
border-radius:4px;
background-color:transparent;
margin-left:auto;
cursor:pointer;    
letter-spacing:1.5px; 
    &:hover{
        background-color:white;
        color:black;
        border:1px solid transparent;
    }
`