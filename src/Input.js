/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Input(props) {
  return (
    <div>
      <label>City</label>
      <input onChange={props.handleInputChange} value={props.value} />
    </div>
  );
}

export default Input;
