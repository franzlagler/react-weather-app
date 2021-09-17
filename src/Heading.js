/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const heading = css`
  font-size: 50px;
  text-align: center;
`;
function Heading() {
  return <h1 css={heading}>Weather App</h1>;
}

export default Heading;
