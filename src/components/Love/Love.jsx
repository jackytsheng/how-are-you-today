import React, { useState } from 'react';
import styled from 'styled-components';
import './Love.css';

const Wrapper = styled.div`
  margin: 50px auto;
  width: 250px;
  height: 250px;
  position: relative;
  font-family: 'ZCOOL KuaiLe', cursive !important;
`;
const Text = styled.span`
  margin-top: 10px;
  top: 250px;
  left: 125px;
`;

const Love = () => {
  const [show, setShow] = useState([1]);

  return (
    <Wrapper>
      {show.length >= 1 && (
        <>
          <input type='checkbox' id='ck1' />
          <label for='ck1' onClick={() => show.length === 1 && setShow([1, 1])}>
            点我
          </label>
        </>
      )}

      {show.length >= 2 && (
        <>
          <input type='checkbox' id='ck2' />
          <label
            for='ck2'
            onClick={() => show.length === 2 && setShow([1, 1, 1])}
          >
            嘿！宝宝
          </label>
        </>
      )}
      {show.length >= 3 && (
        <>
          <input type='checkbox' id='ck3' />
          <label for='ck3' onClick={() => setShow([1, 1, 1, 1])}>
            辛苦啦!!
          </label>
        </>
      )}
      {show.length >= 4 && <Text> 我很想你哦！🎈</Text>}
    </Wrapper>
  );
};

export default Love;
