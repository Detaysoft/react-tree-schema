import React from 'react';
import  Root from '../src/index.js';
import Icons from '../src/icons';

class App extends React.Component {
  render() {
    return (
      <div>
        <Root childNodes={[
          { 
            name: 'React Team',
            dropdown: <Icons.CaretRight/>,
            opened: true ,
            childNodes: [
              { 
                name: 'Team Leader', 
                dropdown: <Icons.CaretRight/>,
                childNodes: [
                  { name: 'Abdurrahman EKER',
                  dropdown: <Icons.CaretRight/>,
                 },
                ]
              },
              {
                name: 'Developers', 
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