import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetRecipeByIDQuery } from '../features/APISlice'

export default function Detail() {
  const { id } = useParams()

  const { data } = useGetRecipeByIDQuery(3)
  return (
    <div>
      <h1>Detail</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {id}
    </div>
  )
}
