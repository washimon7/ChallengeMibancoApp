import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { signInStyles } from './signInStyles';
import { useSignIn } from '../../../hooks/auth/useSignIn';
import { DrawerProps } from '../../../types/mainTypes';
import { COLORS } from '../../../constants/index';
import { TouchableHighlight } from 'react-native';

export const SignInScreen = (props: DrawerProps) => {
  const {
    isSigningIn,
    formErrors,
    doSignIn,
    handleUsernameChange,
    handlePasswordChange,
  } = useSignIn(props);

  return (
    <View style={signInStyles.loginWrapper}>
      <ScrollView style={signInStyles.formWrapper}>
        <View style={{ paddingTop: 200 }} />
        <View style={signInStyles.form}>
          <Text style={signInStyles.title}>Hola</Text>
          <Text style={signInStyles.subtitle}>Inicia sesión en tu cuenta</Text>
          <TextInput
            onChange={handleUsernameChange}
            // value={user.username}
            style={
              formErrors.username
                ? { ...signInStyles.textInput, ...signInStyles.inputWithError }
                : signInStyles.textInput
            }
            placeholderTextColor={COLORS.grayColor2}
            placeholder="Usuario o email"
            selectionColor={COLORS.primaryColor}
            keyboardType="email-address"
          />
          {formErrors.username && (
            <Text style={signInStyles.errorText}>{formErrors.username}</Text>
          )}
          <TextInput
            onChange={handlePasswordChange}
            // value={user.password}
            style={
              formErrors.password
                ? { ...signInStyles.textInput, ...signInStyles.inputWithError }
                : signInStyles.textInput
            }
            placeholderTextColor={COLORS.grayColor2}
            selectionColor={COLORS.primaryColor}
            placeholder="Contraseña"
            secureTextEntry={true}
          />
          {formErrors.password && (
            <Text style={signInStyles.errorText}>{formErrors.password}</Text>
          )}
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.grayColor2,
                fontWeight: '500',
                marginTop: 32,
              }}
            >
              ¿No tienes una cuenta?
            </Text>
          </TouchableOpacity>
          <TouchableHighlight
            onPress={doSignIn}
            style={{
              display: 'flex',
              flex: 1,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 8,
              backgroundColor: COLORS.accentColor,
              marginVertical: 32,
            }}
            underlayColor={COLORS.accentMonoColor}
            disabled={isSigningIn}
          >
            <Text
              style={{
                color: COLORS.textColor1,
                fontSize: 15,
                marginLeft: 8,
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              {isSigningIn ? 'Iniciando sesión..' : 'Iniciar sesión'}
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};
