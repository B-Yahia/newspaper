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

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    },
    media: {
      height: 135,
    },
  });

function Technology (props){
    const [dataR ,setDataR] = useState([])
    const classes = useStyles();

        const key= "dab42e4864fc47678fe54ec5169013ad"
        const url = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=dab42e4864fc47678fe54ec5169013ad'
        
        useEffect(() => {
            axios
              .get(url)
              .then((response) => {
                console.log(response.data);
                const news = response.data.articles;
                setDataR(news);
              })
              .catch((error) => {
                console.log(error);
              });
          }, []);
    
    const theMapping = dataR.map( (apiArticle,index) => {
        return(
            <Grid items xs={2} className="info-card">
            <Card key={index} className={classes.root} >   
                <CardActionArea>
                    {apiArticle.urlToImage !== null ? (
                        <CardMedia className={classes.media} image={apiArticle.urlToImage} title="Contemplative Reptile"/>
                    ) : 
                    (<CardMedia className={classes.media} image="http://via.placeholder.com/240x120" title="Contemplative Reptile"/>)}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {apiArticle.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {apiArticle.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={apiArticle.url} size="small" color="primary">
                    Link
                    </Button>
                </CardActions>
            </Card>
            </Grid> 
        )
    })

    return(
        <Grid container className="container-card">
            {theMapping}
        </Grid>
    )
}
export default Technology;