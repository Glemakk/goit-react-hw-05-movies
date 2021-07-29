import React from 'react'
import SpinnerLoader from 'react-loader-spinner'
import { ReactLoader } from './Loader.styled'

function Loader() {
  return (
    <ReactLoader>
      <SpinnerLoader
        type="MutatingDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </ReactLoader>
  )
}

export default Loader
