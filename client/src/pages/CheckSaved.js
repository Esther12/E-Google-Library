import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wapper";
import Card from "../components/Card";

class CheckSaved extends Component {

    state = {
        books : []
    }
    getBook = () =>{
        console.log("geting the book");
        API.checkSaved()
        .then(res=>{
            this.setState({ books : res.data});
        })
    };
    componentDidMount() {
        this.getBook();
      }
    displayCards = ()=>{
      return this.state.books.map(item => (
          <Card title = {item.title} link = {item.link} description ={item.description} image = {item.image}  authors = {item.authors}></Card>
      )
      );
    }
    render() {
      return (
        <div>
          <Wrapper style={{ minHeight: "80%" }}>
            <h1 className="text-center">Saved Book!</h1>
            {this.displayCards()}
          </Wrapper>
        </div>
      );
    }
  }
  
  export default CheckSaved;