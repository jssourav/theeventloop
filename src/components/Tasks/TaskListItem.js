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

export default function TaskListItem(props) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Checkbox
          color='primary'
          value='checkedA'
          inputProps={{ 'aria-label': 'Checkbox A' }}
        />
      </ListItemAvatar>
      <ListItemText primary={props.title} secondary={props.description} />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
