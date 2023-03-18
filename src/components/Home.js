import React from 'react'
import { Link } from 'react-router-dom'
import {
  useCreateRecipeMutation,
  useDeleteRecipeMutation,
  useGetRecipesQuery,
} from '../features/APISlice'

export default function Home() {
  const { data, isLoading, error } = useGetRecipesQuery()

  const [deleteProduct] = useDeleteRecipeMutation()

  const [addProduct] = useCreateRecipeMutation()

  // implement edit with PUT and PATCH

  return (
    <div>
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'></textarea>
      <input type='text' />
      <button
        onClick={() => {
          addProduct({
            name: 'Ice Cream',
            description: 'Classic spaghetti with a rich, meaty tomato sauce',
            image: 'https://www.images.com/images/spaghetti-bolognese.jpg',
            ingredients: [
              {
                name: 'spaghetti',
                amount: '1 pound',
              },
              {
                name: 'ground beef',
                amount: '1 pound',
              },
              {
                name: 'canned tomatoes',
                amount: '28 ounces',
              },
              {
                name: 'onion',
                amount: '1 medium',
              },
              {
                name: 'garlic',
                amount: '2 cloves',
              },
              {
                name: 'olive oil',
                amount: '2 tablespoons',
              },
              {
                name: 'salt',
                amount: 'to taste',
              },
              {
                name: 'black pepper',
                amount: 'to taste',
              },
            ],
            instructions: [
              'Bring a large pot of salted water to a boil. Add the spaghetti and cook until al dente, about 10 minutes.',
              'Meanwhile, heat the olive oil in a large skillet over medium-high heat. Add the onion and garlic and cook until softened, about 5 minutes.',
              'Add the ground beef and cook until browned, about 10 minutes.',
              'Add the canned tomatoes and bring to a simmer. Season with salt and black pepper.',
              'Drain the spaghetti and add it to the skillet with the sauce. Toss to combine and serve immediately.',
            ],
          })
        }}>
        Add
      </button>

      <h1>Home</h1>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {isLoading && <h1>Loading....</h1>}
      {data && (
        <div>
          {data?.map((item) => (
            <div key={item.id}>
              <p>{item.id}</p>
              <h1>{item.name}</h1>
              <p>{item.description}</p>

              <Link to={`/${item.id}`}>
                <button>Show Details</button>
              </Link>
              <button onClick={() => alert(item.id)}>❤️</button>
              <button
                onClick={() => {
                  deleteProduct(item.id)
                }}>
                Delete
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
