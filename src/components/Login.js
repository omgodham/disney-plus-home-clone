import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
          <Content>
            <LogoOne src="\images\cta-logo-one.svg"/>
            <Button>GET ALL THERE</Button>
            <Description>
          This is the description This is the description This is the description This is the description This is the description This is the description This is the description 
          </Description>
          <LogoTwo src="\images\cta-logo-two.png"/>
          </Content>
          
        </Container>
    )
}

export default Login

const Container = styled.div`
position:relative;
min-height: calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;
    &:before {
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:url("/images/login-background.jpg");
        z-index:-1;
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        opacity:0.7;
    }

`
const Content = styled.div`
display:flex;
flex-direction:column;
width:650px;
`
const LogoOne = styled.img`
padding:0 60px;
`
const Button = styled.a`
background-color:#0063e5;
text-align:center;
padding:12px 0;
font-size:18px;
font-weight:500;
margin-top:12px;
margin-bottom:10px;
cursor:pointer;
letter-spacing:1.5px;
&:hover{
    background-color:#0483ee;
}
`
const Description = styled.p`
text-align:center;
line-height:1.4;
letter-spacing:1.4px;

`
const LogoTwo = styled.img`
padding:0 50px;
`