import styled from 'styled-components';

export const Items = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: grid;
  grid-gap: 30px;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Image = styled.img`
  border-radius: 5%;
  margin-right: 20px;
  width: 100px;
  height: 150px;
`;
