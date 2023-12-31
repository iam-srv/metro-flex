import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'
const SimilarExercises = ({ targetMuscleExercises, equipmentExercise }) => {
    // console.log('similar exercise', targetMuscleExercises);
    console.log('similar exercise', equipmentExercise);

    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>

            <Typography variant='h3' mb={5}>
                Exercises that target the same muscle group
            </Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises} />}
                <Loader />
            </Stack>

            <Typography variant='h3' mb={5}>
                Exercises that target the same equipment group
            </Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {equipmentExercise?.length && <HorizontalScrollBar data={equipmentExercise} />}
                <Loader />
            </Stack>
        </Box>
    )
}

export default SimilarExercises