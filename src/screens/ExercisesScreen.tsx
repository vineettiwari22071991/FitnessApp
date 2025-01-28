import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { RouteProp } from "@react-navigation/native";
import { fecthExercisesByBodyPart } from "../api/ExercisesDB";
import { IndividualBodyPartExercisesModel } from "../contants/paramModel";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ExercisesList } from "../components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";


type ExercisesScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'ExercisesScreen'>
type ExercisesScreenRouteProp = RouteProp<RootStackParamList, 'ExercisesScreen'>
type ExercisesScreenProps = {
    navigation: ExercisesScreenNavigationProps,
    route: ExercisesScreenRouteProp,
}
export const ExercisesScreen: React.FC<ExercisesScreenProps> = ({ route, navigation }) => {

    const { name, image } = route.params
    const [exercises, setExercises] = useState<IndividualBodyPartExercisesModel[]>([])

    useEffect(() => {
        getExercises(name)
    }, [name])


    const getExercises = async (bodyParts: string) => {
        let data = await fecthExercisesByBodyPart(bodyParts)
        setExercises(data)

    }

    const handleClickEvent = (item: IndividualBodyPartExercisesModel)=> {
        console.log("data", item)
        navigation.push('ExercisesDetailScreen', item)
    }
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <StatusBar style="light" />
            <Image
                source={image}
                style={{
                    width: wp(100),
                    height: hp(45),
                    borderBottomRightRadius:20,
                    borderBottomLeftRadius:20
                }}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    marginStart: 5
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../../assets/arrow_back.png')}
                    style={{
                        height: hp(5.5),
                        width: hp(5.5),
                        marginTop: hp(5)
                    }}
                />
            </TouchableOpacity>

            <View style={{
                marginHorizontal: 4,
                marginTop: 4
            }}>
                <Text style={{
                    fontSize: hp(3),
                    fontWeight: 'bold',
                    color: '#4B5563',
                    marginBottom: 10
                }}>{name} exercises</Text>


            </View>

            
            {exercises.length > 0 && <ExercisesList data={exercises} handleClickEvent={handleClickEvent}/>}
        </SafeAreaView>
    )
}