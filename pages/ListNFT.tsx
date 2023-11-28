import React, { CSSProperties } from 'react';

const ListNFT = () => {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const buttonStyle: CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>STEPS TO LIST YOUR NFTS</h1>
      <ul>
        <li>
          Deploy your NFT collection on any of our supported chains.
          {/* You can provide more details or links for deploying on specific chains */}
        </li>
        <li>
          Go to{' '}
          <button style={buttonStyle} onClick={() => window.open('/sell', '_blank')}>
            Sell Page
          </button>{' '}
          and fill the form.
          {/* Replace `<link>` with the actual link */}
        </li>
      </ul>
    </div>
  );
};

export default ListNFT;
