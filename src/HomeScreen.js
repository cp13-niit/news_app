import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_news: []
        }
        this.navigation = this.props.navigation;

        fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-17&sortBy=publishedAt&apiKey=33426eaf1f124fe0b7c3eb9277daa942')
            .then((data) => data.json())
            .then((data) => {
                console.log(data.articles)
                this.setState({ 'list_news': data.articles });
            })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => {
                this.navigation.push('Detail', {
                    title: item.title,
                    content: item.content,
                    author: item.author
                });
            }}>
                <View style={{ padding: 10, marginTop: 20, borderBottomColor: '#1f1f1f', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.author}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.list_news}
                renderItem={this.renderItem}
            />
        )
    }
}