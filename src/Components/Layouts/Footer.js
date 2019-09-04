
import React from 'react'
import {Tabs, Tab, Paper} from '@material-ui/core';


export default ({muscles, catagory, onSelect}) =>
{
    const index = catagory ? muscles.findIndex(group => group === catagory) + 1 : 0

    const onSelectIndex = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1])

    return <Paper>
    <Tabs
      value={index}
      onChange={onSelectIndex}
      indicatorColor="primary"
      textColor="primary"
      centered
    >

    <Tab label="All" />
    {muscles.map(group => <Tab label={group} />)}
    </Tabs>
  </Paper>
}