import React, { Fragment } from 'react';
import { Grid, Paper, Typography, ListItem, ListItemText, List } from '@material-ui/core'

//components

const styles = {
    Paper: {
        padding: 20,
        margin: "10px 0",
        overflowY: 'auto',
        minHeight: 500,
        textTransform: 'capitalize'
    }
}
export default ({ exercises }) => 
        <Grid container spacing={1}>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) =>
                    <Fragment>
                        <Typography
                        variant="h6"
                        style={{textTransform: 'capitalize'}}>
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({title}) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                    )}
                </Paper>
            </Grid>

            <Grid item sm>
                <Paper style={styles.Paper}>
                    Right Pan
                </Paper>
            </Grid>
        </Grid>