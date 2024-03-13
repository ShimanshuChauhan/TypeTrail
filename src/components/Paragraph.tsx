function Paragraph({ question }: { question: string }): JSX.Element {
    const lettersArray = question.split('')
    return (
        <div>
            {lettersArray.map((letter, index) => {
                return <span key={index}>{letter}</span>
            })}
        </div>
    )
}
export default Paragraph
