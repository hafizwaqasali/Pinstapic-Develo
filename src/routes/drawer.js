import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { CustomText, ScreenWrapper } from "~components";
import AppFonts from "~utills/AppFonts";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDummyData } from "~hooks";


export default function Appdrawer(props) {
    const { myLookbookImgs } = useDummyData()

    return (
        <ScreenWrapper statusBarColor={AppColors.purple} backgroundColor={AppColors.purple}>
            <View style={styles.container}>
                {/* profile details section */}
                <View style={styles.profileInfoContainer}>
                    <TouchableOpacity
                        style={styles.profileRoundWrapper}
                    >
                        <Image source={{ uri: myLookbookImgs[0] }} resizeMode="cover" style={styles.profileImgStlying} />
                    </TouchableOpacity>
                    <View style={styles.profileDetailsWrapper}>
                        <Text style={styles.userNameTextStyles}>
                            Magno Scavo
                        </Text>
                        <Text style={styles.locationTextStyles}>
                            New York City, USA
                        </Text>
                        <Text style={styles.descTextStyles}>
                            Lorem ipsum dolor sit amet, consecter adipiscing elit.
                        </Text>
                        <View style={styles.favouriteSection}>
                            <TouchableOpacity style={styles.favouritesWrapper}>
                                <Entypo
                                    name="star"
                                    size={width(3)}
                                    color={AppColors.darkOrange}

                                />
                                <Text style={styles.favouriteTextStyles}>481</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.followingTextWrapper}>
                                <FontAwesome5
                                    name="user-friends"
                                    size={width(3)}
                                    color={AppColors.white}

                                />


                                <Text style={styles.followingStyles}>264</Text>
                                <Text style={styles.followingTextStyles}>Followings</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.followersSection}>
                            <FontAwesome5
                                name="user-friends"
                                size={width(3)}
                                color={AppColors.darkOrange}
                            />

                            <Text style={styles.followersStyles}>124</Text>
                            <Text style={styles.followersTextStyles}>Followers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.switchProfileBtnContainer}>
                            <View style={styles.switchProfileWrapper}>
                                <Text style={styles.switchProfileTextStyling}>Switch Profile</Text>
                                <Text >...</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userType}>
                        <Text style={styles.userTypeStyling}>Pinstar</Text>
                    </View>
                </View>
                {/* profile section ended here */}
                <View style={styles.itemsContainer}>
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileInfoContainer: {
        marginHorizontal: width(3),
        marginTop: height(2),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "hidden",
        paddingBottom: height(2)
    },
    profileRoundWrapper: {
        height: height(7),
        width: height(7),
        borderRadius: height(5),
        borderColor: AppColors.white,
        borderWidth: width(.8),
        alignSelf: "flex-start",
    },
    profileImgStlying: {
        height: "100%",
        width: "100%",
        borderRadius: height(5),
    },
    favouriteSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: height(.5),
        width: width(35),
        flexWrap: "wrap",
        overflow: "hidden"
    },
    followersSection: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        width: width(24),
        paddingBottom: height(2)
    },
    profileDetailsWrapper: {
        flexWrap: "wrap",
        marginLeft: width(2),
        width: width(35)
    },
    userType: {
        alignSelf: "flex-start",
    },
    userNameTextStyles: {
        fontFamily: AppFonts.segoe_ui_bold,
        fontSize: width(3.5),
        color: AppColors.white,
        lineHeight: height(2)
    },
    locationTextStyles: {
        fontFamily: AppFonts.segoe_ui_medium,
        fontSize: width(2.8),
        color: AppColors.white_70,
        lineHeight: height(2)
    },
    descTextStyles: {
        fontFamily: AppFonts.segoe_ui_medium,
        fontSize: width(2.6),
        color: AppColors.white_70,
        width: width(35),
    },
    followingTextWrapper: {
        flexDirection: "row",
        alignItems: "center",
        width: width(24),
    },
    favouriteTextStyles: {
        fontFamily: AppFonts.robotoregular,
        color: AppColors.white,
        fontSize: width(2.8),

    },
    followingStyles: {
        fontFamily: AppFonts.robotoregular,
        color: AppColors.white,
        fontSize: width(2.8),
        marginLeft: width(.5)

    },
    followingTextStyles: {
        fontFamily: AppFonts.robotoregular,
        color: AppColors.white,
        fontSize: width(2.8),
        marginLeft: width(.5)

    },
    favouritesWrapper: {
        flexDirection: "row",
        alignItems: "center",

    },
    followersStyles: {
        fontFamily: AppFonts.robotoregular,
        color: AppColors.white,
        fontSize: width(2.8),
        marginLeft: width(.5)
    },
    followersTextStyles: {
        fontFamily: AppFonts.robotoregular,
        color: AppColors.white,
        fontSize: width(2.8),
        marginLeft: width(.5)
    },
    userType: {
        backgroundColor: AppColors.white,
        borderRadius: width(5),
        width: width(14),
        height: height(2),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        marginTop: height(.2)
    },
    userTypeStyling: {
        fontFamily: AppFonts.robotoregular,
        color: AppColors.smoky_Grey,
        fontSize: width(2.8),
    },
    switchProfileBtnContainer: {
        width: width(35),
        backgroundColor: AppColors.white,
        borderRadius: width(10),
        height: height(3.5),
        alignItems: "center",
        justifyContent: "center",
    },
    switchProfileWrapper: {
        flexDirection: "row",
        alignItems: "center",

    },
    switchProfileTextStyling: {
        color: AppColors.smoky_Grey,
        fontSize: width(3.2),
    },
    itemsContainer: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingHorizontal: width(3),

    }

});
