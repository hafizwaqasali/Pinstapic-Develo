import { StyleSheet } from 'react-native'
import AppFonts from '~utills/AppFonts'
import { height, width } from '~utills/Dimension'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerStyle: {
        alignSelf: "center",
    },
    logoStyle: {
        height: height(20),
        width: width(32)
    },
    logoContainer: {
        height: height(16),
        width: width(32),
        overflow: "hidden",
        marginVertical: height(8)
    },
    firstDescStyle: {
        paddingHorizontal: width(9)
    },
    secondDescStyle: {
        paddingHorizontal: width(9),
        marginTop: height(3)
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