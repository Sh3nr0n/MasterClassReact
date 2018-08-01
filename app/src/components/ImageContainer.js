import React, { Component, Fragment } from "react";
import {
  Container,
  Image,
  Segment,
  Header,
  Modal,
  Icon,
  Button,
  Form
} from "semantic-ui-react";

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlPreview: ""
    };
  }

  render() {
    const { images } = this.props;
    console.log("images are", images);

    return (
      <Fragment>
        <Container fluid>
          <Segment padded>
            <Image.Group size="small">
              {images.map((image, i) => {
                return (
                  <Modal
                    key={i}
                    trigger={<Image src={image.src} alt="image" size="tiny" />}
                  >
                    <Modal.Header>
                      This image id is : {image.imageId}
                    </Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size="medium" src={image.src} />
                      <Modal.Description>
                        <Header>This is a header/title</Header>
                        <p>{image.desc}</p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                );
              })}
            </Image.Group>
            <Modal
              trigger={
                <Button
                  icon
                  circular
                  floated="right"
                  size="large"
                  color="green"
                >
                  <Icon name="plus" size="large" color="white" />
                </Button>
              }
            >
              <Modal.Header>Selectionnez une Image</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Form>
                    <Form.Field>
                      <label>URL</label>
                      <input placeholder="URL de l'image" />
                    </Form.Field>
                    <Form.Field>
                      <label>description</label>
                      <input placeholder="Entrez une description" />
                    </Form.Field>
                    <Button type="submit" floated="right">
                      Valider
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default ImageContainer;
