import React from 'react';
import MediaQuery from 'react-responsive';

export default function Jumbotron({ bgp, pathname, landing, img, children }) {
  const styles = {
    backgroundSize: 'cover',
    backgroundPosition: bgp ? bgp : 'center 20%',
  };

  const scrim = `
    linear-gradient(to bottom,rgba(255,255,255,.8) 0,
    rgba(255,255,255,.6) 100%)
  `;

  return (
    <div className="jumbotron-container">
      <MediaQuery minWidth={1201}>
        <div
          className={`jumbotron ${landing ? 'landing' : null}`}
          style={{
            ...styles,
            'backgroundImage': `url(${img})`,
          }}
        >
          <div className="wrap">{children}</div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1200}>
        <div
          className={`jumbotron ${landing ? 'landing' : null}`}
          style={{
            ...styles,
            'backgroundImage': `${scrim}, url(${img})`,
          }}
        >
          <div className="wrap">{children}</div>
        </div>
      </MediaQuery>
    </div>
  );
}
