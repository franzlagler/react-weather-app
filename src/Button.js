/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const button = css`
  width: 200px;
  margin: 20px 0;
  padding: 10px;
  background-color: #212529;
  border: 0;
  border-radius: 5px;
  color: #f8f9fa;
  font-size: 20px;
`;

function Button(props) {
  return (
    <button css={button} onClick={props.handleSubmitClick}>
      Submit
    </button>
  );
}

export default Button;
