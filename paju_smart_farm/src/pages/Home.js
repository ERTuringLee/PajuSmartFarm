import React, {Component} from 'react';
import Header from '../components/home/Header'
import ImportantData from '../components/home/ImportantData';
import Control from '../components/home/Control';
import Observation from '../components/home/Observation'

class Home extends Component {
    render () {
        return (
            <div>
                <Header></Header>
                <ImportantData></ImportantData>
                <Control></Control>
                <Observation></Observation>
            </div>
        );
    }
};

export default Home;