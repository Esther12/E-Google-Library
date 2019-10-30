import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wapper";
import Card from "../components/SavedBookCard";

class CheckSaved extends Component {
  state = {
    books: [],
    refresh: 1
  };
  getBook = () => {
    console.log("geting the book");
    API.checkSaved().then(res => {
      this.setState({ books: res.data });
    });
  };
  componentDidMount() {
    this.getBook();
  }
  handleFormDelete = event => {
    console.log(event);
    API.delateBook(event).then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.getBook();
    });
  };
  displayCards = () => {
    return this.state.books.map(item => (
      <Card
        id={item._id}
        title={item.title}
        link={item.link}
        description={item.description}
        image={item.image}
        authors={item.authors}
        handleFormDelete={this.handleFormDelete}
      ></Card>
    ));
  };
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
