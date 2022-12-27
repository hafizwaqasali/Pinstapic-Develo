import { Platform, StyleSheet } from 'react-native'
import AppFonts from '~utills/AppFonts'
import { height, width } from '~utills/Dimension'

const Ios = Platform.OS == "ios" ? true : false


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width(6),
        alignItems: "center"
    },
    coverPhotoWrapper: {
        marginTop: height(5)
    },
    formContainer: {
        marginVertical: height(3)
    },
    bioFieldStyles: {
        height: height(12),
        alignItems: "flex-start",
        paddingTop: Ios ? height(1) : 0
    },
    btnContainer: {
        marginTop: height(12),
    },
    btnText: {
        fontFamily: AppFonts.segoe_ui_bold,
        fontSize: width(3.5)
    }
})

export default styles