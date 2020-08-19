import React from 'react'
import styled, { css } from 'styled-components'

const Loader = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  & > * {
    width: 72px;
  }

  ${props =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`

const LocalLoader = ({ fill }) => {
  return (
    <Loader fill={fill} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img src={require('./loading.gif')} alt="loading-icon" />
      <div>Loading...</div>
    </Loader>
  )
}

export default LocalLoader
