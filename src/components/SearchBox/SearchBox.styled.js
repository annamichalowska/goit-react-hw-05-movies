import styled from 'styled-components';
//import { HiSearch } from 'react-icons/hi';

export const Form = styled.div`
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
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  color: black;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: orangered;
    color: white;
  }
`;
