import React, { Component, Fragment } from 'react';
import ImageContainer  from './components/ImageContainer'
import MenuBar  from './components/MenuBar'

const imageList = [
  {imageId : 'id_1',
  desc:'this is test image 1',
  src:'https://picsum.photos/200/300/?image=0'
  },
  {imageId : 'id_2',
  desc:'this is test image 2',
  src:'https://picsum.photos/200/300/?image=1'
  },
  {imageId : 'id_3',
  desc:'this is test image 3',
  src:'https://picsum.photos/200/300/?image=2'
  },
  {imageId : 'id_4',
  desc:'this is test image 4',
  src:'https://picsum.photos/200/300/?image=3'
  },
  {imageId : 'id_4',
  desc:'this is test image 5',
  src:'https://picsum.photos/200/300/?image=4'
  },
  {imageId : 'id_5',
  desc:'this is test image 6',
  src:'https://picsum.photos/200/300/?image=5'
  },
  {imageId : 'id_6',
  desc:'this is test image 7',
  src:'https://picsum.photos/200/300/?image=6'
  },
  {imageId : 'id_7',
  desc:'this is test image 8',
  src:'https://picsum.photos/200/300/?image=7'
  },
  {imageId : 'id_8',
  desc:'this is test image 9',
  src:'https://picsum.photos/200/300/?image=8'
  },
  {imageId : 'id_9',
  desc:'this is test image 10',
  src:'https://picsum.photos/200/300/?image=9'
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
