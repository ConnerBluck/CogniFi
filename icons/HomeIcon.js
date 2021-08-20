import * as React from "react"
import Svg, { Path, Text } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" {...props}>
      <Path fill="#7A7A7A" d="M94.36 47.54L78.98 33.22c.01-.07.02-.14.02-.22V16c0-1.1-.9-2-2-2H67c-1.1 0-2 .9-2 2v4.22L51.36 7.54c-.77-.71-1.96-.71-2.72 0l-43 40c-.81.75-.85 2.02-.1 2.83s2.02.85 2.83.1L17 42.43V91c0 1.1.9 2 2 2h62c1.1 0 2-.9 2-2V42.43l8.64 8.04c.38.35.87.53 1.36.53.54 0 1.07-.21 1.46-.64.76-.81.71-2.07-.1-2.82zM69 18h6v11.52l-6-5.58V18zM39 89V59h20v30H39zm40-50v50H63V57c0-1.1-.9-2-2-2H37c-1.1 0-2 .9-2 2v32H21V39c0-.09-.02-.18-.03-.27l29.03-27 29.03 27c-.01.09-.03.18-.03.27z" />
      <Text
        y={126}
        x={15}
        fontSize={26}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fill="#7A7A7A"
      >
        {"HOME"}
      </Text>
    </Svg>
  )
}

export default HomeIcon
