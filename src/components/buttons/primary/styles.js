import { StyleSheet } from 'react-native';
import { height, width } from '../../../utills/Dimension';
import AppColors from '../../../utills/AppColors';
import AppFonts from '../../../utills/AppFonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(3),
    backgroundColor: AppColors.darkOrange,
    width: width(70),
    alignSelf: 'center',
    paddingVertical: height(1.8),
  },
  text: {
    color: AppColors.white,
    fontSize: width(3.5),
    fontFamily: AppFonts.segoe_ui_bold
  },
  transparent:
  {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: width(0.25),
  },

});
export default styles;
