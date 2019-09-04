import React from 'react'
import { Paper, Typography } from '@material-ui/core';


export default ({styles, exercises}) =>

<Paper style={styles.Paper}>
    {exercises.map(([group, exercises]) => {
        <Typography variant="headline">
            {group}
        </Typography>
    })
    }
</Paper>