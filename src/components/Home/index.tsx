import React from 'react';
import {
  Box,
  FormGroup,
  Paper,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import useHome from 'hooks/useHome';

function Home() {
  const { handleChange } = useHome();

  return (
    <Wrapper>
      <StyledPaper elevation={3}>
        <Box component="div">
          <Title>Title</Title>
          <FormGroup>
            <FormControl>
              <StyledTextField
                color="primary"
                id="e-mail"
                label="이메일"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl margin="dense">
              <StyledTextField
                color="primary"
                type="password"
                id="password"
                label="비밀번호"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <StyledButton variant="contained" color="primary">
                로그인
              </StyledButton>
            </FormControl>
          </FormGroup>
        </Box>
      </StyledPaper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  max-width: 400px;
  height: 450px;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 35px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
`;

const StyledTextField = styled(TextField)`
  label {
    margin-left: 5px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 45px;
  line-height: 42px;
`;

export default Home;
