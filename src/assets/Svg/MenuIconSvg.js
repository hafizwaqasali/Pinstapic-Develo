import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const MenuIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-dots-vertical"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <Path d="M0 0h24v24H0z" stroke="none" />
        <Circle cx={12} cy={12} r={1} />
        <Circle cx={12} cy={19} r={1} />
        <Circle cx={12} cy={5} r={1} />
    </Svg>
)

export default MenuIconSvg
