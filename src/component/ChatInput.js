import React from 'react';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '80vw',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },

}));

export default ({ input, handleSubmit, handleInput }) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root} onSubmit={handleSubmit}>

            <Input type='text' placeholder='Send message...' onChange={handleInput} value={input} inputProps={{ 'aria-label': 'description' }} className={classes.input} />

            <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={handleSubmit}>

                <SendIcon display="inline" />
            </IconButton>
        </Paper>
    )
}