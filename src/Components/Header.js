import React from 'react'
import "./Header.css"
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip);

function Header (props){

    return(
        <div className="header">
          <div className="lg">YB-News</div>
             <Breadcrumbs aria-label="breadcrumb" className="nav-menu">
                <StyledBreadcrumb component="a"href="/" label="General"/>
                <StyledBreadcrumb component="a"href="/sport" label="Sport"/>
                <StyledBreadcrumb component="a"href="/science" label="Science"/>
                <StyledBreadcrumb component="a"href="/technology" label="Technology"/>
                <StyledBreadcrumb component="a"href="/health" label="Health"/>
             </Breadcrumbs>

             
        </div>
    )
}
export default Header;