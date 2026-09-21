import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    const datePart = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).replace(/,/g, '')
    
    const timePart = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })

    return `${datePart} ${timePart}`
  }

  return (
    <div>
      {formatDate(now)}
    </div>
  )
}

export default DateTime