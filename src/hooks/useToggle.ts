import { useCallback, useState } from "react"

export const useToggle = (state = false) => {
  const [isOn, setIsOn] = useState(state)

  const close = () => setIsOn(false)
  const toggle = useCallback(() => {
    setIsOn((o) => !o)
  }, [setIsOn])

  return { isOn, toggle, close, setIsOn }
}
