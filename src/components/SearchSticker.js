import React, { Component } from 'react';
import Input from './Input.js';
import Image from './Image.js';
import InfoText from './InfoText.js';
import Header from './Header.js';



class SearchSticker extends Component {

    constructor() {
        super();

        this.state = {
            imageUrl: '',
            url:'',
            inputType: '',
            imageNumber: 0,
            json:'',
            images:[],
            text: 'cat',
            loaded: false,
        }
    }

componentDidMount() {
    this.url = "http://api.giphy.com/v1/stickers/search?q="+this.state.text+"&api_key=dc6zaTOxFJmzC";
    console.log(this.url);
    fetch(this.url)
        .then((data) => {
            return data.json();
        })
        .then((json) => { 
            console.log(json);
            this.setState({json:json});
            this.setState({imageUrl:this.state.json.data[0].images.downsized.url});
            this.setState({loaded: true});     
        })
    ;
}

updateUrl(category) {
       this.url = "http://api.giphy.com/v1/stickers/search?q="+this.state.text+"&api_key=dc6zaTOxFJmzC";
    console.log(this.url);
    fetch(this.url)
        .then((data) => {
            return data.json();
        })
        .then((json) => { 
            console.log(json);
            this.setState({json:json});
            this.setState({imageUrl:this.state.json.data[0].images.downsized.url});
        })
    ;
}
changeLink = (arrow) => {
    if (arrow === "left") {
        this.setState({imageNumber: this.state.imageNumber -1}); //previous state, if 0 => 25
        if (this.state.imageNumber <= 0) {
            this.setState({imageNumber: 24}); //previous state, if 0 => 25
        }
    } else  if (arrow === "right") {
        this.setState({imageNumber: this.state.imageNumber +1}); // previous state, if 25 => 0
        if (this.state.imageNumber >= 24) {
            this.setState({imageNumber: 0}); //previous state, if 0 => 25
        }
    }
    console.log(this.state.imageNumber);
    let xx=this.state.json;
    this.setState ({imageUrl:xx.data[this.state.imageNumber].images.downsized.url});
}

updateText = (event) => {
		this.setState({text: event.target.value})
}

handleSubmit = (event) => {
    if(event.keyCode === 13) {
        this.setState({text: event.target.value})			 
        console.log(this.state.text);
        // set new url
        this.updateUrl(this.state.text);
        event.target.value='';		 
    }
}


render() {
    return (
        <div className="pageContainer">
            <Header headerText="Find Sticker" headerClass="sideHeader"/>
            <Header headerText={this.state.text} headerClass="searchHeader"/>             
            {this.state.loaded ? (
            <div className="imageContainer">
                <i className="fa fa-angle-left" onClick={()=>this.changeLink("left")}></i>
                <Image url={this.state.imageUrl}/>
                <i className="fa fa-angle-right" onClick={()=>this.changeLink("right")}></i>
            </div>
            ) : (
                <div className="imageContainer"><i className="fa fa-spinner" aria-hidden="true"></i></div>
            )}
            <Input  
                inputType={'category'}
                handleSubmit = {this.handleSubmit}
                updateText = {this.updateText}
            /> 
            <InfoText infoText="To choose several categories write them separated by a +, no spaces." />
            <InfoText infoText="For exampel 'funny+spider'." />
        </div>
     );
  }
}

export default SearchSticker;