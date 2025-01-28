import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";
import Animated, { FadeInDown } from "react-native-reanimated";
type ExercisesRouteProps = RouteProp<RootStackParamList, 'ExercisesDetailScreen'>
type ExercisesDetailsProp = {
    route: ExercisesRouteProps
}
export const ExercisesDetails: React.FC<ExercisesDetailsProp> = ({ route }) => {
    const navigation = useNavigation()
    const item = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.modalContent}>
                <FastImage
                    source={{ uri: item.gifUrl, priority: FastImage.priority.normal }}
                    style={styles.itemImage}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        margin: 5
                    }}
                >

                    <Image
                        source={require('../../assets/close.png')}
                        style={{
                            width: wp(8),
                            height: wp(8)
                        }}
                    />
                </TouchableOpacity>

                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom:40
                }}
                >

                    <View style={{
                        flexDirection: 'row',
                        margin: 5,
                        paddingEnd: 2
                    }}>
                        <Animated.Text
                         entering={FadeInDown.duration(400).springify()}
                        style={{
                            fontSize: hp(1.7),
                            fontWeight: 'semibold',
                            letterSpacing: 2,
                            color: 'black'
                        }}>
                            Equipment:
                        </Animated.Text>
                        <Animated.Text
                         entering={FadeInDown.duration(400).springify()}

                            style={{
                                fontSize: hp(1.7),
                                color: '#4B5563',
                                marginStart: 2
                            }}
                        >
                            {item.equipment}
                        </Animated.Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        margin: 5,
                        paddingEnd: 2
                    }}>
                        <Animated.Text 
                        entering={FadeInDown.delay(100).duration(400).springify()}
                        style={{
                            fontSize: hp(1.7),
                            fontWeight: 'semibold',
                            letterSpacing: 2,
                            color: 'black'
                        }}>
                            Secondary Muscles:
                        </Animated.Text >
                        {
                            item.secondaryMuscles.map((value, index) => {
                                return (
                                    <Animated.Text 
                                    entering={FadeInDown.delay(100).duration(400).springify()}

                                        style={{
                                            fontSize: hp(1.7),
                                            color: '#4B5563',
                                            marginStart: 2,
                                            paddingStart: 2,
                                            paddingEnd: 2
                                        }}
                                    >
                                        {value}
                                    </Animated.Text>
                                )
                            })
                        }

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        margin: 5,
                        paddingEnd: 2
                    }}>
                        <Animated.Text 
                        entering={FadeInDown.delay(200).duration(400).springify()} style={{
                            fontSize: hp(1.7),
                            fontWeight: 'semibold',
                            letterSpacing: 2,
                            color: 'black'
                        }}>
                            Target:
                        </Animated.Text>
                        <Animated.Text 
                        entering={FadeInDown.delay(200).duration(400).springify()}

                            style={{
                                fontSize: hp(1.7),
                                color: '#4B5563',
                                marginStart: 2
                            }}
                        >
                            {item.target}
                        </Animated.Text>
                    </View>

                    <View style={{
                        paddingBottom: 20
                    }}>
                        <Animated.Text 
                        entering={FadeInDown.delay(300).duration(400).springify()} style={{
                            fontSize: hp(3),
                            fontWeight: 'semibold',
                            letterSpacing: 2,
                            color: 'black',
                            marginStart: 5,
                        }}>
                            Instructions:
                        </Animated.Text>
                        {
                            item.instructions.map((instruction, index) => {
                                return (
                                    <Animated.Text 
                                    entering={FadeInDown.delay(index * 500).duration(400).springify()}
                                        key={instruction}
                                        style={{
                                            fontSize: hp(1.7),
                                            color: '#4B5563',
                                            margin: 5
                                        }}
                                    >
                                        {
                                            `${index + 1}. ${instruction}`
                                        }
                                    </Animated.Text>
                                )
                            })
                        }
                    </View>


                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end", // Align to bottom of screen
        backgroundColor: 'rgba(0, 0, 0, 0.1)',


    },
    modalContent: {
        backgroundColor: "light gray",
        height: hp(90), // 90% of the screen height
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: "flex-start",
    },
    itemImage: {
        width: wp(100),
        height: wp(100),
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
});