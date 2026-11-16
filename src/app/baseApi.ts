import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["Movies"],
    baseQuery: async (args, api, extraOptions) => {

        await new Promise(resolve => setTimeout(resolve, 2000)) // delay

        return fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            prepareHeaders: (headers) => {
                const token = import.meta.env.VITE_ACCESS_TOKEN
                if (token) {
                    headers.set("Authorization", `Bearer ${token}`)
                }
                headers.set('accept', 'application/json')
                return headers
            },
        })(args, api, extraOptions)
    },
    endpoints: () => ({}),
})