import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: block;
  width: ${(props) => (props.link ? 'fit-content' : '200px')};
  margin: ${(props) => (props.link ? '10px 5px' : '40px auto')};
  padding: ${(props) => (props.link ? ' 0' : '10px')};
  border: ${(props) => (props.link ? '0' : '2px solid #212529')};
  background-color: ${(props) => (props.link ? 'inherit' : '#ffd500')};
  border-radius: ${(props) => (props.link ? '0' : '15px')};
  font-size: ${(props) => (props.link ? '15px' : '25px')};
  font-weight: ${(props) => (props.link ? 'bolder' : 'none')};
  text-decoration: ${(props) => (props.link ? 'underline' : 'none')};
  cursor: ${(props) => (props.link ? 'pointer' : 'normal')};
  &:active {
    transform: ${(props) => (props.link ? 'none' : 'scale(0.98)')};
  }
`;

export default Button;
