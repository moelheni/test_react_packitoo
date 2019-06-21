import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {
  Box,
  FormControl,
  Button,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';

import { loadProducts, createBrief } from '../actions'

function BriefForm({ products, loadProducts, createBrief }) {
  const [formData, setFormData] = useState({
    title: '',
    comment: '',
    productId: -1
  })

  useEffect(function() {
    loadProducts()
  }, [])

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    createBrief(formData)
  }

  return <Box className='brief-form'>
    {
      products.isFetching && 'isFetching...'
    }
    {
      !products.isFetching &&
      <FormControl onSubmit={handleSubmit} fullWidth>
        <TextField fullWidth label='Title' name='title' onChange={handleChange} /> <br />
        <TextField fullWidth multiline label='Comment' name='comment' onChange={handleChange} /> <br />
        <Select fullWidth value={formData.productId} name='productId' onChange={handleChange}>
          <MenuItem value={-1} disabled selected>Select Product</MenuItem>
          {
            products.data.map((product => (
              <MenuItem value={product.id}>
                { product.name }
              </MenuItem>
            )))
          }
        </Select>
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">Add brief</Button>
      </FormControl>
    }
  </Box>
}

const mapStateToProps = state => ({
  products: state.products,
  briefs: state.briefs,
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts()),
  createBrief: (brief) => dispatch(createBrief(brief))
})

export default connect(mapStateToProps, mapDispatchToProps)(BriefForm);
