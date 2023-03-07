import { useEffect, useState } from "react"

const useAvailable = (props) => {
    const [status, setStatus] = useState(false)

    useEffect(() => {
        if (props) setStatus("Opened")
        else setStatus("Closed")
    }, [])

    return status
}

export default useAvailable