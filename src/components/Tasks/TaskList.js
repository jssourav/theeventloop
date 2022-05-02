import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Importing material UI components
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';

// Importing material UI icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import TaskListItem from './TaskListItem';

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

export default function TaskList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [secondary, setSecondary] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.task_details.category_title} />
        {/*code to open and closed list*/}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        {/*List item are wrapped inside List */}
        <List component='div' disablePadding>
          {props.task_details.tasks.map((task) => {
            return (
              <TaskListItem
                key={task.id}
                title={task.title}
                description={task.description}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
