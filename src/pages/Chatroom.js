import React from 'react';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 0,
    border: 0,
    style: { width: '80%', height: '100vh' },
};


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

const bubbleStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: "90%",
            height: 50,
        },
    },

    p: {
        display: 'flex',
        margin: 15,
    }

}))



export default () => {
    const classes = useStyles();
    const bubbleChat = bubbleStyles();


    return (

        <Box bgcolor="text.disabled" >
               
            <Box display="flex" justifyContent="flex-end">
                <Box borderColor="secondary.main" {...defaultProps} borderRadius="borderRadius" display="flex" alignItems="flex-end">
                        <Box display="flex" flexDirection="column">
                        <div className={bubbleChat.paper}> 
                            <Paper elevation={3}><p className={bubbleChat.p}>Hello there</p></Paper>
                        </div>
                            <Paper component="form" className={classes.root}>
                                <Input placeholder="Send message" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">

                                    <SendIcon display="inline" />
                                </IconButton>
                            </Paper>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}