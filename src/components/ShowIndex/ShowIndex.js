import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ShowIndex.css';




class ShowIndex extends Component {
    constructor(props) {
        super(props);

        this.deleteArticle = this.deleteArticle.bind(this);

        this.state = {
            author: '',
            title: '',
            description: '',
            url: '',
            urlToImage: ''
        }
    }

    componentDidMount() {
        axios.get('https://calm-reaches-73008.herokuapp.com/article/index/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    author: response.data.author,
                    title: response.data.title,
                    description: response.data.description,
                    url: response.data.url,
                    urlToImage: response.data.urlToImage
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }



    deleteArticle() {
        axios.delete('https://calm-reaches-73008.herokuapp.com/delete/' + this.props.match.params.id)
            .then((res) => {
                console.log('Article successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        this.props.history.push('/article');
    }



    render() {

        const editLink = {
            backgroundColor: "#EFEFEF",
            color: "black",
            border: "1px solid black",
            padding: "5px 5px"
        }
        return (
            <div>
                <h4>Author: </h4>
                <h6>{this.state.author}</h6>
                <h4>Title: </h4>
                <h6>{this.state.title}</h6>
                <h4>Description: </h4>
                <h6>{this.state.description}</h6>

                <div>
                    <Router>
                        <h4>URL: </h4>
                        <Route path="/wsjarticle" render={() => (window.location = `${this.state.url}`)} />
                        <Link style={{ display: "block", marginLeft: "100px", marginRight: "100px" }} to="/wsjarticle">{this.state.url}</Link>
                        <h4>URL to Image: </h4>
                        <Route path="/image" render={() => (window.location = `${this.state.urlToImage}`)} />
                        <Link style={{ display: "block", marginLeft: "100px", marginRight: "100px", marginBottom: "40px" }} to="/image">{this.state.urlToImage}</Link>
                    </Router>
                </div>



                <button style={{ marginLeft: "100px" }} onClick={this.deleteArticle}>Delete</button>
                <Link style={editLink} to={"/update/" + this.props.match.params.id}>Edit</Link>
            </div>
        )
    }
}

export default ShowIndex;