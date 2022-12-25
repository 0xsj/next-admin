import { Box, Text } from ".";
import { BoxProps } from "@shopify/restyle";
import { Theme } from "theme";

type Props = BoxProps<Theme> & {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Box backgroundColor={"$background"} flex={1} {...props}>
      {children}
    </Box>
  );
};
