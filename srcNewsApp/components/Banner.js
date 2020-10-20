import React, { useState } from 'react'
import { ScrollView, Image, Dimensions, View, Text, StyleSheet } from 'react-native'

const Banner = (props) => {
    const [bannerData, setBannerData] = useState(props.data);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                bannerData.map(item => {
                    return (
                        <View key={item.id} style={{ flex: 1 }}>
                            <Image

                                source={{ uri: item.imageUrl }}
                                style={{
                                    width: Dimensions.get('window').width * 0.90,
                                    height: Dimensions.get('window').height * 0.25,
                                    margin: 5,
                                    borderRadius: 5,
                                    flex: 1,

                                }}
                            />
                            <Text style={styles.text}>{item.text}</Text>
                        </View>


                    );
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        position: "absolute",
        bottom: 5,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignSelf: 'center'
    }
})


export default Banner

