import React from 'react'

export default function ErrorMsg({error}:{error:Error }){
  return (
        <div className="flex min-h-40 items-center justify-center">
        <p className="text-red-500">
          {error instanceof Error
            ? error.message
            : "Failed to load posts"}
        </p>
      </div>
  )
}
