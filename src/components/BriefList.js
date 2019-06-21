import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import {
  Card,
  CardContent,
  Chip,
} from '@material-ui/core';

function BriefList({ products, briefs }) {
  return <div className='brief-list'>
    {
      briefs.isFetching && 'Adding Brief ...'
    }
    {
      !!briefs.data.length &&
      <>
        <h1>briefs</h1>
        {
          briefs.data.map(brief => {
            const productName = (products.data.filter(p => p.id == brief.productId)[0] || { name: 'Unkown product' }).name
            return <Card color="text.primary" className="brief-item">
              <CardContent>
                <h2>{ brief.title }</h2>
                <p>{ brief.comment }</p>
                <Chip label={productName} />
              </CardContent>
            </Card>
          })
        }
      </>
    }
    {
      !briefs.data.length &&
      <h1>No briefs yet</h1>
    }
  </div>
}

const mapStateToProps = state => ({
  products: state.products,
  briefs: state.briefs,
})

export default connect(mapStateToProps)(BriefList);
