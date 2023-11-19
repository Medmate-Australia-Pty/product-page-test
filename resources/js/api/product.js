import axios from 'axios';

async function getProduct(slug) {
  const response = await axios.get('products/' + slug, {baseURL: process.env.APP_URL + '/client'})
  if (response.data?.data) {
    return response.data.data
  }

  return null
}

async function getProductServer(slug) {
  const response = await axios.get('products/' + slug, {baseURL: process.env.APP_URL + '/api'})
  if (response.data?.data) {
    return response.data.data
  }

  return null
}

export default {
  getProduct,
  getProductServer
}