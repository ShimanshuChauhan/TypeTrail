function About(): JSX.Element {
    return (
        <>
            <svg
                className="stroke-current text-green-500 hover:text-green-700"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {' '}
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke-width="1.5"
                    ></circle>{' '}
                    <path
                        d="M12 17V11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    ></path>{' '}
                    <circle
                        cx="1"
                        cy="1"
                        r="1"
                        transform="matrix(1 0 0 -1 11 9)"
                    ></circle>{' '}
                </g>
            </svg>
        </>
    )
}
export default About
