import { BodyExercisesModel, IndividualBodyPartExercisesModel } from "../contants/paramModel"

export type RootStackParamList ={
    InroScreen: undefined,
    HomeScreen: undefined,
    ExercisesScreen: BodyExercisesModel,
    ExercisesDetailScreen: IndividualBodyPartExercisesModel

}