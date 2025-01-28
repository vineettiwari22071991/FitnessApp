import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"; // <-- Added Text import
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";
import { IndividualBodyPartExercisesModel } from "../contants/paramModel";
import Animated, { FadeInDown } from "react-native-reanimated";

type ExercisesListProps = {
    data: IndividualBodyPartExercisesModel[];
    handleClickEvent: (item: IndividualBodyPartExercisesModel) => void
};

export const ExercisesList: React.FC<ExercisesListProps> = ({ data, handleClickEvent }) => {


    return (
        <FlatList
            keyExtractor={(item) => item.name}
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer} // Apply minimal padding for the container
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item, index }) => (
                <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
                    <TouchableOpacity style={styles.itemContainer}
                        onPress={() => handleClickEvent(item)}
                    >
                        <FastImage
                            source={{ uri: item.gifUrl, priority: FastImage.priority.normal }}
                            style={styles.itemImage}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <LinearGradient
                            colors={["transparent", "rgba(0,0,0,0.9)"]}
                            style={styles.linearGradient}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                        />
                        {/* <Text> component added here to wrap the text */}
                        <Text style={styles.itemText}>
                            {item.name.length > 20 ? item.name.slice(0, 9) + "..." : item.name}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10, // Minimal padding for aesthetics
    },
    itemContainer: {
        width: wp(44),
        height: wp(52),
        padding: 5,
        marginBottom: 10,
    },
    itemImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    linearGradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,
    },
    itemText: {
        fontSize: hp(2.3),
        color: "white",
        fontWeight: "300",
        alignSelf: "center",
        letterSpacing: 2,
        position: "absolute",
        bottom: 0,
    },
});
