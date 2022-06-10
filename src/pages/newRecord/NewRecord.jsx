import React, { useState } from 'react';
import { Grid, Typography, Button, TextField, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addDataAsync } from '../../redux/ApiSlice';
import './newRecord.scss';



export const NewRecord = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [userId, setUserId] = useState();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const [displayResponse, setDisplayResponse] = useState(false);

    const dataFromResponse = useSelector((state) => state.apiSlice)

    const submit = (e) =>{
        e.preventDefault();
        const recordForm = {
            body,
            title,
            userId,
            id
        };
        dispatch(addDataAsync(recordForm));
        setDisplayResponse(true);
    }

    return (
        <Container maxWidth='lg'>
            <Typography align='center' variant='h3'>New record form</Typography>
            <form onSubmit={submit} >
                <Grid container 
                spacing={2} 
                justifyContent="center" 
                >
                    <Grid item>
                        <TextField
                            label='userId'
                            type='number'
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Id'
                            type='number'
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='title'
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='body'
                            type='text'
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Grid>
                    {displayResponse && 
                        <Grid  item className='responseTexfield'>
                            <Typography variant='h3' align='center'>Data-from-response</Typography>
                                <TextField
                                disabled
                                value={dataFromResponse.userId}
                            />
                                <TextField
                                disabled
                                value={dataFromResponse.id}
                            />
                                <TextField
                                disabled
                                value={dataFromResponse.title}
                            />
                                <TextField
                                disabled
                                value={dataFromResponse.body}
                            />
                        </Grid>
                    }
                    <Grid item className='newRecordButtons'>
                        <Button type='submit' variant='contained'>Pridėti naują įrašą</Button>
                        <Button onClick={()=> navigate('/')} variant='contained'>Atgal į sąrašą</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

