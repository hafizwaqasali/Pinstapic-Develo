import { Image, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { HeaderWithBtn, PrimaryBtn, ScreenWrapper, AddTagModal, StatusMsgModal } from "~components";
import AppColors from "~utills/AppColors";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { setIsLookAdded } from "~redux/slices/extras";

export default function AddPhotosToLookbook({ navigation, route }) {
    const img = route.params.lookImg
    const tagModalRef = useRef()
    const saveModalRef = useRef()
    const [tags, setTags] = useState([])
    const dispatch = useDispatch()
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Add tags to your looks"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <AddTagModal ref={tagModalRef} />
            <StatusMsgModal ref={saveModalRef} title={'SAVED'} titleTxtColor={AppColors.blueBackground} />
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    {img && <Image
                        source={{ uri: img }}
                        resizeMode="stretch"
                        style={styles.imgStyles}
                    />}
                </View>
                <View style={styles.bottomWrapper}>
                    <PrimaryBtn
                        title="Add tags"
                        containerStyle={[
                            styles.btnContainer,
                            { backgroundColor: AppColors.white_30 },
                        ]}
                        textStyle={[styles.btnText]}
                        onPress={() => tagModalRef?.current?.show()}
                    />
                    <PrimaryBtn
                        title="Save"
                        containerStyle={styles.btnContainer}
                        textStyle={styles.btnText}
                        onPress={() => {
                            saveModalRef?.current?.show()
                            dispatch(setIsLookAdded(true))
                        }}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
