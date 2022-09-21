import  { useState } from 'react'

function FeedbackItem() {
    const [rating , setRating] = useState(6)
    const [text , setText] = useState('This is an example of feedback item say cheese')

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        
    </div>
  )
}

export default FeedbackItem