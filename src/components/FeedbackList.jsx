import Proptypes from 'prop-types'
import Feedback from 'react-bootstrap/esm/Feedback'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0){
        return <p>no feedback yet</p>
    }
   
    return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}


Feedback.PropType ={
    feedback : Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            text: Proptypes.string.isRequired,
            rating: Proptypes.number.isRequired
        })
    )
}
export default FeedbackList