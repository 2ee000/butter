import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { ReactComponent as Xbox } from 'assets/x.svg';

const LoginApp = styled.div`
width: 659px;
height: 378px;
position: relative;
display: flex;
flex-flow: column nowrap;
background-color: rgba(45, 45, 45, 1);
z-index: 3;
`;

const LoginTitle = styled.p`
width: 125px;
height: 49px;
top: 19px;
left: 268px;
position: absolute;

font-size: 40px;
font-weight: 700;
line-height: 48px;
letter-spacing: 0em;
text-align: center;
`;

const LoginX = styled(Xbox)`
width: 18.24px;
height: 17.68px;
top: 10px;
left: 623px;
position: absolute;
cursor: pointer;
`;

const LoginInputBox = styled.div`
top: 97px;
left: 100px;
position: absolute;

display: flex;
flex-flow: column nowrap;
gap: 12px;
`;

const LoginInput = styled.input`
width: 458px;
height: 71px;
border-radius: 10px;
padding: 0 10px;
background-color: rgba(255, 255, 255, 1);

font-size: 20px;
font-weight: 500;
line-height: 33px;
letter-spacing: 0em;
color: #000000;
`;

const LoginTextBox = styled.div`
top: 279px;
left: 186px;
position: absolute;

display: flex;
flex-flow: row nowrap;
`;

const LoginText = styled.p`
width: 108px;
height: 35px;
cursor: pointer;

font-size: 28px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0em;
text-align: center;
color: rgba(255, 255, 255, 1);
`;

const LoginBar = styled.p`
border: 1px solid rgba(153, 153, 153, 1);
margin-left: 35px;
margin-right: 20px;
`;

const LoginTextGray = styled(LoginText)`
width: 123px;
color: rgba(153, 153, 153, 1);
`;

const Login = (props) => {

  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const handleId = async (event) => {
    await setId(event.target.value);
  }
  const handlePassword = async (event) => {
    await setPassword(event.target.value);
  }

  const onClickLogin = async () => {
    if(Id === ''|| Password === '') {
      window.alert('Please enter ID and password!');
    } else {
      await axios.post('https://assignment.dev.buttercorp.kr/api/v1/assignment/sign-in', {
        id: Id,
        password: Password
      })
      .then((response) => {
        console.log(response);
        props.setLoginModal('none');
      }) .catch((error) => {
        console.log(error);
        window.alert('Please check ID and password!');
      })
    }
  }
  
  return(
    <LoginApp>
      <LoginTitle>Login</LoginTitle>
      <LoginX onClick={() => {props.setLoginModal('none');}}/>
      <LoginInputBox>
        <LoginInput type='text' onChange={handleId} value={Id} placeholder={'ID'}/>
        <LoginInput type='password' onChange={handlePassword} value={Password} placeholder={'Password'}/>
      </LoginInputBox>
      <LoginTextBox>
        <LoginText onClick={() => {props.setSignupModal('grid'); props.setLoginModal('none');}}>Sign in</LoginText>
        <LoginBar/>
        <LoginTextGray onClick={onClickLogin}>Sign up</LoginTextGray>
      </LoginTextBox>
    </LoginApp>
  );
}

export default Login;