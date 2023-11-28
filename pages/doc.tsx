import React, { CSSProperties } from 'react'

const doc = () => {
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      };
  return (
    <div style={containerStyle}><h1>Documentation Page</h1></div>
  )
}

export default doc