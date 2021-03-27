import React ,{useState,useEffect} from 'react'
import axios from "axios";
import './General.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      minWidth: 225,
    },
    media: {
      height: 150,
    },
  });

function General (props){
    const [dataR ,setDataR] = useState([])
    const classes = useStyles();
    function fixTheLenght(str) {
        var res = str.substring(0, 32);
        var newStr = res+"..."
        return newStr;
    }
    function fixTheLenght2(str2) {
        var res2 = str2.substring(0, 55);
        var newStr2 = res2+"..."
        return newStr2;
    }

        const key= "dab42e4864fc47678fe54ec5169013ad"
        const url = 'https://newsapi.org/v2/top-headlines?category=general&apiKey=dab42e4864fc47678fe54ec5169013ad'
        
        useEffect(() => {
            axios
              .get(url)
              .then((response) => {
                
                const news = response.data.articles;
                setDataR(news);
              })
              .catch((error) => {
                console.log(error);
              });
          }, []);
          
    
    const theMapping = dataR.map( (apiArticle,index) => {
        return(
            <Grid key={index} items xs={12} sm={6} md={4} lg={3} xl={2} className="info-card">
            <Card  className={classes.root} > 
             
                <CardActionArea>
                    {apiArticle.urlToImage !== null ? (
                        <CardMedia className={classes.media} image={apiArticle.urlToImage} title="Contemplative Reptile"/>
                    ) : 
                    (<CardMedia className={classes.media} image="http://via.placeholder.com/240x120" title="Contemplative Reptile"/>)}
                     
                    <CardContent>
                        {apiArticle.title.length >= 32 ?
                            (<Typography gutterBottom variant="h5" component="h2">{fixTheLenght(apiArticle.title)}</Typography>):
                            (<Typography gutterBottom variant="h5" component="h2">{apiArticle.title}</Typography>)
                            }
                            
                        {apiArticle.description !== null ?
                        (<Typography variant="body2" color="textSecondary" component="p"> {fixTheLenght2(apiArticle.description)} </Typography>):
                        (<Typography variant="body2" color="textSecondary" component="p"> {apiArticle.description} </Typography>)}
                    </CardContent>
                   
                </CardActionArea>
                
                <CardActions>
                    <Button href={apiArticle.url} size="small" color="primary">
                    Link
                    </Button>
                    <Button  size="small" color="primary">
                    <Link to={{pathname : `general/${index}`, state: {article :apiArticle}}} > 
                    View article
                    </Link>
                    </Button>
                </CardActions>
            </Card>
            </Grid> 
        )
    })

    return(
        <Grid container   className="container-card" >
            {theMapping}
        </Grid>
    )
}
export default General;