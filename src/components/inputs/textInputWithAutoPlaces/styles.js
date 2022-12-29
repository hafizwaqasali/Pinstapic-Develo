import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import AppFonts from "~utills/AppFonts";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(2),
  },
  iconStyle: {
    width: width(8),
    alignItems: "flex-end",
  },
  textInputView: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    fontFamily: AppFonts.segoe_ui_medium,
    fontSize: width(3.8),
    color: AppColors.white,
    left: width(5),
    height: height(5),
  },
  textInputMap: {
    color: AppColors.white,
    width: width(65),
    height: height(5),
  },
});
export default styles;
