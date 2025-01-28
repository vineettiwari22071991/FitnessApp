import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bodyParts } from '../contants'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { BodyExercisesModel } from "../contants/paramModel";
import Animated, { FadeInDown } from "react-native-reanimated";


export const BodyParts: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const onExercisesItemClick = (item: BodyExercisesModel) => {
        navigation.push("ExercisesScreen", item)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercises</Text>

            <FlatList
                keyExtractor={item => item.name}
                data={bodyParts}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => {
                    return (
                        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(2)}>
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => onExercisesItemClick(item)}
                            >
                                <Image
                                    source={item.image}
                                    style={styles.itemImage}
                                    resizeMode='cover'
                                />

                                <LinearGradient
                                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                                    style={styles.linearGradient}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                />
                                <Text style={{
                                    fontSize: hp(2.3),
                                    color: 'white',
                                    fontWeight: 'semibold',
                                    alignSelf: 'center',
                                    letterSpacing: 2,
                                    position: 'absolute',
                                    bottom: 0
                                }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>

                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
    },
    title: {
        fontSize: hp(3),
        fontWeight: 'semibold',
        color: '#4B5563',
        marginStart: 10
    },
    listContainer: {
        padding: 10,
        paddingBottom: 10,  // Avoiding hardcoded large padding
    },
    itemContainer: {
        width: wp(44),
        height: wp(52),
        padding: 5,
        marginBottom: 10,
    },
    itemImage: {
        width: wp(44),
        height: wp(52),
        borderRadius: 20,
        padding: 5,
    },
    linearGradient: {
        width: wp(44),
        height: wp(52),
        marginVertical: 8,
        elevation: 80,
        borderRadius: 20,
        position: 'absolute',
        padding: 5,
        marginBottom: 10,
    },
});
