import { Box, AnimatedBox, AnimatedBoxProps } from "../atoms";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { Dimensions } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
/**
 * 
  children: The content to be displayed inside the swipeable view. This prop is required.
  
  backView: An optional prop that can be used to specify a view that should be displayed behind the main content of the swipeable view. This prop can be either a React node or a function component that takes a BackViewProps object as its argument.
  
  onSwipeLeft: An optional callback function that is called when the view is swiped left beyond a certain threshold. The callback function is passed a conceal function that can be used to hide the back view.
  
  revealed: An optional boolean prop that determines whether the back view is revealed or not. If this prop is set to true, the back view will be revealed by default.
 */

type SwipeLeftCallback = () => any;
type SwipeRightCallback = () => any;

export interface BackViewProps {
  progress: Readonly<SharedValue<number>>;
}

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers">, AnimatedBoxProps {
  children: React.ReactNode;
  backView?: React.ReactNode | React.FC<BackViewProps>;
  onSwipeLeft?: (conceal: SwipeLeftCallback) => any;
  onSwipeRight?: (conceal: SwipeRightCallback) => any;
  revealed?: boolean;
}

interface SwipeableViewHandle {
  conceal: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THREASHOLD = -0.2;

export const SwipeableView = forwardRef<SwipeableViewHandle, Props>((props, ref) => {
  const { children, backView, onSwipeLeft, onSwipeRight, simultaneousHandlers, ...boxProps } =
    props;
  const translateX = useSharedValue(0);

  const invokeSwipeLeft = useCallback(() => {
    if (onSwipeLeft) {
      onSwipeLeft(() => {
        translateX.value = withTiming(0);
      });
    }
  }, [onSwipeLeft]);
  const invokeSwipeRight = useCallback(() => {
    if (onSwipeRight) {
      onSwipeRight(() => {
        translateX.value = withTiming(0);
      });
    }
  }, [onSwipeRight]);

  //problematic

  // const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
  //   onActive: (event) => {
  //     const x = interpolate(event.translationX, [-SCREEN_WIDTH, 0], [-1, 1]);
  //     translateX.value = Math.max(-1, Math.min(1, x));
  //   },
  //   onEnd: () => {
  //     const shouldBeDismissed = Math.abs(translateX.value) > SWIPE_THREASHOLD;
  //     if (shouldBeDismissed) {
  //       if (translateX.value < 0) {
  //         translateX.value = withTiming(-1);
  //         runOnJS(invokeSwipeLeft)();
  //       } else {
  //         translateX.value = withTiming(1);
  //         runOnJS(invokeSwipeRight)();
  //       }
  //     } else {
  //       translateX.value = withTiming(0);
  //     }
  //   },
  // });

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      const x = interpolate(event.translationX, [-SCREEN_WIDTH, 0], [-1, 0]);
      translateX.value = Math.max(-1, Math.min(0, x));
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THREASHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-1);
        runOnJS(invokeSwipeLeft)();
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  // problematic
  // const facadeStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       translateX: interpolate(translateX.value, [-1, 1], [-SCREEN_WIDTH, SCREEN_WIDTH]),
  //     },
  //   ],
  // }));

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(translateX.value, [-1, 0], [-SCREEN_WIDTH, 0]),
      },
    ],
  }));

  const progress = useDerivedValue(() => {
    return interpolate(Math.max(translateX.value, SWIPE_THREASHOLD), [-0.2, 0], [1, 0]);
  });

  useImperativeHandle(ref, () => ({
    conceal: () => {
      translateX.value = withTiming(0);
    },
  }));

  return (
    <AnimatedBox {...boxProps}>
      {backView && (
        <Box position="absolute" left={0} right={0} top={0} bottom={0}>
          {typeof backView === "function" ? backView({ progress }) : backView}
        </Box>
      )}
      <PanGestureHandler
        activeOffsetX={[-5, 1000]}
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <AnimatedBox style={facadeStyle}>{children}</AnimatedBox>
      </PanGestureHandler>
    </AnimatedBox>
  );
});
