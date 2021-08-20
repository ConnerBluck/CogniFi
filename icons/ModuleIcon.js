import * as React from "react"
import Svg, { Circle, Path, G} from "react-native-svg"



function ModuleIcon(props) {
return (
<Svg height={"80px"} width={"80px"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" {...props}>
    <Path height="100%"
          width="100%" stroke="black" d="M5 24h22v3.5H5zM7 13h4v10H7zM21 13h4v10h-4zM16 2.5L4 10v2h7c0-2.757 2.243-5 5-5s5 2.243 5 5h7v-2L16 2.5zM14 16.576V23h4v-6.424c-.613.27-1.288.424-2 .424s-1.387-.154-2-.424z" />
    <Path height="100%"
          width="100%" stroke="black" d="M20 12c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4zm-3.601 2.341v.567h-.795v-.581a1.583 1.583 0 01-1.189-1.535h1.06v.132c0 .292.234.529.527.529s.527-.211.527-.503-.328-.409-.729-.542c-.852-.272-1.388-.675-1.388-1.468 0-.668.505-1.148 1.189-1.283v-.566h.795v.581a1.583 1.583 0 011.189 1.535h-1.061v-.132c0-.292-.233-.53-.526-.53s-.527.211-.527.503.267.396.727.542c.863.275 1.388.675 1.388 1.468.002.668-.503 1.148-1.187 1.283z" />
</Svg>
)
}



export default ModuleIcon