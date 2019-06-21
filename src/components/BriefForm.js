import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { loadProducts, createBrief } from '../actions'

function BriefForm({ products, loadProducts, briefs, createBrief }) {
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

  return <div className='brief-form'>
    <form onSubmit={handleSubmit}>
      <input placeholder='Title' name='title' onChange={handleChange} /> <br />
      <textarea placeholder='Comment' name='comment' onChange={handleChange} /> <br />
      <select name='productId' onChange={handleChange}>
        <option disabled selected>Select Product</option>
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
    briefs <br />
    {
      briefs.map(e => JSON.stringify(e))
    }
  </div>
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
