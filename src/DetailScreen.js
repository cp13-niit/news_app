import React from 'react';
import { Text, View } from 'react-native';

export default class DetailScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        let title = navigation.getParam('title');
        let content = navigation.getParam('content');
        let author = navigation.getParam('author');
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
                <Text style={{ fontSize: 26 }}>{content}</Text>
                <Text>{author}</Text>
            </View>
        )
    }
}