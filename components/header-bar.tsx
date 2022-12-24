import React from "react";
import { AnimatedBoxProps, AnimatedBox, Bar } from "../atoms";

export const HeaderBar: React.FC<AnimatedBoxProps> = ({ children, ...rest }) => {
  return (
    <AnimatedBox position={"absolute"} top={40} left={0} right={0} {...rest}>
      <Bar
        variant={"headerBar"}
        flexDirection="row"
        alignItems={"center"}
        mx="lg"
        md="md"
        px="sm"
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimatedBox>
  );
};
