import {StyleSheet, Pressable, PressableProps} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';

export interface IButtonProps extends PressableProps {}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  ...pressableProps
}) => {
  return (
    <Pressable style={styles.btnContainer} {...pressableProps}>
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 70,
    backgroundColor: 'skyblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
