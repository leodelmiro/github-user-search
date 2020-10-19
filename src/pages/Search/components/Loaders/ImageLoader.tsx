import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="10" rx="2" ry="2" width="275" height="265" /> 
    <rect x="0" y="285" rx="0" ry="0" width="155" height="35" />
  </ContentLoader>
)

export default ImageLoader