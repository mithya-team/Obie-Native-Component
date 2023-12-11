import React, {PropsWithChildren, forwardRef} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {
  TTypographyColor,
  TTypographyFontWeight,
  TTypographyVariant,
} from './@types';

export interface TypographyProps {
  variant?: TTypographyVariant;
  weight?: TTypographyFontWeight;
  color?: TTypographyColor;
}

const Typography = forwardRef<Text, PropsWithChildren<TypographyProps>>(
  ({variant = 'body1', color = 'primary', children, ...props}, ref) => (
    <Text
      {...props}
      ref={ref}
      style={getTypoStyle(variant, color, props.weight)}>
      {children}
    </Text>
  ),
);

const getTypoStyle = (
  variant: TTypographyVariant,
  color: TTypographyColor,
  weight?: TTypographyFontWeight,
): StyleProp<TextStyle> => {
  const baseStyle = {...styles[variant], color: colors[color]};

  const textStyle = weight
    ? {...baseStyle, fontWeight: fontWeights[weight]}
    : baseStyle;

  return textStyle;
};

Typography.displayName = 'Typography';

export default Typography;

const colors: Record<TTypographyColor, TextStyle['color']> = {
  primary: '#0B355B',
  secondary: '#000000',
  tertiary: '#6BB7BA',
};

const fontWeights: Record<TTypographyFontWeight, TextStyle['fontWeight']> = {
  regular: '400',
  medium: '500',
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 56,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 58,
    letterSpacing: -1.12,
  },
  h2: {
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 46,
  },
  h3: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
  },
  h4: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
  },
  h5: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  subtitle1: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
});

// colors
// color: #0B355B;
// color: #6BB7BA;
