import React from 'react'
import ReduxProvider from './ReduxProvider'

export default function AppProvider({children}:{children:React.ReactNode}) {
  return (
<>
<ReduxProvider>
{children}
</ReduxProvider>
</>
  )
}
