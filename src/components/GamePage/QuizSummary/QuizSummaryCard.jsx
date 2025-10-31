const QuizSummaryCard = ({heading, text, ...props}) => {
  return (
   <div>
            <p>{heading}</p>
            <strong {...props}>{text}</strong>
    </div>
  )
}

export default QuizSummaryCard
