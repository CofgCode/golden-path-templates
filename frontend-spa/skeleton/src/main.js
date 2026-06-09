import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    React.createElement('div', { style: { fontFamily: 'sans-serif', padding: '2rem' } },
      React.createElement('h1', null, '${{ values.component_id }}'),
      React.createElement('p', null, '${{ values.description }}'),
      React.createElement('p', null, `Owner: ${{ values.owner }}`),
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);