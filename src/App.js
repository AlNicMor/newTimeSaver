import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {FormControl} from 'react-bootstrap';
import './App.css';


// const usuarioById = () =>




// const fetchTest = () =>{

// axios.post('https://saas.quadminds.com/timeSaver.php', {
//     o: 'h',
//     u: '1316',
//     key: 'f76fa8021eac1dd37a004c84ac1e7705'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// }

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    result : null,
  };

  this.fetchTest = this.fetchTest.bind(this);
  this.setResult = this.setResult.bind(this);
}

setResult(result){
  this.setState({result});
}

fetchTest(){
axios.post('https://dev.quadminds.com/timeSaver.php', {
    o: 'h',
    u: '1316',
    key: 'f76fa8021eac1dd37a004c84ac1e7705'
})
  .then(response => this.setResult(response))
  .catch(function (error) {
    console.log(error);
  });

}

componentDidMount(){
  this.fetchTest();
}


  render() {
    return (
 <div>
        <Grid>
          <Row>
            <Col md={6}>
              <h2>Heading</h2>
              <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?</p>
                        <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
            </Col>
            <Col md={6}>
              <h2>Heading</h2>
              <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</p>
              <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
