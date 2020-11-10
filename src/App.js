import '../src/Styles/App.css';
import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../src/Actions/Actions';
import TableList from '../src/Components/TableList';
import { Col, Row } from "react-bootstrap";
import TablePagination from '@material-ui/core/TablePagination';
// import green from '@material-ui/core/colors/green';

// const primary = green[500];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      count: 0
    }
  }
  
  componentDidMount() {
    return axios.get("http://jsonplaceholder.typicode.com/photos/?_limit=5&_start="+ this.state.startIndex)
      .then(res => {
        this.setState({
          items: res.data,
        }, () => {this.props.readAction(this.state.items)})
      })
  }

  deleteEntry = (id, index) => {
    this.props.deleteAction(id, index)
  }

  handleChangeRowsPerPage = () => {

  }

  onChangePage = (pageOfItems) => {
    // let newStartIndex = "", newpageIndex = "";
    //     if (pageOfItems === 1) {
    //         newStartIndex = 0;
    //         newpageIndex = 0;
    //     } else {
    //         newStartIndex = pageOfItems * 5 - 5;
    //         newpageIndex = pageOfItems - 1;
    //     } 

    return axios.get("http://jsonplaceholder.typicode.com/photos/?_limit=5&_start="+ this.state.startIndex)
    .then(res => {
      this.setState({
        items: res.data
      }, () => {this.props.readAction(this.state.items)})
    })
  }

  render(){

    return(
      <div>
        <Row>
          <TableList 
            id={this.props.id}
            data={this.props.arr} 
            delete={this.deleteEntry}/>
        </Row>
        <Row>
          <Col lg={12}>
          <TablePagination
            component="div"
            count={5000}
            page={10}
            onChangePage={this.onChangePage}
            rowsPerPage={5}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload, index} = state
  return {
    arr : payload,
    id : index
  }
}

export default connect(mapStateToProps, Actions)(App);