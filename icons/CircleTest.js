import * as React from "react"
import Svg, { Circle, Text } from "react-native-svg"

function CircleTest(props) {
  return (
    <Svg fill={props.color} width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Circle cx="50%" cy="50%" r="50%" />
      <Text x="50%" y="50%" textAnchor="middle" alignmentBaseline="central" fill="black" stroke="black" fontSize="10">{props.name}</Text>
    </Svg>
  )
}

export default CircleTest
