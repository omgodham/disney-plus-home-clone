import React from 'react'
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
        <h3>Recommended for You</h3>
            <Content>
            <Wrap>
            <img src="https://imgsrv2.voi.id/ARpOk5R3_7V-1qtoReHYZShPw4xyZdVx6CIU1JEOCwo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzM5OC8yMDIwMTIxNzEyMjQtbWFpbi5jcm9wcGVkXzE2MDgxODI3MjIuanBn.jpg"/>
            </Wrap>
            <Wrap>
            <img src="https://imgsrv2.voi.id/ARpOk5R3_7V-1qtoReHYZShPw4xyZdVx6CIU1JEOCwo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzM5OC8yMDIwMTIxNzEyMjQtbWFpbi5jcm9wcGVkXzE2MDgxODI3MjIuanBn.jpg"/>
            </Wrap>
            <Wrap>
            <img src="https://imgsrv2.voi.id/ARpOk5R3_7V-1qtoReHYZShPw4xyZdVx6CIU1JEOCwo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzM5OC8yMDIwMTIxNzEyMjQtbWFpbi5jcm9wcGVkXzE2MDgxODI3MjIuanBn.jpg"/>
            </Wrap>
            <Wrap>
            <img src="https://imgsrv2.voi.id/ARpOk5R3_7V-1qtoReHYZShPw4xyZdVx6CIU1JEOCwo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzM5OC8yMDIwMTIxNzEyMjQtbWFpbi5jcm9wcGVkXzE2MDgxODI3MjIuanBn.jpg"/>
            </Wrap>
           
            </Content>

        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-template-columns:repeat(4,minmax(0,1fr));
grid-gap:25px;
padding-bottom:100px;
`
const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition:all 250ms linear;
    cursor:pointer;

img{
height:100%;
width:100%;
object-fit:cover;
}

&:hover{
    transform:scale(1.05);
    border:3px solid rgba(249,249,249,1);
    box-shadow:rgb(0 0 0 / 80%) 0px 48px 58px -16px,
    rgb(0 0 0 /72%) 0px 32px 22px -10px;
}

`