import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.blueBackground,
    alignItems: 'center'
  },
  logoStyles: {
    height: height(17),
    width: width(34),
    marginVertical: height(4)
  },
  forgotPassContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width(90)
  },
  rememberMeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width(28.5)
  },
  forgotPassword: {
    paddingHorizontal: width(2)
  },
  socialIconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(65),
    marginVertical: height(2)
  }

});
export default styles;
