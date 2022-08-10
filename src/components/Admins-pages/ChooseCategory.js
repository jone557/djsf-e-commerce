import React, {Component} from 'react'
import {Avatar, Button, CssBaseline,  TextField, FormControlLabel, FormControl, Checkbox, Link,Box, Typography, Grid, Container, Select, InputLabel, MenuItem, Card, Paper} from '@material-ui/core';
import * as manage from './Manage'
import './css/styles.css'
import { useSelector } from 'react-redux';

// const products = useSelector(state => state.products)
export class ChooseCategory extends Component {
    continue = (e) => {
        this.props.nextStep();
    }
    
    render() {
        
        const {values, handleChange} = this.props;
        
        return (
             
         <Container component="main" maxWidth="xs">
             <Card  className = "category-card">
             <CssBaseline />

             <Typography component="h1" variant="h5">
                Choose Category
             </Typography>
             
            {/* <form > */}
            {/* <Grid container justifyContent="center" >
                <Grid item xs={12}> */}
                    <FormControl variant="outlined" className = "category-input">
                        
                            <InputLabel style={{marginTop: "30px"}}>Category</InputLabel>
                            <Select
                                label="none"
                                value={values.category}
                                style={{marginTop: "30px"}}
                                onChange={handleChange("category")}                                
                            >
                                <MenuItem value="">None</MenuItem>
                                {
                                    manage.getCategory().map(item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
                                }
                            </Select>
                    
                            <Button variant="contained" color="primary" style={{margin: "20px auto", backgroundColor : "#ffaaaaea"}} className = "continue-btn" onClick={this.continue}>
                              Continue
                            </Button>
                                
                    </FormControl>          
                {/* </Grid>
            </Grid> */}
            
        {/* </form> */}
        </Card>
        </Container>
       
        )
    }

}

export default ChooseCategory;