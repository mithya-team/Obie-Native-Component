import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import TypographyComponent from '../../Components/Typography';
import {TTypographyVariant} from '../../Components/Typography/@types';

const Typography: FC = () => {
  const typographyVariants: TTypographyVariant[] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'body1',
    'body2',
    'subtitle1',
  ];
  return (
    <View style={styles.root}>
      {typographyVariants.map((variant, index) => (
        <TypographyComponent key={index} variant={variant}>
          {variant} - Lorem
        </TypographyComponent>
      ))}
    </View>
  );
};

export default Typography;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    padding: 20,
  },
});
