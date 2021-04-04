import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./Footer.css"

function Footer (props){

    return(
        <Grid container className="footer">
            <Grid item xs={4} ></Grid>
            <Grid item xs={12} md={4}>
            <p>
            Copright &copy; 2021, <strong>Y-B news</strong> designed by <i>Yahya BAHHOUSS</i>
            </p>
            </Grid>
            <Grid item xs={4} ></Grid>
            
                    
        </Grid>
    )
}
export default Footer;