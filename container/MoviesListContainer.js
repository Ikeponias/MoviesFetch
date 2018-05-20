import React, { Component } from 'react';
import MoviesListComponent from '../component/MoviesListComponent';

export default class MoviesListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
    }

    componentDidMount() {
        this._fetch();
    }

    _fetch = () => {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((jsonData) => this.setState({ data: jsonData['movies'] }))
            .catch((error) => console.error(error));
    }

    render() {
        return (
            <MoviesListComponent data={ this.state.data } />
        );
    }
}
