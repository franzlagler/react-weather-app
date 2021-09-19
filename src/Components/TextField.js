/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputContainer = css`
  display: grid;
  justify-content: center;
`;
const label = css`
  display: block;
  margin: 20px auto 7px 5px;
  font-size: 22px;
  font-weight: bolder;
`;

const input = css`
  width: 300px;
  padding: 10px;
  border: 2px solid #212529;
  border-radius: 15px;
  font-size: 25px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 4px #ffd500;
  }
`;
function TextField(props) {
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

export default TextField;
