import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.blackBackgroundOpacity};
  border: none;
  color: #fff;
  font-family: ${props => props.theme.defaultFont};
  font-size: 16px;
  padding: 16px 20px;
  opacity: .85;

  &:focus {
    outline: none;
  }
`;

export default Button;
