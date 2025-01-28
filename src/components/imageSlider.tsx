//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { sliderImages } from '../contants';
import Carousel from 'react-native-reanimated-carousel';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8; // 80% of the screen width for the main item

// create a component
const ImageSlider: React.FC = () => {
    return (
        <View>
            <Carousel
                loop
                width={ITEM_WIDTH}
                height={height * 0.20}
                autoPlay={true}
                data={sliderImages}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => {
                    return (

                        <View style={styles.imageWrapper}>
                            <Image
                                source={item}
                                style={[styles.image]}
                                resizeMode='cover'
                            />
                        </View>
                    );
                }}
                style={{
                    alignItems: 'center', alignSelf: 'center',
                }}
            />
        </View>


    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        elevation: 5,
        backgroundColor: '#fff',
    },
    imageWrapper: {
        overflow: 'hidden',
        borderRadius: 15,
    },
    image: {
        width: width * 1.5,
        height: "100%"
    }
});


//make this component available to the app
export default ImageSlider;
