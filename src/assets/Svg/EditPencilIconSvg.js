import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { height, width } from "~utills/Dimension"

const EditPencilIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width(4)}
        height={height(2)}
        viewBox="0 0 492.493 492"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <G fill="#f09308">
            <Path
                d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                data-original="#000000"
            />
        </G>
    </Svg>
)

export default EditPencilIconSvg
