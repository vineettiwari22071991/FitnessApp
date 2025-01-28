import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ImageSlider from "../components/imageSlider";
import { BodyParts } from "../components/bodyParts";

const { width, height } = Dimensions.get('window');

export const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <View>
                    <Text style={styles.titleText}>READY TO</Text>
                    <Text style={styles.subtitleText}>WORKOUT</Text>
                </View>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../../assets/avatar.png')}
                        style={styles.avatarImage}
                    />
                    <View style={styles.notificationContainer}>
                        <Image
                            source={require('../../assets/notification.png')}
                            style={styles.notificationIcon}
                        />
                    </View>
                </View>
            </View>

            {/* Image slider */}
            <View style={styles.imageSliderContainer}>
                <ImageSlider />
            </View>

            {/* Body Parts */}
            <BodyParts />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        alignItems: 'center',
        marginTop: hp(5),
    },
    titleText: {
        fontSize: hp(4.5),
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#404040',
    },
    subtitleText: {
        fontSize: hp(4.5),
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#f43f5e',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,
    },
    avatarImage: {
        height: hp(6),
        width: hp(6),
        borderRadius: 25,  // Circular shape
        alignSelf: 'center',
    },
    notificationContainer: {
        backgroundColor: '#f8f8f8',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: hp(5.5),
        height: hp(5.5),
        margin: 2,
        borderColor: '#d4d4d8',
        borderWidth: 1,
    },
    notificationIcon: {
        height: hp(3),
        width: hp(3),
    },
    imageSliderContainer: {
        height: hp(20),
    },
});
