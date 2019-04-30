# react-tree-schema
Tree component for React.js apps.

![image (1)](demo.gif)
# Install

```javascript

npm install react-tree-schema

```
# Architecture
![image (1)](https://user-images.githubusercontent.com/30048977/56694176-cd0de400-66ee-11e9-9984-6ef9846e7090.png)

# Components

## Root Component

```javascript
import React from 'react'
import Root from 'react-tree-schema'

const Tree = () => (
  <Root childNodes={[
    { 
      name: 'React Team',
      opened: true ,
      childNodes: [
        { 
          name: 'Team Leader', 
          childNodes: [
            { name: 'Abdurrahman EKER' },
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
)
```
#### Root props
| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| name | none | string | Node title |
| childNodes | none | array | Node items |
| opened | false | boolean | visible nodes of the noden  |
| icon | none | object | icon of node |
| onClick | none | function | Node on click |
| onContextMenu | none | function | Node on context menu |


### Child Node Item
| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| name | none | string | Node title |
| childNodes | none | array | Node items |
| opened | false | boolean | visible nodes of the noden  |
| icon | none | object | icon of node |
| onClick | none | function | Node on click |
| onContextMenu | none | function | Node on context menu |
