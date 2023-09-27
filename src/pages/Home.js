import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import axios from 'axios';

import Login from './Login';
import Signup from './Signup';

import Image1  from 'assets/image 1.png';
import Image2  from 'assets/image 2.png';
import Image3  from 'assets/image 3.png';
import Image4  from 'assets/image 4.png';
import Image5  from 'assets/image 5.png';

import { ReactComponent as MenuBar } from 'assets/menu_bar.svg';

import { ReactComponent as TextImg } from 'assets/text.svg';

const Home = () => {
  const [LoginModal, setLoginModal] = useState('none');
  const [SignupModal, setSignupModal] = useState('none');

  const [Background, setBackground] = useState(Image1);

  const Gray = 'rgba(225, 225, 225, 1)';

  useEffect(()=> {
    var count = 0;
    const ChangeBackground = setInterval(() => {
      if(count % 4 == 3){
        setBackground(Image1);
      } else if(count % 4 == 0){
        setBackground(Image2);
      }  else if(count % 4 == 1){
        setBackground(Image3);
      }  else if(count % 4 == 2){
        setBackground(Image4);
      }
      for(var i = 0; i < 4; i++) {
        if(count % 4 == i) {
          ButtonColor[i] = 'rgba(255, 255, 255, 1);';
          setButtonColor([...ButtonColor]);
        } else {
          ButtonColor[i] = 'rgba(114, 114, 114, 1);';
          setButtonColor([...ButtonColor]);
        }
      }
      count++; 
    }, 3000);
    return () => clearInterval(ChangeBackground);
  },[]);

  const App = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  `;

  const LoginBackground = styled.div`
  width: 100%;
  height: 100%;
  display: ${LoginModal};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  `;

  const SignupBackground = styled(LoginBackground)`
  display: ${SignupModal};
  `;


  const Page1 = styled.div`
  width: 1920px;
  height: 1056px;
  display: flex;
  flex-flow: column nowrap;
  background-image: url('${Background}');
  `;

  const Opacity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background: rgba(0, 0, 0, 0.4);  
  `;

  const Reservation = styled.p`
  width: 214px;
  height: 46px;
  top: 60px;
  left: 41px;
  position: absolute;
  border-bottom: 1px solid ${Gray};
  cursor: pointer;
  
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Gray};
  `;

  const Logo = styled.p`
  top: 44px;
  left: 806px;
  position: absolute;
  font-size: 72px;
  font-weight: 700;
  line-height: 86px;
  letter-spacing: 0.08em;
  text-align: center;
  `;

  const Menu = styled(MenuBar)`
  width: 54px;
  height: 37px;
  top: 66px;
  left: 1821px;
  position: absolute;
  cursor: pointer;
  `;

  const Text = styled.p`
  top: 624.94px;
  left: 464.56px;
  position: absolute;
  transform: rotate(-8deg);
  font-family: Victorian;
  font-size: 135px;
  font-weight: 400;
  line-height: 245px;
  letter-spacing: 0.08em;
  text-align: center;
  `;

  const TextSample = styled(TextImg)`
  width: 967px;
  height: 245px;
  top: 624.94px;
  left: 464.56px;
  position: absolute;
  `;

  const Slider = styled.div`
  width: 346px;
  height: 10px;
  top: 997px;
  left: 787px;
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  gap: 35px;
  `;

  const [ButtonColor, setButtonColor] = useState([
    'rgba(114, 114, 114, 1);',
    'rgba(114, 114, 114, 1);',
    'rgba(114, 114, 114, 1);',
    'rgba(255, 255, 255, 1);'
  ]);
  const Button = styled.div`
  width: 60px;
  height: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  `;

  const Page2 = styled.div`
  width: 1920px;
  height: 1056px;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(35, 39, 48, 1);
  `;

  const [IntroBtn, setIntroBtn] = useState([
    'color: rgba(111, 115, 124, 1); border: none;',
    'color: rgba(111, 115, 124, 1); border: none;',
    'color: rgba(111, 115, 124, 1); border: none;',
    'color: rgba(111, 115, 124, 1); border: none;'
  ]);
  const onIntroBtnClick = (event) => {
    for(var i=0; i<4; i++) {
      if(event.target.id == i) {
        if(IntroBtn[i] == 'color: rgba(111, 115, 124, 1); border: none;') {
          IntroBtn[i]='color: rgba(225, 225, 225, 1); border-bottom: 1px solid rgba(225, 225, 225, 1);';
          setIntroBtn([...IntroBtn]);
        } else {
          IntroBtn[i]='color: rgba(111, 115, 124, 1); border: none;';
          setIntroBtn([...IntroBtn]);
        }
        
      } else {
        IntroBtn[i]='color: rgba(111, 115, 124, 1); border: none;';
        setIntroBtn([...IntroBtn]);
      }
    }
  }

  const Intro = styled.p`
  width: ${(props) => props.width};
  height: 46px;
  top: 1206px;
  left: ${(props) => props.left};
  position: absolute;
  cursor: pointer;
  
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  ${(props) => props.color};
  `;

  const BackgroundImg = styled.image`
  width: 1060px;
  height: 623px;
  top: 1394px;
  left: 677px;
  position: absolute;

  background-image: url('${Image5}');
  `;

  const BackgroundTextLarge = styled.p`
  width: 675px;
  height: 238px;
  top: 1426px;
  left: 174px;
  position: absolute;

  font-size: 100px;
  font-weight: 100;
  line-height: 119px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  `;

  const BackgroundTextSmall = styled.p`
  width: 527px;
  height: 66px;
  top: 1694px;
  left: 174px;
  position: absolute;

  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(189, 189, 189, 1);
  `;

  const Github = styled.a`
  width: 136px;
  height: 34px;
  top: 1973px;
  left: 174px;
  position: absolute;

  border-bottom: 1px solid ${Gray};
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(182, 182, 182, 1);
  `;

  return(
    <App>
      <Page1>
        <Opacity>
          <LoginBackground>
            <Login LoginModal = {LoginModal} setLoginModal = {setLoginModal} SignupModal = {SignupModal} setSignupModal = {setSignupModal}/>
          </LoginBackground>
          <SignupBackground>
            <Signup SignupModal = {SignupModal} setSignupModal = {setSignupModal}/>
          </SignupBackground>
          <Reservation onClick={() => setLoginModal('grid')}>RESERVATION</Reservation>
          <Logo>BUTTER</Logo>
          <Menu/>
          <TextSample/>
          <Slider>
            <Button onClick={() => setBackground(Image1)} color={ButtonColor[3]}/>
            <Button onClick={() => setBackground(Image2)} color={ButtonColor[0]}/>
            <Button onClick={() => setBackground(Image3)} color={ButtonColor[1]}/>
            <Button onClick={() => setBackground(Image4)} color={ButtonColor[2]}/>
          </Slider>
        </Opacity>
      </Page1>
      <Page2>
        <Intro id='0' onClick={onIntroBtnClick} width='214px' left='358px' color={IntroBtn[0]}>High-end Car</Intro>
        <Intro id='1' onClick={onIntroBtnClick} width='212px' left='689px' color={IntroBtn[1]}>MAINENANCE</Intro>
        <Intro id='2' onClick={onIntroBtnClick} width='217px' left='1017px' color={IntroBtn[2]}>TUNNING CAR</Intro>
        <Intro id='3' onClick={onIntroBtnClick} width='188px' left='1361px' color={IntroBtn[3]}>BODY PAINT</Intro>
        <BackgroundImg/>
        <BackgroundTextLarge>HIGH-END CAR STORE</BackgroundTextLarge>
        <BackgroundTextSmall>하이엔드 직수입, 구매부터 튜닝까지<br/>
          고객의 요구에 맞춘 최상의 서비스를 제공합니다.</BackgroundTextSmall>
        <Github href='https://github.com/2ee000'>VIEW MORE</Github>
      </Page2>
    </App>
  )
}

export default Home;