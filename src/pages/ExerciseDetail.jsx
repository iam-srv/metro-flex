
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { UNSAFE_DataRouterStateContext, useParams } from 'react-router'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'


const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});

    const [exerciseVideos, setExerciseVideos] = useState([]);

    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

    const [equipmentExercises, setEquipmentExercises] = useState([]);


    const { id } = useParams();


    useEffect(() => {
        const fetchExercises = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipmentExercises(equipmentExerciseData);
            // console.log("equipmentExerciseData", equipmentExerciseData)

        }
        fetchExercises();
        // console.log(exerciseDetail);
    }, [id])

    return (


        <Box>
            <Details exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercise={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail