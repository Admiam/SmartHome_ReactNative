import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function DarkLandscape(props) {
  return (
    <Svg
      width={390}
      height={390}
      viewBox="0 0 390 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M0 0h390v390H0V0z" fill="url(#paint0_linear_159_642)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_159_642"
          x1={195}
          y1={0}
          x2={195}
          y2={390}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#352968" />
          <Stop offset={0.67607} stopColor="#A4E5F4" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default DarkLandscape;
