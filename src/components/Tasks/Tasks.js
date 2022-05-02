import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
// Importing material UI components
import Grid from '@material-ui/core/Grid';
// Importing material UI icons
import TaskList from './TaskList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const DUMMY_TASK = [
  {
    id: 'category1',
    category_title: 'Task Category 1',
    tasks: [
      {
        id: 'task1',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
      },
      {
        id: 'task2',
        title:
          'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
      },
      {
        id: 'task3',
        title:
          'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        description:
          'avoids pleasure itself, because it is pleasure, but because',
      },
    ],
  },
  {
    id: 'category2',
    category_title: 'Task Category 2',
    tasks: [
      {
        id: 'task11',
        title: 'Omnis iste natus error sit voluptatem',
        description:
          'voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
      },
      {
        id: 'task22',
        title: '"de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
      },
    ],
  },
];

export default function Tasks() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12}>
      <div className={classes.demo}>
        {/* If checkbox is ticked then secondary text will be shown otherwise not */}
        {DUMMY_TASK.map((task) => {
          return (
            <>
              <TaskList key={task.id} task_details={task} />
              <Divider />
            </>
          );
        })}
      </div>
    </Grid>
  );
}
