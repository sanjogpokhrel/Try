import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";

//import Menu from './menu.js';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
     //console.log("posts", posts)
      this.setState({posts: posts})
    })
  }
  deleteRow(id){
    const index = this.state.posts.findIndex(post => {
      return post.id === id 
    })
    console.log("index", index)
  }

render(){
  
  const columns = [
    {
      Header: "Entry Date",
      columns: [
        {
      Header: "Patient ID",
      accessor: "userId",
      style: {
      textAlign: "right"
      },
      width: 100,
      maxWidth: 100,
      minWidth: 100
    },
    
    {
      Header: "Date",
      accessor: "userId",
      style: {
      textAlign: "right"
      },
      width: 100,
      maxWidth: 100,
      minWidth: 100
    },
  ],
},
{
  Header: 'INFO',
  columns: [

    {
      Header: "Age",
      accessor: "userId",
      sortable: false,
      filterable: false
    },
    {
      Header: "Length",
      accessor: "title",
      sortable: false,
      filterable: false
    },
    {
      Header: "Weight",
      accessor: "title",
      sortable: false,
      filterable: false
    },
    {
      Header: "Head Curcumferance",
      accessor: "title",
      sortable: false,
      filterable: false
    },
  ],
},
    {
      Header: "BMI",
      accessor: "body",
      sortable: false,
      filterable: false
    },
    {
      Header: "Bone Age",
      accessor: "body",
      sortable: false,
      filterable: false
    },
    {
      Header: "Actions(if needed)",
     Cell: props => {
       return(
         <button style={{backgroundColor: "red", color: "#fefef"}}
         onClick={(() =>{
           this.deleteRow(props.original.id);
         } )}
         >Action button</button>
       )
     },
     sortable: false,
      filterable: false,
      width: 150,
      maxWidth: 150,
      minWidth: 150
    }
  ]
  return(
    <ReactTable
      columns={columns}
      data={this.state.posts}
      filterable
      sortable
      defaultPageSize={20}
      showPaginationTop={false}
     showPaginationBottom={true}
    >
    </ReactTable>
  );
}

}

export default App;