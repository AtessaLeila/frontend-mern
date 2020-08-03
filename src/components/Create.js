import React, { Component } from 'react';
import axios from 'axios';


class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            author: '',
            title: '',
            description: ''
        }
    }

    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("form submitted");
        console.log(`author: ${this.state.author}`);
        console.log(`title: ${this.state.title}`);
        console.log(`description: ${this.state.description}`);

        const newArticle = {
            author: this.state.author,
            title: this.state.title,
            description: this.state.description
        }

        axios.post('https://calm-reaches-73008.herokuapp.com/create/', newArticle)
            .then(res => console.log(res.data));

        this.setState({
            author: '',
            title: '',
            description: ''
        })

        this.props.history.push('/article');
    }


    render() {
        return (
            <div style={{ marginLeft: "150px", marginRight: "150px" }}>
                <h2>Create New Article</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor} />
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle} />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>

            </div >
        )
    }
}

export default Create;