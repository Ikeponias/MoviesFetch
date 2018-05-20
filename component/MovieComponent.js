import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class MovieComponent extends Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        return (
            <View style={ styles.item }>
                <Text style={ styles.itemText }>
                    { this.props.item.title }
                </Text>
                <Text style={ styles.itemText }>
                    { this.props.item.releaseYear }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 10,
        height: 44,
        borderBottomWidth: 1,
    },
    itemText: {
        fontSize: 18,
    }
});
