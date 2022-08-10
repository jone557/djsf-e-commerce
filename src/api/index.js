import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateUserAdd } from '../Redux/Actions/profile'

const url = "http://localhost:5000/api/v1/products"
const url1 = "http://localhost:5000/api/v1/orders"
const urlId = "http://localhost:5000/api/v1/products/:id"

export const fetchProducts = () => axios.get(url)
export const fetchProduct = () => axios.get(urlId)
export const fetchLooks = () => axios.get("http://localhost:5000/api/v1/looks")
export const fetchEyes = () => axios.get("http://localhost:5000/api/v1/products/eye-products")
export const fetchLips = () => axios.get("http://localhost:5000/api/v1/products/lip-products")
export const fetchSkins = () => axios.get("http://localhost:5000/api/v1/products/skin-products")

export const fetchReviews = () => axios.get()
export const updateOrder = (formData) => axios.post('/order', formData)
export const addOrder = (newOrder) => axios.post(url1, newOrder)
const token = localStorage.getItem('token')
console.log("I am token ", token);
export const updateUserAddress = (newAddress) => axios.patch("http://localhost:5000/user/updateAddress",
  newAddress, {
  headers: { Authorization: `Bearer ${token} ` }
})
export const addToMyWishList = (data) => axios.post("http://localhost:5000/api/v1/wishList",
  data, {
  headers: { Authorization: `Bearer ${token} ` }
})

export const deleteMyWishList = (data) => axios.delete(`http://localhost:5000/api/v1/wishList/${data}`, {
  headers: { Authorization: `Bearer ${token} ` }
})
export const getMyWishList = () => axios.get('http://localhost:5000/api/v1/wishList', {
  headers: { Authorization: `Bearer ${token} ` }
})
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
localStorage.getItem('profile')

//export const signIn = (formData) => API.post('http://localhost:5000/api/auth/login', formData);
export const signIn = (formData) => axios.post('http://localhost:5000/api/auth/login', formData);
export const signUp = (formData) => axios.post('http://localhost:5000/api/auth/signup', formData);
export const fetchusers = () => API.get('/user/allusers');
export const addtoCart = (product) => API.post('/user/cart/addtocart', product);
export const removeCart = () => API.post('/user/cart/removecart');
// export const getCart = () => API.post('/user/cart/');
export const updateCart = () => API.post('/user/cart/addtocart');
export const addProduct = (data) => API.post('/api/v1/products/', data);
export const fetchWishList = () => API.get('localhost:5000/api/v1/wishList/:id')
