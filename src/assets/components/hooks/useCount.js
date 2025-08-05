import { useState } from "react";

const useCount = () => {
    const [count, setCount] = useState(0)

    const learnedCount = () => {
        setCount(count => count + 1)
    }

    return {count, learnedCount}
}

export default useCount