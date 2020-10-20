import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const NewsCard = (props) => {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.news.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{props.news.title}</Text>
            <Text style={styles.desc}>{'\t\t' + props.news.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.45,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'orange'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 5
    },
    desc: {
        margin: 5,

    },
    image: {
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 5,
    }
});

export { NewsCard };