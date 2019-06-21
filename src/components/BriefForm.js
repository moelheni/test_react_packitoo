import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { loadProducts } from '../actions'

function BriefForm({ products, loadProducts }) {
  const [formData, setFormData] = useState({
    title: '',
    comment: '',
    productId: -1
  })

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(function() {
    loadProducts()
  }, [])

  return <div className='brief-form'>
    <form>
      <input placeholder='Title' name='title' onChange={handleChange} /> <br />
      <textarea placeholder='Comment' name='comment' onChange={handleChange} /> <br />
      <select name='productId' onChange={handleChange}>
        {
          products.map((product => (
            <option value={product.id}>
              { product.name }
            </option>
          )))
        }
      </select>
      <br />
      { JSON.stringify(formData) }
      <button>Add brief</button>
    </form>
  </div>
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(BriefForm);
