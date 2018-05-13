import React, { Component } from 'react';
import Image from './Image.js';
import Button from './Button.js';
import InfoText from './InfoText.js';
import Header from './Header.js';

class RandomGiphy extends Component {

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
    this.url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
    console.log(this.url);
    fetch(this.url)
        .then((data) => {
            return data.json();
        })
        .then((json) => { 
            console.log(json);
            this.setState({json:json});
            this.setState({imageUrl:this.state.json.data.fixed_height_downsampled_url});
            this.setState({loaded: true});     
        })
    ;
}

newPicture = () => {
    this.setState({url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"});
    console.log(this.url);
    fetch(this.url)
        .then((data) => {
            return data.json();
        })
        .then((json) => { 
            console.log(json);
            this.setState({json:json});
            this.setState({imageUrl:this.state.json.data.fixed_height_downsampled_url});
        })
    ;
}
render() {
    return (
        <div className="pageContainer">
            <Header headerText="Random Giphy" headerClass="sideHeader"/>
            {this.state.loaded ? (
            <div className="imageContainer imageContainer2">
                <Image url={this.state.imageUrl}/>
                <Button newPicture = {this.newPicture} buttonText="New picture" />
                <InfoText infoText="I don't take responsibility for giphys shown on this site. There is no filter on the random giphys."/>
            </div>

            ) : (
                <div className="imageContainer"><i className="fa fa-spinner" aria-hidden="true"></i></div>
            )}
        </div>
     );
  }
}

export default RandomGiphy;