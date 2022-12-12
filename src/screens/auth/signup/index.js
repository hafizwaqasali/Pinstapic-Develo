import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
    CheckBox,
    CustomText,
    InputFieldValidate,
    PrimaryBtn,
    ScreenNameHeader,
    ScreenWrapper,
    SocialIcon,
} from "~components";
import AppColors from "~utills/AppColors";
import CommonStyles from "~utills/CommonStyles";
import { useDispatch } from "react-redux";
import { setSwitchLoader } from "~redux/slices/config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidationSchema } from "~utills/validationSchema/SignupSchema";
import AppFonts from "~utills/AppFonts";
import { height, width } from "~utills/Dimension";
import { Images } from "~assets";
import ScreenNames from "~routes/routes";
import { HiddenEyeSvg, VisibleEyeSvg } from "~assets/Svg";

export default function Signup({ navigation }) {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            name: "",
            confirm_password: "",
        },
        mode: "all",
        resolver: yupResolver(signupValidationSchema),
    });
    const [toggleEye, setToggleEye] = useState(true);
    const [toggleEyePassword, setToggleEyePassword] = useState(true);
    const dispatch = useDispatch();
    const toggleVisibilty = () => setToggleEye(!toggleEye);
    const toggleConfirmVisibilty = () => setToggleEyePassword(!toggleEyePassword);
    const onSubmit = (data) => {
        dispatch(setSwitchLoader(true));
        console.log(data);
        setTimeout(() => {
            dispatch(setSwitchLoader(false));
        }, 3000);
    };
    return (
        <ScreenWrapper
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <ScreenNameHeader
                    underline
                    title="Sign Up"
                    containerStyles={CommonStyles.marginLeft_5}
                />
            )}
        >
            <View style={styles.container}>
                {/* Inputs */}
                <View style={styles.inputsWrapper}>
                    <InputFieldValidate
                        formControl={control}
                        name="name"
                        label={"Name"}
                        placeholder={"John Doe"}
                        errorMsg={errors.name}
                    />
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
                    <InputFieldValidate
                        rightIcon={
                            !toggleEyePassword ? (
                                <TouchableOpacity onPress={toggleConfirmVisibilty}>
                                    <HiddenEyeSvg />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={toggleConfirmVisibilty}>
                                    <VisibleEyeSvg />
                                </TouchableOpacity>
                            )
                        }
                        formControl={control}
                        name="confirm_password"
                        label={"Confirm Password"}
                        placeholder={"• • • • • • • • • • • • • • •"}
                        secureTextEntry={toggleEyePassword}
                        returnKeyType={"done"}
                        errorMsg={errors.confirm_password}
                    />
                </View>
                {/* terms & conditions */}
                <View style={styles.termsAndConditions}>
                    <CheckBox />
                    <CustomText
                        fontFamily={AppFonts.robotoregular}
                        size={3}
                        marginLeft={width(2.5)}
                    >
                        I Agree
                    </CustomText>
                    <CustomText
                        onPress={() => alert("pressed")}
                        fontFamily={AppFonts.robotoregular}
                        size={3}
                        marginLeft={width(1.5)}
                        textColor={AppColors.darkOrange}
                    >
                        Accept T&C,
                    </CustomText>
                    <CustomText
                        onPress={() => alert("pressed")}
                        fontFamily={AppFonts.robotoregular}
                        size={3}
                        marginLeft={width(1.5)}
                        textColor={AppColors.darkOrange}
                    >
                        Privacy Policy
                    </CustomText>
                </View>
                {/* Bottom Section */}
                <PrimaryBtn
                    title="Sign Up"
                    containerStyle={[
                        CommonStyles.marginTop_5,
                        CommonStyles.marginBottom_3,
                    ]}
                    onPress={handleSubmit(onSubmit)}
                    disabled={!isValid}
                />
                <View style={styles.bottomSectionContainer}>
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
                    {/* Login Section */}
                    <CustomText
                        fontFamily={AppFonts.robotoregular}
                        size={3}
                        marginTop={height(5)}
                    >
                        Don't have an account? Create now
                    </CustomText>
                    <PrimaryBtn
                        transparentBtn={true}
                        title="Login"
                        containerStyle={CommonStyles.marginTop_1}
                        onPress={() => navigation.navigate(ScreenNames.LOGIN)}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
