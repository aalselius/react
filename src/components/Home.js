import React, { Component } from 'react';
import Image from './Image.js';
import ImageHeader from './ImageHeader.js';
import InfoText from './InfoText.js';
import Header from './Header.js';


class Home extends Component {

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
    this.url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
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
            <Header headerText="Home" headerClass="sideHeader"/>
            <ImageHeader text="Popular Giphy"/>
            {this.state.loaded ? (
                <div>
            <div className="imageContainer">
                <i className="fa fa-angle-left" onClick={()=>this.changeLink("left")}></i>
                <Image url={this.state.imageUrl}/>
                <i className="fa fa-angle-right" onClick={()=>this.changeLink("right")}></i>
            </div>
            <InfoText infoText="I don't take responsibility for giphys shown on this site. There is no filter on the giphys."/>
           </div>
            ) : (
                <div className="imageContainer"><i className="fa fa-spinner" aria-hidden="true"></i></div>
            )}
        </div>
        
     );
  }
}

export default Home;