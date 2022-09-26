import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { signOutAction } from '../../app/actions/signOutAction';
import { DrawerProps } from '../../types/mainTypes';
export const useSignOut = ({ navigation }: DrawerProps) => {
  const dispatch = useAppDispatch();
  const { signedInUser, isSigningOut } = useAppSelector(state => state.auth);

  useEffect(() => {
    if (!signedInUser) {
      navigation.jumpTo('SignIn');
      // TODO: FIX this bug
    }
  }, [signedInUser]);

  useEffect(() => {
    dispatch(signOutAction());
  }, []);

  return { isSigningOut };
};
