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
      <h2>往日惊喜：</h2>
      <BtnSet
        date='26 April 2022'
        btnText='你想我吗?（用电脑）'
        to={`${baseUrl}doyoumissme`}
      />
      <BtnSet date='29 April 2022' btnText='辛苦啦！' to={`${baseUrl}heart`} />
    </BtnGroup>
  );
};

const BtnSet = ({ date, btnText, to }) => {
  const navigate = useNavigate();
  return (
    <>
      <Text>{date}</Text>
      <Btn onClick={() => navigate(to)}>{btnText}</Btn>
    </>
  );
};

export default Menu;
