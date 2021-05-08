import React,{useEffect , useState} from "react";
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import  db  from "../firebase";

function Detail() {
 const movies = useSelector(state => state.movie.movies);
 const [movie , setMovie] = useState(null);
 const {id} = useParams();


   useEffect(()=>{  
  //   movies.map((particularMovie) => {
  //     if(id == particularMovie.id){
  //       setMovie(particularMovie);
  //     }
  //   }); this can not be done cause after reload on the detail page data in the redux
  //gets vanished so there will be no movies and hence no movie will found
  //Solution:
  //1.Either set movies in redux again 
  //2.Get data of particular movie direct from db
db.collection("movies")
.doc(id)
.get()
.then((doc)=>{
  if(doc.exists)
  setMovie(doc.data());
  else console.log('No such it');
})
  },[id]);

console.log(movie);

  return (
    <Container>
    { movie && <>
      <Background>
        <img src={movie.backgroundImg} /> 
      </Background>
      <ImageTitle>
        <img src={movie.titleImg} />
      </ImageTitle>
      <Controls>
        <PlayButton>
        <img src="\images\play-icon-black.png"/>
        <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="\images\play-icon-white.png"/>
        <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupButton>
        <img src="\images\group-icon.png"/>
        </GroupButton>
      </Controls>
      <SubTitle>
      {movie.subTitle}
      </SubTitle>
      <Description>
      {movie.description}
      </Description>
    </>
    }
      
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 50px calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-widht: 200px;
  img {
    height: 100%;
    widht: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
display:flex;
align-items:center;
`
const PlayButton = styled.div`
display:flex;
align-items:center;
height:56px;
font-size:15px;
margin-right:22px;
letter-spacing:1.8px;
color:black;
background-color:rgb(249,249,249);
padding:0px 24px;
border:none;
border-radius:4px;
cursor:pointer;
    &:hover{
        background-color:rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
background-color:rgba(0,0,0,0.3);
color:white;
border:1px solid rgb(249,249,249);
`
const AddButton = styled.button`
    height:44px;
    width:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    cursor:pointer;
    background-color:rgba(0,0,0,0.3);
    margin-right:22px;
span{
    font-size:40px;
    color:white;
}   
    &:hover{
        background-color:rgba(0,0,0,0.1);
    }
`
const GroupButton = styled(AddButton)`
`
const SubTitle = styled.div`
font-size:15px;
color:rgb(249,249,249);
margin-top:26px;
min-heigh:20px;
`
const Description = styled.div`
font-size:20px;
color:rgb(249,249,249);
min-heigh:20px;
margin-top:16px;
line-height:1.4;
width:70%;
`