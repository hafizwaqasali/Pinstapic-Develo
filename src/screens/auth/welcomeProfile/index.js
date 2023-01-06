import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    ScreenWrapper,
    HeaderWithBtn,
    AddCoverPhoto,
    InputField,
    PrimaryBtn,
    CustomGallery,
} from "~components";
import styles from "./styles";
import AppColors from "~utills/AppColors";
import CommonStyles from "~utills/CommonStyles";
import Entypo from "react-native-vector-icons/Entypo";
import { width } from "~utills/Dimension";
import DropDown from "~components/dropdowns/dropDown";
import { useDummyData } from "../../../hooks";
import ScreenNames from "~routes/routes";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "~redux/slices/user";

export default function WelcomeProfile({ navigation, route }) {
    const [type, setType] = useState(route.params);
    const [userName, setuserName] = useState("");
    const [coverImg, setcoverImg] = useState(null)
    const [visible, setVisible] = useState(false);
    const [visibleGallery, setVisibleGallery] = useState(false);
    const [dropDownValue, setDropDownValue] = useState("");
    const tempData = useDummyData();
    const [dropDownData, setDropDownData] = useState([]);
    const [choosenloc, setChoosenLoc] = useState("");
    const dispatch = useDispatch();

    const ToggleGallery = () => setVisibleGallery(!visibleGallery);

    useEffect(() => {
        setDropDown();
    }, []);

    useEffect(() => {
        if (route?.params?.Loc) {
            setChoosenLoc(route?.params?.Loc);
        }
    }, [route?.params?.Loc]);

    const setDropDown = async () => {
        switch (type) {
            case "PINSTAR":
                setDropDownData(tempData.typeofpinstar);
                break;
            case "PINSTYLIST":
                setDropDownData(tempData.typeofstylist);
                break;
            case "PINSTORE":
                setDropDownData(tempData.typeofpinstore);
                break;

            default:
                break;
        }
    };

    const toggleModal = () => setVisible(!visible);

    const getSelectedImg = (val) => {
        setcoverImg(val)
        ToggleGallery()
    }

    const _selectFromDropdown = async (value) => {
        setDropDownValue(value);
        dropDownData?.forEach((item, index) => {
            if (item.label == value) item.isSelected = true;
            else item.isSelected = false;
        });
        setDropDownData(dropDownData);
        toggleModal();
    };

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
            <CustomGallery
                isVisible={visibleGallery}
                onPressBackBtn={ToggleGallery}
                headerTitle={"Select Profile Photo"}
                onSave={getSelectedImg}
            />
            <View style={styles.container}>
                <DropDown
                    isVisible={visible}
                    tempData={dropDownData}
                    onPress={_selectFromDropdown}
                />
                <View style={styles.coverPhotoWrapper}>
                    <AddCoverPhoto onPress={ToggleGallery} image={coverImg} />
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
                        onPress={() => {
                            navigation.navigate(ScreenNames.MANAGELOCATION, {
                                screenName: ScreenNames.WELCOMEPROFILE,
                            });
                        }}
                        editable={false}
                        label={"Location"}
                        placeholder={"Select here..."}
                        value={choosenloc}
                        placeholderColor={AppColors.white_50}
                        containerStyles={CommonStyles.marginTop_3}
                        rightIcon={
                            <Entypo
                                name="chevron-thin-right"
                                size={width(5)}
                                color={AppColors.white}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.MANAGELOCATION, {
                                        screenName: ScreenNames.WELCOMEPROFILE,
                                    });
                                }}
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
                        onPress={() => {
                            dispatch(setIsLoggedIn(true));
                        }}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
