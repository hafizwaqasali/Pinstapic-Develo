import React, { forwardRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CustomText } from "~components/texts";
import AppColors from "~utills/AppColors";
import AppFonts from "~utills/AppFonts";
import { height, width } from "~utills/Dimension";
import styles from "./styles";
const TextInputWithAutoPlaces = (
  {
    title,
    placeholder,
    placeholderTextColor = AppColors.black + "80",
    onChangeText,
    keyboardType = "default",
    Icon,
    containerStyle = {},
    textinputViewStyle = {},
    onIconPress,
    selectionColor = AppColors.darkOrange_30,
    onSubmitEditing,
    returnKeyType,
    onPressIn,
    textValue,
    errorMsg,
    containerWidth = 82,
    onAddress,
  },
  ref
) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPressIn}>
      <View
        style={[
          styles.container,
          { width: width(containerWidth + 8) },
          containerStyle,
        ]}
      >
        <View
          style={[
            styles.textInputView,
            { width: Icon ? width(containerWidth) : width(containerWidth + 8) },
            textinputViewStyle,
          ]}
        >
          <GooglePlacesAutocomplete
            enablePoweredByContainer={false}
            fetchDetails={true}
            suppressDefaultStyles={true}
            listViewDisplayed="auto"
            textInputProps={{
              selectionColor: selectionColor,
              placeholder: placeholder,
              placeholderTextColor: placeholderTextColor,
              value: textValue,
              onChangeText: onChangeText,
              ref: ref,
              onSubmitEditing: onSubmitEditing,
              returnKeyType: returnKeyType,
              keyboardType: keyboardType,
            }}
            styles={{
              textInput: [styles.input, { width: width(90) }],
              description: {
                color: AppColors.white,
              },
              listView: {
                color: AppColors.white,
                backgroundColor: AppColors.blueBackground,
                zIndex: 1000,
                width: width(90),
                flexGrow: 0,
                borderBottomRightRadius: width(5),
                borderBottomLeftRadius: width(5),
                fontFamily: AppFonts.segoe_ui_medium,
              },

              separator: {
                height: width(0.3),
                backgroundColor: AppColors.white,
              },
              loader: {
                flexDirection: "row",
                justifyContent: "flex-end",
                height: 20,
              },
              row: {
                paddingVertical: height(1.5),
              },
            }}
            onPress={onAddress}
            query={{
              key: "AIzaSyAW5O831v7xI0OVGJufVHJiIcJgeMybNdA",
              language: "en",
            }}
          />
        </View>
        {Icon && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconStyle}>
            {Icon}
          </TouchableOpacity>
        )}
      </View>
      <CustomText
        color={AppColors.red}
        textStyles={{ width: width(containerWidth + 8) }}
        size={2.5}
      >
        {errorMsg}
      </CustomText>
    </TouchableOpacity>
  );
};

export default forwardRef(TextInputWithAutoPlaces);
