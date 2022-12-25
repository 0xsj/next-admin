import React from "react";
import { Pressable, PressableProps } from "./pressable";
import { Platform } from "react-native";
import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BorderProps,
  OpacityProps,
  backgroundColor,
  backgroundColorShorthand,
  border,
  opacity,
  composeRestyleFunctions,
  ResponsiveValue,
  useRestyle,
  useTheme,
  useResponsiveProp,
} from "@shopify/restyle";
import { Theme } from "theme";

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity,
]);

interface Props extends PressableProps {
  pressed?: RestyleProps;
  rippleColor?: ResponsiveValue<keyof Theme["colors"], Theme>;
  rippleBorderless?: boolean;
}

export const Touchable = ({ pressed, rippleColor, rippleBorderless, style, ...rest }: Props) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined };
  const theme = useTheme<Theme>();
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor);
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp];

  return (
    <Pressable
      {...rest}
      android_ripple={{ color: rippleColorValue, borderless: rippleBorderless }}
      // @ts-ignore
      style={({ pressed: isPressed }) => (isPressed ? [style, pressedStyle] : style)}
    />
  );
};

export const TouchableOpacity: React.FC<Props> = (props) => (
  <Touchable
    rippleColor="$foreground"
    {...props}
    pressed={{ opacity: Platform.select({ ios: 0.6 }) }}
  />
);
