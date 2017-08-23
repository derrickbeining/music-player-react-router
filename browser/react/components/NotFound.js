import React from 'react';

export default function NotFound ({location}) {

  return (
    <div>
      <h1>Sorry, we don't have "{location.pathname.substr(1)}"</h1>
      <p>Juke's tastes are a little more refined. Try again.</p>
    </div>
  )
}
