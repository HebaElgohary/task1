import React from 'react'
import ReduxProvider from './ReduxProvider'
import ReactQueryProvider from './ReactQueryProvider'

export default function AppProvider({children}:{children:React.ReactNode}) {
  return (
<>
<ReduxProvider>
  <ReactQueryProvider>
{children}
</ReactQueryProvider>
</ReduxProvider>
</>
  )
}
