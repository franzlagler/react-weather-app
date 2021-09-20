/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputContainerStyle = css`
  display: grid;
  justify-content: center;
`;
const labelStyle = css`
  display: block;
  margin: 20px auto 7px 5px;
  font-size: 22px;
  font-weight: bolder;
`;

const inputStyle = css`
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
    <div css={inputContainerStyle}>
      <label htmlFor={props.id} css={labelStyle}>
        City
      </label>
      <input
        id={props.id}
        onChange={props.handleCityInputChange}
        value={props.city}
        css={inputStyle}
      />
    </div>
  );
}

export default TextField;
