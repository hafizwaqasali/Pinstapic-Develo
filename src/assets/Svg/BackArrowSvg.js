import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { height, width } from "~utills/Dimension"

const BackArrowSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width(6)}
        height={height(3)}
        viewBox="0 0 24 24"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <Path
            d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z"
            fill="#fff"
            data-original="#000000"
        />
    </Svg>
)

export default BackArrowSvg
