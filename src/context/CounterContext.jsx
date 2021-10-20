import React from "react"
import constate from "constate"
import useCounter from "../hooks/useCounter"

// 2️⃣ Wrap your hook with the constate factory
const [CounterProvider, useCounterContext] = constate(useCounter)

export { CounterProvider, useCounterContext }
