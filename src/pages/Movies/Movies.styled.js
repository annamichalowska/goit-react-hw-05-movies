import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Button = styled.button`
  background-color: grey;
  border-radius: 4px;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: orangered;
    color: black;
  }
`;
