import { createSelector } from 'reselect'

const getProducts = (state) => state.products
const getBriefs = (state) => state.briefs
const getQuery = (state) => state.query

export const getBriefsJoinProducts = createSelector(
  [ getProducts, getBriefs, getQuery],
  (products, briefs, query) => {
    return {
      ...briefs,
      data: briefs.data.map(brief => ({
        ...brief,
        productName: (products.data.filter(p => p.id == brief.productId)[0] || { name: 'Unkown product' }).name
      })).filter(brief => {
        return Object.keys(query).reduce((match, q) => {
          return match && brief[q].toLowerCase().indexOf(query[q].toLowerCase()) > -1
        }, true)
      }).reverse()
    }
  }
)
