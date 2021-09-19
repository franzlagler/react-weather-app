/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import sun from '../../public/sun.svg';

const moveImage = keyframes`
0%{
  transform: rotate(0deg);
}

25%{
  transform: rotate(90deg);
}

50% {
  transform: rotate(180deg);
}

75% {
  transform: rotate(90deg);

}

100%{
  transform: rotate(0deg);
}

`;

const headingContainerStyle = css`
  display: flex;
  align-items: center;
  margin: 0px auto;
`;

const heading = css`
  position: relative;
  font-size: 60px;
  font-weight: normal;
  text-align: center;
`;

const image = css`
  width: 80px;
  margin-right: 20px;
  animation: ${moveImage} 10s ease infinite;
`;

function HeadingContainer() {
  return (
    <div css={headingContainerStyle}>
      <img src={sun} alt="Sun" css={image} />
      <h1 css={heading}>Weather App</h1>
    </div>
  );
}
export default HeadingContainer;
