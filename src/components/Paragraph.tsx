function Paragraph({
    question,
    status,
}: {
    question: string
    status: string
}): JSX.Element {
    const lettersArray = question?.split('')
    return (
        <>
            <div
                className={`bg-[#323437] ${status === 'ready' ? 'blur-md' : ''}`}
            >
                <div className="leading-10">
                    {lettersArray?.map((letter, index) => {
                        return <span key={index}>{letter}</span>
                    })}
                </div>
            </div>
            <div
                className={
                    status === 'ready'
                        ? 'absolute top-96'
                        : 'absolute left-[-10000px]'
                }
            >
                <h2 className="text-[#5ed98d] font-extrabold">
                    <img src="/img/cursor.svg" alt="cursor" /> Click anywhere to
                    start
                </h2>
            </div>
        </>
    )
}
export default Paragraph
