import { Text, View } from "react-native";
import React, { useState } from "react";
import {
    ScreenWrapper,
    HeaderWithBtn,
    AddCoverPhoto,
    InputField,
    PrimaryBtn,
} from "~components";
import styles from "./styles";
import AppColors from "~utills/AppColors";
import CommonStyles from "~utills/CommonStyles";
import Entypo from "react-native-vector-icons/Entypo";
import { width } from "~utills/Dimension";
import DropDown from "~components/dropdowns/dropDown";
import { useDummyData } from "../../../hooks"

export default function WelcomeProfile({ navigation, route }) {
    const [type, setType] = useState(route.params);
    const [userName, setuserName] = useState("");
    const [visible, setVisible] = useState(false)
    const [dropDownValue, setDropDownValue] = useState('')
    const tempData = useDummyData();
    const [dropDownData, setDropDownData] = useState(tempData.typeofstylist)

    const toggleModal = () => setVisible(!visible)

    const _selectFromDropdown = async (value) => {
        setDropDownValue(value)
        dropDownData?.forEach((item, index) => {
            if (item.label == value) item.isSelected = true
            else item.isSelected = false
        })
        console.log(dropDownData)
        setDropDownData(dropDownData)
        toggleModal()

    }


    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={`WELCOME ${type}!`}
                    isCenterTitle
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <View style={styles.container}>
                <DropDown isVisible={visible} tempData={dropDownData} onPress={_selectFromDropdown} />
                <View style={styles.coverPhotoWrapper}>
                    <AddCoverPhoto />
                </View>
                <View style={styles.formContainer}>
                    <InputField
                        label={
                            type == "PINSTAR"
                                ? `User Name`
                                : type == "PINSTYLIST"
                                    ? `User Name`
                                    : `Store Name`
                        }
                        placeholder={"Type here..."}
                        placeholderColor={AppColors.white_50}
                        value={userName}
                        onChangeText={setuserName}
                    />
                    <InputField
                        onPress={() => alert("pressed")}
                        editable={false}
                        label={"Location"}
                        placeholder={"Select here..."}
                        placeholderColor={AppColors.white_50}
                        containerStyles={CommonStyles.marginTop_3}
                        rightIcon={
                            <Entypo
                                name="chevron-thin-right"
                                size={width(5)}
                                color={AppColors.white}
                                onPress={() => alert("pressed")}
                            />
                        }
                    />
                    <InputField
                        onPress={() => toggleModal()}
                        editable={false}
                        value={dropDownValue}
                        label={
                            type == "PINSTAR"
                                ? `Favorite Styles`
                                : type == "PINSTYLIST"
                                    ? `Type of Stylist`
                                    : `Store Category`
                        }
                        placeholder={"Select here..."}
                        placeholderColor={AppColors.white_50}
                        containerStyles={CommonStyles.marginTop_3}
                        rightIcon={
                            <Entypo
                                name="chevron-thin-down"
                                size={width(5)}
                                color={AppColors.white}
                                onPress={() => toggleModal()}
                            />
                        }
                    />
                    <InputField
                        label={"Bio"}
                        placeholder={"Type here..."}
                        placeholderColor={AppColors.white_50}
                        containerStyles={[CommonStyles.marginTop_3, styles.bioFieldStyles]}
                        multiline
                    />
                    <PrimaryBtn
                        containerStyle={styles.btnContainer}
                        title={`Continue`}
                        textStyle={styles.btnText}
                        onPress={() => alert("pressed")}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
