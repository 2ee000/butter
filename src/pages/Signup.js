import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { ReactComponent as Xbox } from 'assets/x.svg';

const SignupApp = styled.div`
width: 728px;
height: 754px;
position: relative;
display: flex;
flex-flow: column nowrap;
background-color: rgba(45, 45, 45, 1);
z-index: 3;
`;

const SignupTitle = styled.p`
width: 162px;
height: 49px;
top: 19px;
left: 283px;
position: absolute;

font-size: 40px;
font-weight: 700;
line-height: 48px;
letter-spacing: 0em;
text-align: center;
`;

const SignupX = styled(Xbox)`
width: 18.24px;
height: 17.68px;
top: 22.33px;
left: 682.84px;
position: absolute;
cursor: pointer;
`;

const SignupTextBox = styled.div`
top: 136px;
left: 46px;
position: absolute;
display: flex;
flex-flow: column nowrap;
gap: 53px;
`;

const SignupText = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: rgba(255, 255, 255, 1);
`;

const SignupInputBox = styled.div`
top: 114px;
left: 255px;
position: absolute;

display: flex;
flex-flow: column nowrap;
gap: 12px;
`;

const SignupInput = styled.input`
width: 372px;
height: 71px;
border-radius: 10px;
padding: 0 10px;
background-color: rgba(255, 255, 255, 1);

font-size: 20px;
font-weight: 500;
line-height: 33px;
letter-spacing: 0em;
color: #000000;

&::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

const JoinUsButton = styled.button`
width: 150px;
height: 50px;
top: 665px;
left: 289px;
position: absolute;
border-radius: 10px;
background-color: rgba(116, 119, 140, 1);

font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: center;
`;

const Signup = (props) => {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const [ReEnter, setReEnter] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const handleId = async (e) => {
    await setId(e.target.value);
  }
  const handlePassword = async (e) => {
    await setPassword(e.target.value);
  }
  const handleReEnter = async (e) => {
    await setReEnter(e.target.value);
  }
  const handleName = async (e) => {
    await setName(e.target.value);
  }
  const handleEmail = async (e) => {
    await setEmail(e.target.value);
  }
  const handleMobile = async (e) => {
    await setMobile(e.target.value);
  }
  const onClickJoinUs = async () => {
    await axios.post('https://assignment.dev.buttercorp.kr/api/v1/assignment/sign-up', {
      userId:	Id,
      password: Password,
      userName: Name,
      email: Email,
      mobile:	Mobile
    })
    .then((response) => {
      props.setSignupModal('none');
      console.log(response);
    }) .catch((error) => {
      console.log(error);
    })
  }

  return(
    <SignupApp>
      <SignupTitle>Sign up</SignupTitle>
      <SignupX onClick={() => props.setSignupModal('none')}/>
      <SignupTextBox>
        <SignupText>ID</SignupText>
        <SignupText>Password</SignupText>
        <SignupText>Re-Enter</SignupText>
        <SignupText>Name</SignupText>
        <SignupText>E-mail</SignupText>
        <SignupText>Moblie</SignupText>
      </SignupTextBox>
      <SignupInputBox>
        <SignupInput type='text'  onChange={handleId} value={Id} placeholder=''/>
        <SignupInput type='password' onChange={handlePassword} value={Password} placeholder=''/>
        <SignupInput type='password' onChange={handleReEnter} value={ReEnter} placeholder=''/>
        <SignupInput type='text' onChange={handleName} value={Name} placeholder=''/>
        <SignupInput type='email' onChange={handleEmail} value={Email} placeholder=''/>
        <SignupInput type='number' onChange={handleMobile} value={Mobile} placeholder=''/>
      </SignupInputBox>
      <JoinUsButton onClick={onClickJoinUs}>Join Us</JoinUsButton>
    </SignupApp>
  );
}

export default Signup;