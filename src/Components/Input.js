/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputContainer = css`
  margin: 0 auto;
`;
const label = css`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bolder;
`;

const input = css`
  width: 300px;
  height: 30px;
  padding: 10px;
  border: 2px solid #212529;
  border-radius: 5px;
  font-size: 25px;
`;
function Input(props) {
  return (
    <div css={inputContainer}>
      <label css={label}>City</label>
      <input
        onChange={props.handleInputChange}
        value={props.city}
        css={input}
      />
    </div>
  );
}

export default Input;
