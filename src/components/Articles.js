import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Articles.css';

const Index = props => (
    <div>
        <div>{props.article.author}</div>
        <div>{props.article.title}</div>
        <div>{props.article.description}</div>
        {/* <div>
            <Link to={"/update/" + props.article._id}>Edit</Link>
        </div> */}
        <div>
            <Link to={"/index/" + props.article._id}>Get Article</Link>
        </div>
    </div>
)


class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = { articles: [] };
    }

    componentDidMount() {
        axios.get('https://calm-reaches-73008.herokuapp.com/article')
            .then(response => {
                this.setState({ articles: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('https://calm-reaches-73008.herokuapp.com/article')
            .then(response => {
                this.setState({ articles: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    articlesList() {
        return this.state.articles.map(function (currentArticle, i) {
            return <Index article={currentArticle} key={i} />
        })
    }


    render() {
        return (
            <div>
                <h3>Articles List</h3>
                <div className="col">
                    {this.articlesList()}
                </div>
            </div>
        )
    }
}

export default Articles;