import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

function BriefList({ products, briefs }) {
  return <div className='brief-list'>
    <h1>briefs</h1>
    {
      briefs.map(brief => {
        const productName = (products.filter(p => p.id == brief.productId)[0] || { name: 'Unkown product' }).name
        return <div className="brief-item">
          <h2>{ brief.title }</h2>
          <p>{ brief.comment }</p>
          <h3>{ productName }</h3>
        </div>
      })
    }
  </div>
}

const mapStateToProps = state => ({
  products: state.products,
  briefs: state.briefs,
})

export default connect(mapStateToProps)(BriefList);
