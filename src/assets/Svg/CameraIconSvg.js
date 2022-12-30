import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { height, width } from "~utills/Dimension"

const CameraIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width(9)}
        height={height(4.5)}
        viewBox="0 0 50 50"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <G fill="#fff">
            <Path
                d="M25 16a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
                data-original="#000000"
            />
            <Path
                d="M38 12h-4.38l-.83-1.66A4.58 4.58 0 0 0 29 8h-8a4.58 4.58 0 0 0-3.79 2.34L16.38 12H12a7 7 0 0 0-7 7v16a7 7 0 0 0 7 7h26a7 7 0 0 0 7-7V19a7 7 0 0 0-7-7zm5 23a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V19a5 5 0 0 1 5-5h5a1 1 0 0 0 .89-.55L19 11.24A2.56 2.56 0 0 1 21 10h8a2.56 2.56 0 0 1 2 1.24l1.11 2.21A1 1 0 0 0 33 14h5a5 5 0 0 1 5 5z"
                data-original="#000000"
            />
        </G>
    </Svg>
)

export default CameraIconSvg
