import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    // console.log(exerciseVideos);
    return (
        <Box sx={{ margin: { lg: '150px', xs: '20px' }, width: '100%', p: {} }} >
            <Typography variant='h3' mb='33px'>
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize', fontWeight: '500' }}>{name}</span>  exercise videos
            </Typography>
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{
                flexDirection: { lg: 'row', xs: 'column' }, gap: { lg: '110px', xs: '0' },
            }}>
                {exerciseVideos?.slice(0, 3).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://youtube.com/watch?v=${item.video.videoId}`}
                        target='blank'
                        rel='noreferrer'
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant='h5' color='#000'>
                                {item.video.title}
                            </Typography>
                            <Typography variant='h5' color='#000' mt='10px'>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box >
    )
}

export default ExerciseVideos