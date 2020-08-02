import React, { Component } from 'react';
import background from '../../img/background.jpg';

class Home extends Component {
    render() {

        const pic = {
            width: "100%",
            height: "auto"
        }

        return (
            <div>
                <div className="background-img"><img className="background" style={pic} src={background}></img></div>
            </div>
        )
    }
}

export default Home;