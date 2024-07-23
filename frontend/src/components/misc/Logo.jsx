import * as React from "react";
import { Container, Group, Text } from '@mantine/core'; // Assuming you are using Mantine for styling

const SVGComponent = (props) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 1.68 1.68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      width={48}
      height={48}
      fill="white"
      fillOpacity={0.01}
      d="M0 0H1.68V1.68H0V0z"
    />
    <path
      x={6}
      y={14}
      width={36}
      height={26}
      rx={2}
      stroke="#000000"
      strokeWidth={0.14}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M0.28 0.49H1.4A0.07 0.07 0 0 1 1.47 0.56V1.33A0.07 0.07 0 0 1 1.4 1.4H0.28A0.07 0.07 0 0 1 0.21 1.33V0.56A0.07 0.07 0 0 1 0.28 0.49z"
    />
    <path
      d="m0.35 0.49 0.076 -0.21h0.268L0.77 0.49z"
      fill="#2F88FF"
      stroke="#000000"
      strokeWidth={0.14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      cx={29}
      cy={27}
      r={7}
      fill="#2F88FF"
      stroke="#000000"
      strokeWidth={0.14}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.26 0.945A0.245 0.245 0 0 1 1.015 1.19A0.245 0.245 0 0 1 0.77 0.945A0.245 0.245 0 0 1 1.26 0.945z"
    />
    <path
      d="M1.26 0.35v0.14"
      stroke="#000000"
      strokeWidth={0.14}
      strokeLinecap="round"
    />
  </svg>
);

const LogoWithTitle = () => (
  <Group spacing="sm" align="center">
    <SVGComponent />
    <Text>Photopia</Text>
  </Group>
);

export default LogoWithTitle;
