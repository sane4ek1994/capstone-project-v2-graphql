import { createContext, useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        price
        name
        imageUrl
      }
    }
  }
`

export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS)
  const [categoriesMap, setCategoriesMap] = useState({})

  console.log('loading', loading)
  console.log('data', data)

  const value = { categoriesMap }
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
