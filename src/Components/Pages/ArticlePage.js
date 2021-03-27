import React from 'react'
import './ArticlePage.css';
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';


class ArticlePage extends React.Component {
    
    

    render(){
        console.log(this.props.location.state)
        const article = this.props.location.state
        return (
            <Grid container className="container-card" >
                <Grid items xs={12} xl={12} className="row ">
                { article.article.title!== null ? (<div className=" ttl">{article.article.title}</div>)
                        :(<div className="part-article"> Title not availble</div>)}
                </Grid>
                <Grid items xs={12} lg={5} xl={5} className="row">
                    <div className="card-article">
                        { article.article.urlToImage!== null ? (<img className="part-article" src={article.article.urlToImage}/>)
                        :(<div className="part-article"> image not availble </div>)}
                    </div>
                </Grid>
                <Grid items xs={12} lg={5} xl={5} className="row">
                    <div className="card-article" >
                    <Grid container >
                    <Grid items xs={12} lg={12} xl={12}>
                        { article.article.content!== null ? (<div className="part-article">  {article.article.content.substring(0, 200)}</div>)
                        :(<div className="part-article">Content not available</div>)}
                     </Grid>   
                        <Grid items xs={6} lg={4} xl={4}>

                        { article.article.author!== null ? (<div className="sub-part-article"> the Autor : <span className="sub-part-article"> {article.article.author}</span></div>)
                        :(<div className="sub-part-article">   Autor name is not availble </div>)}
                        </Grid>
                        <Grid items xs={6} lg={4} xl={4}>
                        { article.article.publishedAt!== null ? (<div className="sub-part-article"> Publication date : <span className="sub-part-article"> {article.article.publishedAt}</span></div>)
                        :(<div className="sub-part-article"></div>)}
                        </Grid>
                        <Grid items xs={6} lg={4} xl={4}>
                        { article.article.source.name!== null ? (<div className="sub-part-article"> The source :<span className="sub-part-article"> {article.article.source.name}</span></div>)
                        :(<div className="sub-part-article"></div>)}
                        </Grid>
                        </Grid>
                        
                    </div>
                    
                </Grid>
                
                
                
            </Grid>
        )
    }
    
}

export default ArticlePage;
