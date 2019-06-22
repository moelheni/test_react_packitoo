import { createSelector } from 'reselect'

const getProducts = (state) => state.products
const getBriefs = (state) => state.briefs

export const getBriefsJoinProducts = createSelector(
  [ getProducts, getBriefs ],
  (products, briefs) => {
    return {
      ...briefs,
      data: briefs.data.map(brief => ({
        ...brief,
        productName: (products.data.filter(p => p.id == brief.productId)[0] || { name: 'Unkown product' }).name
      }))
    }
  }
)
