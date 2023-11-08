import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Extra Food`;
    }, [title])
}

export default useTitle;