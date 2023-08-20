import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadIceCreamList } from "../reducer/action-creator-ice/ice-cream-action";
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image1 from "./../../assets/images/images.jpg"
const IceCreamDetails = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(loadIceCreamList()) }, [])
    const state = useSelector(state => state);
    console.log(state);
    return (<>
        {Object.keys(state).map((key, index) => {
            return (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography>{key}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container >
                            {state[key].map((item) => {
                                return (<>
                                    <Grid item xs={12} lg={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={image1} title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </>)
                            })}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            )
        })}
    </>);
}

export default IceCreamDetails;