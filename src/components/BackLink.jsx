import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: grey;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
  :hover {
    background-color: orangered;
    color: black;
  }
`;

export const BackLink = ({ children }) => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return <StyledLink onClick={onGoBack}>{children}</StyledLink>;
};

BackLink.ropTypes = {
  onGoBack: PropTypes.func,
  children: PropTypes.string,
};
