import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Wrapper from "../components/Wapper";
import Card from "../components/Card";

class Search extends Component {
  state = {
    search: "",
    books: "",
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
 
  handleFormSubmit = event => {
    event.preventDefault();
    API.getBook(this.state.search.trim())
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items[1].volumeInfo);
        let bookDetial = [];
        for(let i =0; i<res.data.items.length; i++){
            bookDetial.push({
              title : res.data.items[i].volumeInfo.title,
              authors : res.data.items[i].volumeInfo.authors.toString(),
              description : res.data.items[i].volumeInfo.description,
              image : res.data.items[i].volumeInfo.imageLinks.smallThumbnail,
              link : res.data.items[i].volumeInfo.infoLink
            }
            
            )
        }
        console.log(bookDetial);
        this.setState({ results: bookDetial });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleFormSave = event =>{
      API.checkSaved(this.state.results[event])
      .then(res=>{
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
      })
  }
  displayCards = ()=>{
    return this.state.results.map((item, index) => (
        <Card title = {item.title} link = {item.link} description ={item.description} image = {item.image}  authors = {item.authors} value = {this.handleFormSave} index = {index}></Card>
    )
    );
  }
  render() {
    return (
      <div>
        <Wrapper style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Book!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleFormSave = {this.handleFormSave}
          />
         {this.displayCards()}
        </Wrapper>
      </div>
    );
  }
}

export default Search;
