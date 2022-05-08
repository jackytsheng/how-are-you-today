import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BackBtn from '../BackBtn/BackBtn';
import { BrowserView, isMobile } from 'react-device-detect';

const TextWrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  font-family: 'ZCOOL KuaiLe', cursive !important;
`;

const Text = styled.span`
  font-family: 'ZCOOL KuaiLe', cursive !important;
`;

const MoveWrapper = styled.div`
  position: fixed;
  top: ${(prop) => prop.top}px;
  left: ${(prop) => prop.left}px;
`;

const NormalMoveWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 10px;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? 200 : 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

const ClickBox = () => {
  const [boxPos, setBoxPos] = useState({ top: 100, left: 150 });
  const [openMiss, setOpenMissModal] = useState(false);
  const [openLie, setOpenLieModal] = useState(false);

  const getRandom = (number) => Math.floor(Math.random() * number);

  const randomPos = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setBoxPos({ top: getRandom(height - 100), left: getRandom(width - 100) });
  };

  const openMissModal = () => setOpenMissModal(true);
  const handleCloseMiss = () => setOpenMissModal(false);
  const openLieModal = () => setOpenLieModal(true);
  const handleCloseLie = () => setOpenLieModal(false);

  return (
    <div>
      <TextWrapper>
        <Typography variant='h2'>
          <Text>想我了吗？</Text>
        </Typography>
      </TextWrapper>
      <MoveWrapper onMouseEnter={randomPos} top={boxPos.top} left={boxPos.left}>
        <Button variant='outlined' onClick={openLieModal}>
          <Text>不想</Text>
        </Button>
      </MoveWrapper>

      <NormalMoveWrapper>
        <Button variant='outlined' onClick={openMissModal}>
          <Text>想</Text>
        </Button>
      </NormalMoveWrapper>

      <Modal open={openMiss} onClose={handleCloseMiss}>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Text>傻瓜！</Text>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <Text>我也想你 ❤️</Text>
          </Typography>
        </Box>
      </Modal>
      <BrowserView>
        <Modal open={openLie} onClose={handleCloseLie}>
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              <Text>你说谎！</Text>
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              <Text>肯定不是真心的！再给你一次机会哦 🎈</Text>
            </Typography>
          </Box>
        </Modal>
      </BrowserView>
      <BackBtn />
    </div>
  );
};

export default ClickBox;
