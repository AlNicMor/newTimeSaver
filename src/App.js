import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FormControl } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import Select from 'react-select';
import createFilterOptions from 'react-select-fast-filter-options'
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

  constructor(props) {
    super(props);

    this.state = {
      result: null,
      filterOptions: null,
    };

    this.fetchTest = this.fetchTest.bind(this);
    this.setResult = this.setResult.bind(this);
    this.logChange = this.logChange.bind(this);
    this.setFilterOptions = this.setFilterOptions.bind(this);
  }

  setResult(result) {
    this.setState({ result });
  }

  setFilterOptions(result){
    const filterOptions = createFilterOptions({ result })
    this.setState({filterOptions});
  }

  logChange(val) {
    console.log("Selected: " + val);
  }

  fetchTest() {
    axios.get('https://dev.quadminds.com/timeSaver.php', {
      params: {
        action: 'getUserIdList',
        key: '0195e692c9a946e1b59f383ec3844bcd'
      }
    })
      .then(response => {
        this.setResult(response.data);
        this.setFilterOptions(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
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
                <Select
                    filterOptions={this.state.filterOptions}
                    name="form-field-name"
                    value="one"
                    options={this.state.result}
                    onChange={this.logChange}
                    valueKey='id'
                    labelKey='id'
                />
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
