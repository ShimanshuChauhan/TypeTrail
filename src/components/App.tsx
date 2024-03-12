import { useEffect, useReducer } from 'react'

type Question = { id: number; question: string }

type State = {
    question: Question[]
    status: 'loading' | 'ready' | 'error'
}

type Action = {
    type: string
    payload?: any
}

const initialState: State = { question: [], status: 'loading' }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'dataReceived':
            return {
                ...state,
                question: action.payload,
                status: 'ready',
            }
        case 'dataFailed':
            return {
                ...state,
                status: 'error',
            }
        default:
            return {
                ...state,
            }
    }
}

function App(): JSX.Element {
    const [{ question, status }, dispatch] = useReducer(reducer, initialState)
    useEffect(function () {
        fetch('http://localhost:9000/questions')
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'dataReceived', payload: data }))
            .catch((err) => dispatch({ type: 'error', payload: err }))
    }, [])
    return (
        <div className="flex flex-col items-center justify-evenly h-[100vh] m-6">
            <header className=" p-5 bg-blue-300 flex items-center h-[10vh]">
                <p>logo</p>
                <button>To change para</button>
                <button>highscore</button>
                <button>about</button>
                <button>login form</button>
            </header>
            <main className="flex flex-col space-y-10 items-center justify-center bg-green-400 h-[70vh] p-5">
                <div className="flex flex-1"></div>
                <div>
                    <h1>
                        In the heart of the forest, where sunlight filters
                        through the canopy in dappled patterns, I find solace.
                        The rustle of leaves in the breeze and the chirping of
                        birds create a symphony of nature's song. Each step I
                        take feels like a journey into the depths of my own
                        being.
                    </h1>
                </div>
                <div className="flex flex-1"></div>
                <div className="flex bg-amber-500 p-5">
                    <p>Timer</p>
                    <p>Mistakes</p>
                    <p>WPM</p>
                    <p>CPM</p>
                    <button>Try again</button>
                </div>
            </main>
            <footer className="flex items-center bg-red-500 p-5">
                Tab + enter - restart test
            </footer>
        </div>
    )
}

export default App
