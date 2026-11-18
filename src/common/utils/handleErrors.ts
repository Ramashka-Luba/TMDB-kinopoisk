import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {isErrorWithMessage} from "@/common/utils/isErrorWithMessage";
import {errorToast} from "@/common/utils/errorToast";

export const handleErrors = (error:  FetchBaseQueryError) => {
    if (error) {
        switch (error.status) {
            case 'FETCH_ERROR': // офлайн, длинный search
            case 'PARSING_ERROR': // в responseHandler
            case 'CUSTOM_ERROR':
            case 'TIMEOUT_ERROR':
                errorToast(error.error)
                break

            case 401: // поломан token
            case 404: // поломан endpoint
                if (isErrorWithMessage(error.data)) {
                    errorToast(error.data.status_message)
                } else {
                    errorToast(JSON.stringify(error.data))
                }
                break

            default:
                if (error.status >= 500 && error.status < 600) {
                    errorToast("Server error occurred. Please try again later.")
                } else {
                    errorToast("Some error occurred")
                }
        }
    }
}