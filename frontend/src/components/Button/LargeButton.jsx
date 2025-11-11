function LargeButton ({text, ...props}) {
  return (
   <button className="large-button" {...props} >
{text}
   </button>
  )
}

export default LargeButton;
