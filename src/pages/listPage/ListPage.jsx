import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getApiDataAsync, getDataByIdAsync} from '../../redux/ApiSlice';
import { ListItemText, ListItem, List } from '@mui/material';
import { Typography, Button, Container } from '@mui/material';
import './listPage.scss';
import { useNavigate } from "react-router-dom";

export const ListPage = () => {

    const dispatch = useDispatch();

    const notesState = useSelector((state) => state.apiSlice);

    const navigate = useNavigate();

    const getId = (e) =>{
        dispatch(getDataByIdAsync(e))
        navigate('/details')
    }
    
    useEffect(() =>{
        dispatch(getApiDataAsync())
    }, []);

    
    return (
        <Container className='container' maxWidth='lg'>
            <Typography align='center' variant='h3'>List Page</Typography>
            <List className='notesList' >
                {!notesState.list ? [] : notesState.list.map((notesList) =>{ 
                    return <ListItem onClick={() => getId(notesList.id)} className='listItem' key={notesList.id} id={notesList.id}>
                        <ListItemText primary={`Title: ${notesList.title}`} secondary={`Body: ${notesList.body}`} ></ListItemText>
                        <div className='listItemBottom'>
                            <Typography>{`userId-${notesList.userId}`}</Typography>
                            <Typography>{`id-${notesList.id}`}</Typography>
                        </div>
                    </ListItem>
                })}
            </List>
            <Button className='listButton' onClick={() => navigate('/newRecord')} variant='contained'>Pridėti</Button>
        </Container>
    );
};
