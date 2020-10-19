import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={900}
    height={300}
    viewBox="0 -5 900 285"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="10" y="-25" rx="2" ry="2" width="900" height="285" />
  </ContentLoader>
)

export default InfoLoader