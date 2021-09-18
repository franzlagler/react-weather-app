import styled from '@emotion/styled';
import arrow from '../../public/arrow.svg';

const Button = styled.button`
  display: block;
  position: relative;
  width: 200px;
  margin: 20px auto;
  padding: 10px;
  background-color: #212529;
  border: 0;
  border-radius: 5px;
  color: #f8f9fa;
  font-size: 20px;
  &::before {
    content: url(${arrow});
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
  }
`;

export default Button;
