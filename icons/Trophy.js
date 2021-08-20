import * as React from "react"
import Svg, { Path, Text } from "react-native-svg"

function Trophy(props) {
    return (
        <Svg fill="black" width="120px" height="120px" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path x="50%" y="50%" fill-rule="nonzero" fill="gold" stroke="black" d="M28.8 47.9c.6 1.8 1.4 3.5 2.5 5.1-3.2-1.6-5.8-3.7-7.7-6.4-5.9-8.5-2.8-19.2-2.6-19.6.2-.6.8-1.1 1.4-1.1h5.3v3h-4.1c-.6 2.7-1.6 10.2 2.4 16 .8 1.1 1.7 2.1 2.8 3zM79.1 27c-.2-.6-.8-1.1-1.4-1.1h-5.3v3h4.1c.6 2.7 1.6 10.2-2.5 16-.8 1.1-1.7 2.1-2.7 3-.6 1.8-1.4 3.5-2.5 5.1 3.2-1.6 5.8-3.7 7.7-6.4 5.8-8.4 2.7-19.2 2.6-19.6zM55.2 60.6v6.1h6.9c.8 0 1.5.7 1.5 1.5v9.2c0 .8-.7 1.5-1.5 1.5H37.9c-.8 0-1.5-.7-1.5-1.5v-9.2c0-.8.7-1.5 1.5-1.5h6.9v-6.1C36 58.3 29.7 50.2 29.7 40.9V22.6c0-.8.7-1.5 1.5-1.5h37.7c.8 0 1.5.7 1.5 1.5v18.3c0 9.3-6.3 17.4-15.2 19.7zm-15.8 9.1v6.2h21.2v-6.2H39.4zm28-28.8V24.1H32.6v16.8c0 8.2 5.9 15.4 13.9 17 .7.1 1.2.8 1.2 1.5v7.3h4.4v-7.3c0-.7.5-1.3 1.2-1.5 8.2-1.6 14.1-8.7 14.1-17z" />
            <Text x="43%" y="80%" textAnchor="middle" alignmentBaseline="central" fill="black" stroke="black" fontSize="10">Finish First Quiz</Text>
        </Svg>
    )
}

export default Trophy
