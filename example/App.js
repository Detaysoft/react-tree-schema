import React from 'react';
import  Root from '../src/index.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Root childNodes={[
          { 
            name: 'React Takımı', 
            opened: true ,
            childNodes: [
              { 
                name: 'Team Leader', 
                childNodes: [
                  { name: 'Abdurrahman EKER' },
                ]
              },
              {
                name: 'Develepers', 
                childNodes: [
                  { name: 'Kübra TURAN' },
                  { name: 'Reyhan ÜNAL' },
                  { name: 'Osman PEKAYDIN' },
                ]
              },
            ]
          }
        ]}/>
      </div>
    )
  }
}

export default App;