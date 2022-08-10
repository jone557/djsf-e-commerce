import React from 'react'
import {Avatar, Button, CssBaseline,  TextField, FormControlLabel, FormControl, Checkbox, Link,Box, Typography, Grid, Container, Select, InputLabel, MenuItem, Paper, Card, TextareaAutosize } from '@material-ui/core';
// import Products from '../Brush-single-page/Products';
import StarRatings from 'react-star-ratings';
import { FaBars, FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import './css/styles.css'
import { connect } from 'react-redux';

export class SearchProducts extends React.Component {

    renderProducts = (product) => {
        return (
            <div className = "container" onClick={this.addproduct}>
                <div className="mediaContainer">
                     <div className="media" style={{backgroundImage: `url(${product.image})`}}></div>
                </div>
                <div className="mycontent">
                    <Typography variant="subtitle1" color="textSecondary"  style={{fontWeight:'bold',
                    fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
                    {product.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">{product.description}</Typography>
                    {/* <Typography variant="body2" color="textPrimary">{product.rating}</Typography> */}
                    <StarRatings
                                rating={5}
                                starRatedColor="gray"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="2px"
                    />
                    <Typography variant="body2" color="textPrimary" 
                    style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
                        ${product.price}
                    </Typography>
            </div>
        </div>
        )
    }
   
    render() {
        const {values, search} = this.props;
        const Products = this.props.Products;
        // const {data} = Products
        const filteredProducts = Products.filter(product => {
            return product.name.toLowerCase().indexOf(values.search.toLowerCase()) !== -1;
        })
        console.log(filteredProducts);
       if(values.search == ""){
        return (
            <div>
                <div className = "search-box-container">
                    <div className = "search">  
                        <input className="search-bar" type="search" placeholder='search...' onChange = {search("search")} /> 
                        <FaSearch className = "search-icon" /> 
                    </div>
                </div>
                <Grid container spacing={4} justify='center'>
                    {Products.map((product) => {
                        return(
                        <Grid item xs={12} sm = {6} md={4} lg={3}>
                               {this.renderProducts(product)}
                        </Grid>
                     )
                    })}
                </Grid>
            </div>
        )
    }
    else {
        return(
        <div>
                <div className = "search-box-container">
                    <div className = "search">  
                        <input className="search-bar" type="search" placeholder='search...' onChange = {search("search")} /> 
                        <FaSearch className = "search-icon" /> 
                    </div>
                </div>
                <Grid container spacing={4} justify='center'>
                    {filteredProducts.map((product) => {
                        return(
                        <Grid item xs={12} sm = {6} md={4} lg={3}>
                               {this.renderProducts(product)}
                        </Grid>
                     )
                    })}
                </Grid>
            </div>)
    }
    }
} 

const mapStateToProps = (state) => {
    return {
        Products: state.products
    }
}
export default connect(mapStateToProps)(SearchProducts);
