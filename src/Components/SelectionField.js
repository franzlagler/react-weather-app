/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fieldsetStyle = css`
  display: flex;
  width: 300px;
  margin: 20px auto;
  padding: 0;
  border: 0;

  input {
    display: inline-block;
    appearance: none;
    width: 150px;
    height: 50px;
    margin: 0;
    padding: 0;
  }
`;

const legendStyle = css`
  margin: 10px 0 7px 5px;
  font-size: 22px;
  font-weight: bolder;
`;

const selectionContainerStyle = css`
  position: relative;
  width: 150px;
`;

const labelStyle = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  letter-spacing: 2px;
`;

const celsiusFieldStyle = css`
  border: 2px solid #212529;
  border-radius: 15px 0 0 15px;
  &:checked {
    background-color: #ffd500;
  }
`;

const fahrenheitFieldStyle = css`
  border: 2px solid #212529;
  border-left: 0;
  border-radius: 0 15px 15px 0;
  &:checked {
    background-color: #ffd500;
  }
`;
function SelectionField(props) {
  return (
    <fieldset css={fieldsetStyle}>
      <legend css={legendStyle}>Unit</legend>
      <div css={selectionContainerStyle}>
        <label htmlFor="celsius" css={labelStyle}>
          °C
        </label>
        <input
          type="radio"
          id="celsius"
          name="unit"
          css={celsiusFieldStyle}
          onChange={props.handleUnitChange}
        />
      </div>
      <div css={selectionContainerStyle}>
        <label htmlFor="fahrenheit" css={labelStyle}>
          °F
        </label>
        <input
          type="radio"
          id="fahrenheit"
          name="unit"
          css={fahrenheitFieldStyle}
          onChange={props.handleUnitChange}
        />
      </div>
    </fieldset>
  );
}

export default SelectionField;
