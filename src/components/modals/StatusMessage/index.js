import { StyleSheet, Text, View, Image } from "react-native";
import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from "react";
import Modal from "react-native-modal";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";
import { CustomText } from "~components/texts";
import { Icons } from "~assets";
import AppFonts from "~utills/AppFonts";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "~routes/routes";

const StatusMsg = ({ title = "", titleTxtColor, titleTxtStyles }, ref) => {
    const navigation = useNavigation()
    const [isVisible, setisVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => {
            setisVisible(true);
            setTimeout(() => {
                setisVisible(false);
                navigation.navigate(ScreenNames.VIEWLOOKBOOK)
            }, 3000);
        },
        hide: () => {
            setisVisible(false);
        },
    }));

    return (
        <View style={styles.container}>
            <Modal style={styles.modalWrapper} isVisible={isVisible} animationOut={"lightSpeedOut"}>
                <View style={styles.wrapper}>
                    <CustomText
                        children={title}
                        textColor={titleTxtColor}
                        textStyles={titleTxtStyles}
                        size={6}
                        fontFamily={AppFonts.segoe_ui_bold}
                    />
                    <Image source={Icons.checkedIcon} resizeMode={"contain"} style={styles.IconStyle} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalWrapper: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: AppColors.white,
        height: height(18),
        width: width(80),
        borderRadius: width(4),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    IconStyle: {
        height: height(5.5),
        width: width(10),
        marginTop: height(1)
    }
});

export default forwardRef(StatusMsg);
