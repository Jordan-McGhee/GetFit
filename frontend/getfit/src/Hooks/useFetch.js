import { useState, useCallback } from "react"

export const useFetch = (props) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ hasError, setHasError ] = useState(false)

    const sendRequest = useCallback(
        async (url, method = "GET", headers = {}, body = null) => {
            
            setIsLoading(true)

            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers
                })

                const responseData = await response.json()

                if (!response.ok) {
                    throw new Error(responseData.message)
                }

                setIsLoading(false)
                
                return responseData
            } catch(err) {
                console.log(err)
                setHasError(err.message || "Something went wrong. Please try again!")
                setIsLoading(false)
                throw err
            }
    }, [])

    const clearError = () => {
        setHasError(null)
    }

    return { isLoading, hasError, sendRequest, clearError }
}