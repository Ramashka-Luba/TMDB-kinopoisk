import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {handleErrors} from "@/common/utils";

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["Movies"],
    baseQuery: async (args, api, extraOptions) => {

        // await new Promise(resolve => setTimeout(resolve, 2000)) // delay

        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            prepareHeaders: (headers) => {
                const token = import.meta.env.VITE_ACCESS_TOKEN

                if (token) {
                    headers.set("Authorization", `Bearer ${token}`)
                }
                headers.set('accept', 'application/json')
                return headers
            },
            // responseHandler: () => {
            //     throw new Error('PARSING_ERROR')
            // },
        })(args, api, extraOptions)

        if (result.error) {
            handleErrors(result.error)
        }

        return result
    },
    endpoints: () => ({}),
})