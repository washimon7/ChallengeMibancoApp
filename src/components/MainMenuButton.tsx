import React from 'react';
import { DrawerProps } from '../types/mainTypes';
import { Button } from 'react-native';

export const MainMenuButton = (props: DrawerProps) => {
  const openMainMenu = () => {
    props.navigation.openDrawer();
  };

  return <Button onPress={openMainMenu} title="Abrir menu" />;
};
