import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/index';

export const signInStyles = StyleSheet.create({
  formWrapper: {
    // borderWidth: 3,
    // borderColor: 'orange',
  },
  formTopPadding: {
    // backgroundColor: 'green',
  },
  form: {
    paddingHorizontal: 32,
    borderRadius: 15,
    paddingBottom: 32,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 72,
    fontWeight: '500',
    textAlign: 'center',
    // borderWidth: 2,
    color: COLORS.textColor2,
  },
  subtitle: {
    fontSize: 20,
    // borderWidth: 2,
    fontWeight: '500',
    marginBottom: 32,
    textAlign: 'center',
    color: COLORS.textColor3,
  },
  textInput: {
    borderWidth: 2,
    borderColor: COLORS.grayColor3,
    backgroundColor: COLORS.whiteColor2,
    borderRadius: 25,
    paddingHorizontal: 25,
    fontSize: 15,
    marginTop: 10,
    width: '100%',
    color: COLORS.textColor2,
  },
  inputWithError: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
    paddingLeft: 25,
    alignSelf: 'flex-start',
  },
  loginWrapper: {
    flex: 1,
    backgroundColor: COLORS.whiteColor1,
  },
  loginBg: {
    position: 'absolute',
    width: '100%',
    // borderWidth: 5,
    // borderColor: 'black',
  },
  buttonGradient: {
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    // borderWidth: 3,
  },
  buttonText: {
    color: COLORS.textColor1,
    fontSize: 15,
    fontWeight: '500',
  },
  authenticatingText: {
    color: COLORS.grayColor1,
  },
  forgotPasswordText: {
    padding: 0,
    fontSize: 14,
    marginTop: 16,
    color: COLORS.grayColor1,
  },
  forgotPassAppbar: {
    // backgroundColor: Colors.purple1,
  },
  forgotPassWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 76,
    paddingTop: 16,
    // backgroundColor: Colors.black1,
  },
  forgotPassLabel: {
    // color: Colors.white2,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
  },
  forgotPassButton: {
    marginHorizontal: 16,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    borderRadius: 8,
  },
  forgotPassButtonText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 35,
  },
});
