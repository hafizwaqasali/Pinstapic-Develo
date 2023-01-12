import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from "react-native";
import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from "react";
import Modal from "react-native-modal";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";
import HeaderWithBtn from "~components/headers/HeaderWithBtn";
import { PrimaryBtn } from "~components/buttons/primary";

const ViewImage = (
    {
        headerTitle = "",
        onPressBackBtn,
        children,
        data = [],
        btnTitle = "",
        resizeMode = "cover",
        onPressBtn = () => null
    },
    ref
) => {
    const [isVisible, setisVisible] = useState(false);
    const toggleModal = () => setisVisible(!isVisible);
    useImperativeHandle(ref, () => ({
        show: () => {
            setisVisible(true);
        },
        hide: () => {
            setisVisible(false);
        },
    }));


    const renderFlatList = ({ item, index }) => {
        return (
            <View style={styles.itemWrapper}>
                <Image
                    source={{ uri: item }}
                    resizeMode={resizeMode}
                    style={styles.imgStyling}
                />
            </View>
        );
    };

    return (
        <Modal
            style={styles.modalWrapper}
            isVisible={isVisible}
            hasBackdrop={false}
            animationInTiming={10}
            animationIn={"lightSpeedIn"}
            animationOut={"lightSpeedOut"}
            onBackButtonPress={toggleModal}
        >
            <SafeAreaView style={styles.safeAreaContainer}>
                <HeaderWithBtn
                    centerText={headerTitle}
                    isCenterTitle
                    onPressBackBtn={onPressBackBtn}
                />
                {children && children}
                <FlatList
                    data={data}
                    keyExtractor={(e, i) => i}
                    renderItem={renderFlatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                />
                <PrimaryBtn title={btnTitle} containerStyle={styles.btnContainer} onPress={onPressBtn} />
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        alignItems: "center",
    },
    safeAreaContainer: {
        backgroundColor: AppColors.blueBackground,
        width: width(100),
        height: height(100),
        position: "absolute",
    },
    imgStyling: {
        height: "100%",
        width: "100%",
    },
    itemWrapper: {
        height: Platform.OS == 'ios' ? height(78) : height(75),
        width: width(100),
    },
    contentContainerStyle: {
    },
    btnContainer: {
        marginBottom: height(2)
    }
});

export default forwardRef(ViewImage);
