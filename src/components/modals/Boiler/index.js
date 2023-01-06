import { StyleSheet, Text, View } from "react-native";
import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from "react";
import Modal from "react-native-modal";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";

const Boiler = ({ }, ref) => {
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

    return (
        <View style={styles.container}>
            <Modal
                style={styles.modalWrapper}
                isVisible={isVisible}
            // onBackdropPress={toggleModal}
            // onBackButtonPress={toggleModal}
            >
                <View style={styles.wrapper}>
                    <Text>AddTag</Text>
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
        height: height(40),
        borderRadius: width(4),
    },
});

export default forwardRef(Boiler);
