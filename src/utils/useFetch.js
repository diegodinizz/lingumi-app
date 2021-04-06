import { useState, useEffect } from 'react'

import { handleErrors } from './error.utils'

export function useFetch() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function onLoad () {
      try {
        const response = await fetch(
          'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials'
        )
        const data = await handleErrors(response)

        setData(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    onLoad()
  }, [])

  return data
}
