import React, { Component, Fragment } from 'react';
import ImageContainer  from './components/ImageContainer'
import MenuBar  from './components/MenuBar'

const imageList = [
  {imageId : 'id_1',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_2',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_3',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_4',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_4',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_5',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_6',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_7',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_8',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  },
  {imageId : 'id_9',
  desc:'this is a test image',
  src:'https://picsum.photos/200/300/?random'
  }
];

class App extends Component {
  render() {
    return (
      <Fragment >
        <MenuBar/>
        <ImageContainer images={imageList}/>
        
      </Fragment>
    );
  }
}

export default App;
