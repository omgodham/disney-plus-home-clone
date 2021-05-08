import React,{useEffect} from "react";
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from "./Viewers";
import Movies from "./Movies";
import {setMovies} from "../features/Movies/movieSlice";
import {useDispatch} from 'react-redux';
import db from '../firebase.js'; //data is stored on the firebase db

function Home() {

  const dispatch = useDispatch();


  useEffect(()=>{
    db.collection("movies").onSnapshot((snap)=>{ //onSnapshot gives the snap of current database picture
        let movies = snap.docs.map((doc)=>{ // for adding id in current obj else we can use snap.docs also
          console.log(doc.data().type); 
          return {id:doc.id , ...doc.data()}
           
          });
       dispatch(setMovies(movies)); //dispatching directly by action
    });
},[]);      

  return <Container>
      <ImgSlider />
      <Viewers />
      <Movies/>
  </Container>;
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background: url("/images/home-background.png") ;
    background-repeat: no-repeat;
  background-attachment: fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:-1;
  }
`;
