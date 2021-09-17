/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const label = css`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bolder;
`;

const input = css`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 2px solid #212529;
  border-radius: 5px;

  font-size: 20px;
`;
function Input(props) {
  return (
    <div>
      <label css={label}>City</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        css={input}
      />
    </div>
  );
}

export default Input;
