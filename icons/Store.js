import * as React from "react"
import Svg, { Path, Text } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width="50px" height="50px" fill="#7A7A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" {...props}>
      <Path fill="#7A7A7A" d="M6.97 7.385a1.25 1.25 0 00-1.25 1.248v6.002a1.25 1.25 0 00.145.584v23.95c0 2.184 1.164 4.127 2.914 5.464 1.04.794 2.296 1.388 3.682 1.744v.355l.049 44.613a1.25 1.25 0 001.25 1.248h71.35a1.25 1.25 0 001.25-1.25l-.016-44.59v-.373c1.39-.355 2.65-.951 3.694-1.748 1.75-1.336 2.916-3.28 2.916-5.463V15.216a1.25 1.25 0 00.144-.582V8.632a1.25 1.25 0 00-1.25-1.248H6.971zM8.22 9.883h82.379v3.504H8.218V9.883zm-.145 6.002h14.768V39.17c0 1.406-.729 2.7-2.047 3.707s-3.213 1.668-5.338 1.668-4.018-.662-5.336-1.668c-1.317-1.006-2.046-2.3-2.046-3.707V15.885zm16.977 0h14.766V39.17c0 1.406-.729 2.7-2.047 3.707s-3.21 1.668-5.336 1.668c-2.125 0-4.02-.662-5.338-1.668-1.317-1.006-2.044-2.3-2.044-3.707V15.885zm16.975 0h14.768V39.17c0 1.406-.729 2.7-2.047 3.707s-3.213 1.668-5.338 1.668-4.018-.662-5.336-1.668c-1.317-1.006-2.046-2.3-2.046-3.707V15.885zm16.977 0H73.77V39.17c0 1.406-.727 2.7-2.045 3.707s-3.213 1.668-5.338 1.668-4.02-.662-5.338-1.668-2.044-2.3-2.044-3.707V15.885zm16.975 0h14.768V39.17c0 1.406-.729 2.7-2.047 3.707s-3.21 1.668-5.336 1.668c-2.125 0-4.02-.662-5.338-1.668-1.317-1.006-2.046-2.3-2.046-3.707V15.885zm-52.03 26.818a7.955 7.955 0 001.81 1.93c.274.21.568.4.87.582l-.001.632-.09 23.451a1.25 1.25 0 001.25 1.256h43.258a1.25 1.25 0 001.25-1.248l.059-23.658.002-.525c.245-.154.482-.317.708-.49a7.953 7.953 0 001.811-1.93 7.964 7.964 0 001.81 1.93c1.751 1.336 4.1 2.12 6.678 2.12.164 0 .323-.013.485-.019v.02l.013 43.34H15.01l-.049-43.36c.166.007.33.02.498.02 2.578 0 4.928-.784 6.678-2.12a7.961 7.961 0 001.81-1.93zm16.976 0a7.964 7.964 0 001.81 1.93c1.751 1.336 4.1 2.12 6.676 2.12 2.578 0 4.928-.784 6.678-2.12a7.961 7.961 0 001.81-1.93 7.955 7.955 0 001.811 1.93c1.75 1.336 4.1 2.12 6.678 2.12 1.22 0 2.386-.18 3.465-.507l-.055 21.809H29.041l.084-21.766c1.036.298 2.148.465 3.31.465 2.578 0 4.928-.785 6.678-2.121a7.953 7.953 0 001.81-1.93z"/>
    <Text
        y={123}
        x={10}
        fontSize={25}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fill="#7A7A7A"
    >
        {"STORE"}
    </Text>
    </Svg>
  )
}

export default SvgComponent