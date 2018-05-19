import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import MovieComponent from './MovieComponent'

export default class MoviesListComponent extends Component {
    constructor (props) {
        super(props);
    }
    
    _keyExtractor = (item, index) => item.releaseYear;
    render() {
        return (
            <View>
                <FlatList
                    data={ this.props.data }
                    extraData={ this.props.data }
                    keyExtractor={ this._keyExtractor }
                    renderItem={({ item }) => <MovieComponent item={ item } />}
                />
            </View>
        );
    }
}