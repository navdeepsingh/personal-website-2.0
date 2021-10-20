import React from "react"
import useLocalStorage from "./useLocalStorage"

const useCounter = () => {
  const totalPics = 5
  const [count, setCount] = useLocalStorage("counter", 0)
  const increment = () => {
    let newCounter = count === totalPics - 1 ? 0 : count + 1
    setCount(newCounter)
  }

  return { count, increment }
}

export default useCounter
