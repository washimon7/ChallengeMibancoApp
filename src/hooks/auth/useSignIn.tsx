import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signInAction } from '../../app/actions/signInAction';
import { UserForm } from '../../types';
import { useEffect, useState } from 'react';
import { DrawerProps } from '../../types/mainTypes';
import { signedInSuccessfully } from '../../app/reducers/auth/authSlice';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { validateForm } from '../../utils/validateForm';

const initialState: UserForm = {
  username: '',
  password: '',
};

export const useSignIn = ({ navigation }: DrawerProps) => {
  const dispatch = useAppDispatch();
  const { isSigningIn, justSignedIn } = useAppSelector(state => state.auth);
  const [user, setUser] = useState<UserForm>(initialState);
  const [formErrors, setFormErrors] = useState<UserForm>(initialState);

  useEffect(() => {
    if (justSignedIn) {
      navigation.jumpTo('Transferencia');
      dispatch(signedInSuccessfully(false));
    }
  }, [justSignedIn]);

  const handleUsernameChange = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = nativeEvent.text;
    setUser(prevState => ({
      ...prevState,
      username: text,
    }));
  };

  const handlePasswordChange = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = nativeEvent.text;
    setUser(prevState => ({
      ...prevState,
      password: text,
    }));
  };

  const doSignIn = () => {
    const errors = validateForm(user);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    dispatch(signInAction(user));
  };

  return {
    isSigningIn,
    user,
    formErrors,
    doSignIn,
    handlePasswordChange,
    handleUsernameChange,
  };
};
