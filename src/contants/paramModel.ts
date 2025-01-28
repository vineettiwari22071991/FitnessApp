import { ImageSourcePropType } from 'react-native';
export type BodyExercisesModel = {
    name: string,
    image: ImageSourcePropType
}

export type IndividualBodyPartExercisesModel = {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: number,
    name: string,
    target: string,
    secondaryMuscles: string[],
    instructions: string[]
}
