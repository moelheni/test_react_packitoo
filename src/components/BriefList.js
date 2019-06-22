import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { loadBriefs, setProductNameQuery } from '../actions'
import { getBriefsJoinProducts } from '../selectors'

import {
  Card,
  CardContent,
  Chip,
  InputBase,
} from '@material-ui/core';

function BriefList({ products, briefs, briefsCount, loadBriefs, setProductNameQuery }) {
  useEffect(function() {
    loadBriefs()
  }, [])

  function handleChange (e) {
    setProductNameQuery(e.target.value)
  }

  return <div className='brief-list'>
    {
      briefs.isFetching && 'Loading ...'
    }
    {
      !!briefsCount &&
      <>
        <div className="briefs-header">
          <h1>Briefs</h1>
          <InputBase
              placeholder="Search by product…"
              onChange={handleChange}
              className="search-input"
            />
        </div>
        {
          briefs.data.map(brief => {
            return <Card color="text.primary" className="brief-item" key={brief.id}>
              <CardContent>
                <h2>{ brief.title }</h2>
                <p>{ brief.comment }</p>
                <Chip label={brief.productName} />
              </CardContent>
            </Card>
          })
        }
      </>
    }
    {
      !briefsCount && !briefs.isFetching &&
      <h1>No briefs yet</h1>
    }
  </div>
}

const mapStateToProps = state => ({
  products: state.products,
  briefs: getBriefsJoinProducts(state),
  briefsCount: state.briefs.data.length
})

const mapDispatchToProps = dispatch => ({
  loadBriefs: () => dispatch(loadBriefs()),
  setProductNameQuery: (q) => dispatch(setProductNameQuery(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(BriefList);
