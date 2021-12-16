import React from 'react'

import { Button } from 'koalaui'
import 'koalaui/dist/index.css'

const App = () => {
  return (
    <>
      <Button text='Click' type='primary' onClick={() => alert('Hello')} />
    </>
  )
}

export default App
