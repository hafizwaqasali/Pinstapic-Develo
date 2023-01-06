import { Text, View } from "react-native";
import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from "react";
import Modal from "react-native-modal";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import { InputField } from "~components/inputs/Input";
import { PrimaryBtn } from "~components/buttons/primary";
import styles from "./styles"

const AddTag = ({ onAddTags }, ref) => {
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
                    <CustomText
                        children="Add a Tag"
                        textColor={AppColors.darkblue}
                        fontFamily={AppFonts.segoe_ui_bold}
                        size={4}
                    />
                    <View style={styles.inputsWrapper}>
                        <InputField
                            label={"Tag Title"}
                            containerStyles={styles.inputContainer}
                            placeholderColor={AppColors.smoky_Grey_20}
                            placeholder={'Write Something'}
                            labelBackgroundColor={AppColors.white}
                            labelColor={AppColors.darkblue}
                            inputContainerStyles={styles.inputStyles}
                        />
                        <InputField
                            label={"Brand name"}
                            containerStyles={styles.inputContainer}
                            placeholderColor={AppColors.smoky_Grey_20}
                            placeholder={'Write Something'}
                            labelBackgroundColor={AppColors.white}
                            labelColor={AppColors.darkblue}
                            inputContainerStyles={styles.inputStyles}
                        />
                        <InputField
                            label={`Tag Price (optional)`}
                            containerStyles={styles.inputContainer}
                            placeholderColor={AppColors.smoky_Grey_20}
                            placeholder={'0'}
                            labelBackgroundColor={AppColors.white}
                            labelColor={AppColors.darkblue}
                            inputContainerStyles={styles.inputStyles}
                            leftIcon={<CustomText children="$" textColor={AppColors.black} size={4} />}
                            keyboardType={"numeric"}
                            maxLength={4}
                        />
                    </View>
                    <View style={styles.bottomWrapper}>
                        <PrimaryBtn
                            title="Cancel"
                            transparentBtn={true}
                            containerStyle={[
                                styles.CancelbtnContainer,
                            ]}
                            textStyle={[styles.CancelbtnText]}
                            onPress={toggleModal}
                        />
                        <PrimaryBtn
                            title="Add"
                            containerStyle={styles.AddbtnContainer}
                            textStyle={styles.AddbtnText}
                            onPress={() => {
                                toggleModal()
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};



export default forwardRef(AddTag);
