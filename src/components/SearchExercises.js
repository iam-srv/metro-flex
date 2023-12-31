import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);


    // fetching the categories
    useEffect(() => {

        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1400', exerciseOptions)
            console.log(exercisesData);


            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack alignItems='center' mt='37px' justifyContent='center'
            p='20px'
        >
            <Typography fontWeight={800} sx={{
                fontSize: { lg: '44px', xs: '30px' }
            }} mb='50px' textAlign='center' lineHeight={1.5}>
                Awesome Exercises you <br />
                Should know
            </Typography>
            <Box>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700', border: 'none', borderRadius: '4px',
                        },
                        height: '76px',
                        width: { lg: '800px', xs: '350px' },
                        background: '#fff',
                        borderRadius: '100px'
                    }}
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn' sx={{
                    bgcolor: '#ff2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px' },
                    fontSize: { lg: '20px', xs: '14px' },
                    height: '56px',
                    position: 'absolute'
                }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{
                position: 'relative', width: '100%', p: '20px'
            }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
            </Box>
        </Stack>
    )
}

export default SearchExercises