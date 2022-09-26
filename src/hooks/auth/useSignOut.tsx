import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { signOutAction } from '../../app/actions/signOutAction';
import { DrawerProps } from '../../types/mainTypes';
import { signedOutSuccessfully } from '../../app/reducers/auth/authSlice';
export const useSignOut = ({ navigation }: DrawerProps) => {
  const dispatch = useAppDispatch();
  const { isSigningOut, justSignedOut } = useAppSelector(state => state.auth);

  useEffect(() => {
    if (justSignedOut) {
      navigation.jumpTo('SignIn');
      dispatch(signedOutSuccessfully(false));
    }
  }, [justSignedOut]);

  useEffect(() => {
    dispatch(signOutAction());
  }, []);

  return { isSigningOut };
};
