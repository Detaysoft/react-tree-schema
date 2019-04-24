# react-tree-schema
React.js ile yazılmış tree yapısı.

# Mimari Resmi
React.js ile tree yapısını kullanabilmek için yazılan repodur.

![image (1)](https://user-images.githubusercontent.com/30048977/56694176-cd0de400-66ee-11e9-9984-6ef9846e7090.png)

# Components

## Root Component

```javascript
import React from 'react'
import Root from 'react-tree-schema'

const Tree = () => (
  <Root childNodes={[
    { name: 'React Takımı', opened: true},
    { name: 'Team Leader', childNodes: [
      { name: 'Abdurrahman EKER' },
    ]},
    { name: 'Develepers', childNodes: [
      { name: 'Kübra TURAN' },
      { name: 'Reyhan ÜNAL' },
      { name: 'Osman PEKAYDIN' },
    ]},
  ]} />
)
```
#### Root props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| name | none | string | Node title |
| opened | false | boolean | visible nodes of the noden  |
| icon | none | object | icon of node |
| onClick | none | function | Node on click |

