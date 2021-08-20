import * as React from "react"
import Svg, { Path, G, Text } from "react-native-svg"

function Practice(props) {
  return (
    <Svg width="50px" height="50px" fill="#7A7A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 68.75" {...props}>
      <Path d="M22.571 52C11.78 52 3 43.22 3 32.429s8.78-19.571 19.571-19.571 19.572 8.78 19.572 19.571-8.78 19.57-19.572 19.57zm0-38.142C12.331 13.858 4 22.188 4 32.429c0 10.24 8.331 18.57 18.571 18.57s18.572-8.33 18.572-18.57S32.81 13.858 22.57 13.858z" />
      <Path d="M22.571 52C11.78 52 3 43.22 3 32.429s8.78-19.571 19.571-19.571 19.572 8.78 19.572 19.571-8.78 19.57-19.572 19.57zm0-38.142C12.331 13.858 4 22.188 4 32.429c0 10.24 8.331 18.57 18.571 18.57s18.572-8.33 18.572-18.57S32.81 13.858 22.57 13.858z" />
      <Path d="M22.571 45.552c-7.236 0-13.123-5.887-13.123-13.124 0-7.235 5.887-13.122 13.123-13.122s13.122 5.887 13.122 13.122c0 7.237-5.886 13.124-13.122 13.124zm0-25.246c-6.684 0-12.123 5.438-12.123 12.122 0 6.686 5.439 12.124 12.123 12.124s12.122-5.438 12.122-12.124c0-6.684-5.437-12.122-12.122-12.122z" />
      <Path d="M22.571 39.104a6.684 6.684 0 01-6.676-6.676c0-3.68 2.996-6.674 6.676-6.674s6.675 2.994 6.675 6.674a6.683 6.683 0 01-6.675 6.676zm0-12.35a5.682 5.682 0 00-5.676 5.674 5.682 5.682 0 005.676 5.676 5.682 5.682 0 005.675-5.676 5.681 5.681 0 00-5.675-5.674z" />
      <G>
        <Path d="M21.821 33.679a.498.498 0 01-.353-.854l17.394-17.394a.5.5 0 11.707.707L22.175 33.532a.498.498 0 01-.354.147z" />
        <Path d="M44.264 17.044a.542.542 0 01-.075-.006l-5.047-.759a.5.5 0 01-.42-.42l-.76-5.048a.5.5 0 01.14-.428l7.237-7.237a.498.498 0 01.848.28l.705 4.682 4.682.704a.5.5 0 01.28.848l-7.237 7.237a.499.499 0 01-.353.147zm-4.609-1.699l4.434.667 6.357-6.358-4.068-.612a.5.5 0 01-.42-.42l-.612-4.068-6.358 6.358.667 4.433zM25.877 33.679H21.82a.5.5 0 01-.5-.5v-4.057a.5.5 0 111 0v3.557h3.556a.5.5 0 110 1z" />
      </G>
        <Text
            y={68}
            x={-8}
            fontSize={14}
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            fill="#7A7A7A"
        >
            {"PRACTICE"}
        </Text>
    </Svg>
  )
}

export default Practice
