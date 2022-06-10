import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';
import { ListItemText, ListItem } from '@mui/material';
import './detailsPage.scss';


export const DetailsPage = () => {

    const detailsState = useSelector((state) => state.apiSlice);
    const navigate = useNavigate();

    return (
        <Container className='container' maxWidth='lg'>
            <Typography align='center' variant='h3'>Details page</Typography>
            <ListItem className='listItem'>
                        <ListItemText primary={`Title: ${detailsState.title}`} secondary={`Body: ${detailsState.body}`} ></ListItemText>
                        <div className='listItemBottom'>
                            <Typography>{`userId-${detailsState.userId}`}</Typography>
                            <Typography>{`id-${detailsState.id}`}</Typography>
                        </div>
                    </ListItem>
        <Button onClick={() => navigate('/')} variant='contained'>Atgal į sąrašą</Button>
    </Container>
    );
};

