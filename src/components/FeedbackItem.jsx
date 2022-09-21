import Proptype from 'prop-types'

import Card from "./shared/Card"

function FeedbackItem({item}) {
   

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        
    </Card>
  )
}

FeedbackItem.Proptype = {
    item: Proptype.object.isRequired,
}

export default FeedbackItem