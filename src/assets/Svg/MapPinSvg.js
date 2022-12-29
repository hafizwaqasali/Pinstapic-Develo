import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { height, width } from "~utills/Dimension"

const MapPinSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width(10)}
        height={width(10)}
        viewBox="0 0 64 64"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <Path
            d="M32 0A24.032 24.032 0 0 0 8 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0C33.64 62.81 56 41.23 56 24A24.032 24.032 0 0 0 32 0zm0 35a11 11 0 1 1 11-11 11.007 11.007 0 0 1-11 11z"
            fill="#f09308"
            data-original="#000000"
        />
    </Svg>
)

export default MapPinSvg
