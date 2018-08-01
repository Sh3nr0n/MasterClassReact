import React, { Component, Fragment } from "react";
import { Container, Image, Segment, Header, Modal } from "semantic-ui-react";


class ImageContainer extends Component {
  render() {
      const {images} = this.props
      console.log('images are',images)
    return (
      <Fragment>
        <Container fluid>
        <Segment padded>
        <Image.Group size="small">
                        {images.map((image,i) => {
                            return (
                            <Modal
                                key={i} trigger={<Image src={image.src} alt="image" size='tiny' />}>
                                <Modal.Header>This image id is : {image.imageId}</Modal.Header>
                                <Modal.Content image>
                                    <Image wrapped size='medium' src={image.src} />
                                    <Modal.Description>
                                        <Header>This is a header/title</Header>
                                        <p>{image.desc}</p>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>)
                        })}                       
          </Image.Group>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default ImageContainer;
