import * as React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { Progress } from 'antd';

interface TaskCardProps {
    taskState: {
        taskID: number,
        description: string,
        robot_name: string,
        state: 	string,
        task_type: string,
        start_time: number,
        end_time: number,
        progress: string,
    }
}

export const TaskCard = (props: TaskCardProps) : React.ReactElement => {
    const { taskState } = props
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container>
                  <Grid item xs={12}>
                    <Progress type="dashboard" gapDegree={120} percent={parseInt(taskState.progress)} />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Task ID
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>{taskState.taskID}</Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Description
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>{taskState.description}</Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Robot
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>{taskState.robot_name}</Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Task Type
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>{taskState.task_type}</Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Task State
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>{taskState.state}</Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Start: 
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>{taskState.start_time}</Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" color="textSecondary">
                      End: 
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>{taskState.end_time}</Grid>
              </Grid>
            </CardContent>
        </Card>
    );                              
}

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 300,
    margin: "0.5em",
    overflow: 'auto',
  },
});