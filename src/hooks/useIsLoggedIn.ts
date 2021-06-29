import { useMutation } from "@apollo/client"
import { TEST_AUTH } from "queries/testAuth"
import { useEffect } from "react"
import { store } from "store/store"

export const useIsLoggedIn = () => {
  const { user } = store()

  const [testAuth] = useMutation(TEST_AUTH)

  useEffect(() => {
    const fn = async () => {
      const checkUser = await testAuth()
      console.log("CHECK USER", checkUser)
    }
    fn()
  }, [testAuth])

  if (user) {
    console.log(user)
  }
}
