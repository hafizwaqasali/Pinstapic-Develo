import * as React from "react"
import { Circle } from "react-native-maps"
import Svg, { G, Path } from "react-native-svg"

export const ThreeLinesSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <G fill={props?.color ?? "#fff"}>
            <Path
                d="M4 13h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zM20 5H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM4 19h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
                data-original="#000000"
            />
        </G>
    </Svg>
)

export const HomeIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 32 32"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <Path
            d="M29.92 17.38A1 1 0 0 1 29 18h-3v10a3 3 0 0 1-3 3h-4a1 1 0 0 1-1-1v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V18H3a1 1 0 0 1-.92-.62 1 1 0 0 1 .21-1.09l13-13a1 1 0 0 1 1.42 0l13 13a1 1 0 0 1 .21 1.09z"
            fill={props?.color ?? "#fff"}
            data-original="#000000"
            data-name="Layer 2"
        />
    </Svg>
)


export const UsersIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 32 32"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <G fill={props?.color ?? "#fff"}>
            <Path
                d="M11.429 16a5.715 5.715 0 1 0-5.715-5.714A5.72 5.72 0 0 0 11.429 16zM18.905 20.721A10.434 10.434 0 0 0 1 28a1 1 0 0 0 1 1h18.86a1 1 0 0 0 1-1 10.067 10.067 0 0 0-.485-3.124 10.36 10.36 0 0 0-2.47-4.155z"
                data-original="#000000"
            />
            <Circle cx={23.5} cy={12.25} r={4.25} data-original="#000000" />
            <Path
                d="M23.5 17.67a7.482 7.482 0 0 0-3.806 1.057c.217.194.436.385.641.595a12.388 12.388 0 0 1 2.952 4.966 11.488 11.488 0 0 1 .437 1.882H30a1 1 0 0 0 1-1 7.508 7.508 0 0 0-7.5-7.5z"
                data-original="#000000"
            />
        </G>
    </Svg>
)

export const ThumbIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <G fill={props?.color ?? "#fff"}>
            <Path
                d="M1.75 23h2.5C5.215 23 6 22.215 6 21.25V9.75C6 8.785 5.215 8 4.25 8h-2.5C.785 8 0 8.785 0 9.75v11.5C0 22.215.785 23 1.75 23zM12.781.75c-1 0-1.5.5-1.5 3 0 2.376-2.301 4.288-3.781 5.273v12.388c1.601.741 4.806 1.839 9.781 1.839h1.6c1.95 0 3.61-1.4 3.94-3.32l1.12-6.5a3.998 3.998 0 0 0-3.94-4.68h-4.72s.75-1.5.75-4c0-3-2.25-4-3.25-4z"
                data-original="#000000"
            />
        </G>
    </Svg>
)

export const SearchSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 56.966 56.966"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <Path
            d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
            fill={props?.color ?? "#fff"}
            data-original="#000000"
        />
    </Svg>
)

export const ChatIconSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 512.012 512.012"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <G fill={props?.color ?? "#fff"}>
            <Path
                d="M333.201 115.038c-28.905-59.021-89.37-98.042-157.193-98.042-97.047 0-176 78.505-176 175 0 26.224 5.63 51.359 16.742 74.794L.299 349.055c-2.094 10.472 7.144 19.728 17.618 17.656l83.279-16.465a172.546 172.546 0 0 0 34.732 12.151c-26.717-126.541 69.199-245.321 197.273-247.359z"
                data-original="#000000"
            />
            <Path
                d="M495.266 394.79a174.485 174.485 0 0 0 7.511-18.514h-.549c37.448-109.917-41.305-225.441-157.567-231.066l-.005-.018c-100.036-4.61-183.148 75.486-183.148 174.804 0 96.414 78.361 174.857 174.743 174.997 26.143-.035 51.201-5.663 74.568-16.747 91.207 18.032 84.094 16.75 86.189 16.75 9.479 0 16.56-8.686 14.709-17.941z"
                data-original="#000000"
            />
        </G>
    </Svg>
)

