import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `recipes`,
    }),

    getRecipeByID: builder.query({
      query: (id) => `recipes/${id}`,
    }),

    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: 'recipes',
        method: 'POST',
        body: recipe,
      }),
    }),

    updateRecipe: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `recipes/id`,
        method: 'PUT',
        body: updates,
      }),
    }),

    deleteRecipe: builder.mutation({
      query: (id) => ({
        url: `recipes/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetRecipesQuery,
  useGetRecipeByIDQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipeApi
