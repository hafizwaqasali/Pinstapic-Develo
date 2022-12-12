import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { lottieJson } from "../../../assets";
import Modal from "react-native-modal";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { CustomText } from "~components/texts";
import CommonStyles from "~utills/CommonStyles";
import { selectSwitchLoader } from "~redux/slices/config";
import { useSelector } from "react-redux";

const AnimatedLoader = () => {
    const switchLoader = useSelector(selectSwitchLoader);
    return (
        <View style={styles.container}>
            <Modal
                isVisible={switchLoader}
                style={styles.modalContainer}
                animationInTiming={300}
                animationOutTiming={200}
                animationIn={"lightSpeedIn"}
                animationOut={"lightSpeedOut"}
            >
                <View style={styles.contentWrapper}>
                    <Lottie source={lottieJson.loaderJson} autoPlay loop />
                </View>
                <CustomText
                    children="Loading..."
                    textStyles={styles.LoadingTxt}
                    size={5}
                />
            </Modal>
        </View>
    );
};

export default AnimatedLoader;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        alignItems: "center",
    },
    contentWrapper: {
        height: height(20),
        width: width(70),
        alignItems: "center",
        borderRadius: width(2),
        backgroundColor: "transparent",
    },
    LoadingTxt: {},
});
