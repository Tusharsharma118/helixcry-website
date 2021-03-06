import React from 'react'
import exploreData from './data/exploreData'
import "../styles/explore.scss"
import Clock from './clock'
import image from "../static/images/Logrim.png"
import Snake from "./snake"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 245,
    },
    media: {
      height: 245,
    },
  });




export default function Explore() {
    const classes = useStyles();

    return (

 <> 
 <Clock></Clock> 
        <section id="explore" className="explore-container">
            <h1 className="explore-head">Our Work</h1>
            <div>
           
            {
                

                exploreData.map((item) => ( 
                   <a class="explore-anchor" href="https://play.google.com/store/apps/details?id=com.helixcry.grimcry " target="_blank" rel="noreferrer"> <div className="explore-item" key={item.title}>
                      <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
        item={item.description} 
        title="GrimCry : VR Game"
      />
      
    </CardActionArea>
    
  </Card>
                        
                                     
                    </div>
                    </a>
                ))
            }
            <Snake></Snake>
            </div>

           
        </section>
    </>
    )
}