import { useMutation } from "@apollo/client"
import { TEST_AUTH } from "queries/testAuth"
import { useEffect } from "react"

export const useIsLoggedIn = () => {
  const [testAuth] = useMutation(TEST_AUTH)

  useEffect(() => {
    const fn = async () => {
      await testAuth()
      // console.log("CHECK USER", checkUser)
    }
    fn()
  }, [testAuth])
}
