import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './Constant';

const Btn = styled.button`
  font-family: 'ZCOOL KuaiLe', cursive !important;
  padding: 20px 40px;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  color: #383838;
  cursor: pointer;
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid #000;
    transition: transform 0.2s;
  }
  &:after {
    transform: translate(3px, 3px);
  }
  &:before {
    transform: translate(-3px, -3px);
  }
  &:hover {
    &:after,
    &:before {
      transform: translate(0);
    }
  }
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-family: 'Fredericka the Great', cursive;
`;
const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 100px;
  color: #383838;

  @media screen and (max-width: 450px) {
    padding: 5px 25px;
  }

  h2 {
    margin: 5px 0 3px;
    font-weight: 400;
  }
  button {
    margin-bottom: 15px;
  }
`;

const Menu = () => {
  const baseUrl = BASE_URL;
  return (
    <BtnGroup>
      <BtnSet
        btnText='我们看过的电影'
        url='https://jackytsheng.notion.site/2923c8f90e194d8da37c55fb793eb60e?v=007396d3062d4f048d687c5fdb58a003'
      />
      <h2>往日惊喜：</h2>
      <BtnSet
        date='26 April 2022'
        btnText='你想我吗?'
        to={`${baseUrl}doyoumissme`}
      />
      <BtnSet date='29 April 2022' btnText='辛苦啦！' to={`${baseUrl}heart`} />
    </BtnGroup>
  );
};

const BtnSet = ({ date = '', btnText, to = '', url = '' }) => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  console.log(redirect);
  return (
    <>
      {date && <Text>{date}</Text>}
      <Btn
        onClick={() => {
          if (url) {
            window.location.href = url;
          } else {
            navigate(to);
          }
        }}
      >
        {btnText}
      </Btn>
    </>
  );
};

export default Menu;
