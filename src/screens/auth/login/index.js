import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../../../components/screenWrapper";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import AppColors from "~utills/AppColors";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ScreenNameHeader,
  InputFieldValidate,
  InputField,
  CustomText,
  CheckBox,
  PrimaryBtn,
  SocialIcon,
  AnimatedLoader,
  ForgotPassModal,
  LinkSentModal
} from "../../../components";
import CommonStyles from "~utills/CommonStyles";
import { Icons, Images } from "../../../assets";
import { useForm, Controller } from "react-hook-form";
import AppFonts from "~utills/AppFonts";
import { height } from "~utills/Dimension";
import { loginValidationSchema } from "~utills/validationSchema/LoginSchema";
import { setSwitchLoader } from "~redux/slices/config";
import ScreenNames from "~routes/routes";
import { HiddenEyeSvg, VisibleEyeSvg } from "~assets/Svg";

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
  });
  const dispatch = useDispatch();
  const [toggleEye, setToggleEye] = useState(true);
  const onSubmit = (data) => {
    dispatch(setSwitchLoader(true));
    console.log(data);
    setTimeout(() => {
      dispatch(setSwitchLoader(false));
    }, 3000);
  };
  const toggleVisibilty = () => setToggleEye(!toggleEye);
  const forgotPassRef = useRef()
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blueBackground}
      backgroundColor={AppColors.blueBackground}
      barStyle="light-content"
      headerUnScrollable={() => (
        <ScreenNameHeader
          underline
          title="Login"
          containerStyles={CommonStyles.marginLeft_5}
        />
      )}
    >
      <View style={styles.container}>
        <ForgotPassModal ref={forgotPassRef} />
        {/* Icon Section */}
        <Image
          source={Icons.pinstapicLogo}
          resizeMode="contain"
          style={styles.logoStyles}
        />
        {/* Input Fields Section */}
        <InputFieldValidate
          formControl={control}
          name="email"
          label={"Email"}
          placeholder={"johndoe@email.com"}
          errorMsg={errors.email}
        />
        <InputFieldValidate
          rightIcon={
            !toggleEye ? (
              <TouchableOpacity onPress={toggleVisibilty}>
                <HiddenEyeSvg />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleVisibilty}>
                <VisibleEyeSvg />
              </TouchableOpacity>
            )
          }
          formControl={control}
          name="password"
          label={"Password"}
          placeholder={"• • • • • • • • • • • • • • •"}
          secureTextEntry={toggleEye}
          returnKeyType={"done"}
          errorMsg={errors.password}
        />
        {/* Forgot Password Section */}
        <View style={styles.forgotPassContainer}>
          <View style={styles.rememberMeWrapper}>
            <CheckBox />
            <CustomText fontFamily={AppFonts.robotoregular} size={3}>
              Remember me
            </CustomText>
          </View>
          <TouchableOpacity style={styles.forgotPassword}>
            <CustomText fontFamily={AppFonts.robotoregular} size={3} onPress={() => forgotPassRef.current.show()}>
              Forgot Password?
            </CustomText>
          </TouchableOpacity>
        </View>
        {/* Login Section */}
        <PrimaryBtn
          title="Login"
          containerStyle={[
            CommonStyles.marginTop_5,
            CommonStyles.marginBottom_3,
          ]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
        <CustomText fontFamily={AppFonts.robotoregular} size={3}>
          Or continue with
        </CustomText>
        {/* SocialIcons */}
        <View style={styles.socialIconsWrapper}>
          <SocialIcon
            imgSrc={Images.googleIcon}
            onPress={() => alert("Pressed")}
          />
          <SocialIcon
            imgSrc={Images.facebookIcon}
            onPress={() => alert("Pressed")}
          />
          <SocialIcon
            imgSrc={Images.twitterIcon}
            onPress={() => alert("Pressed")}
          />
        </View>
        {/* Signup Section */}
        <CustomText
          fontFamily={AppFonts.robotoregular}
          size={3}
          marginTop={height(5)}
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
        >
          Don't have an account? Create now
        </CustomText>
        <PrimaryBtn
          transparentBtn={true}
          title="Sign Up"
          containerStyle={CommonStyles.marginTop_1}
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
        />
      </View>
    </ScreenWrapper>
  );
}
