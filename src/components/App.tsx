import { useEffect, useReducer } from 'react'
import Header from './Header'
import ParagraphChange from './ParagraphChange'
import HighScore from './HighScore'
import About from './About'
import Login from './Login'
import Main from './Main'
import Paragraph from './Paragraph'
import TypingStats from './TypingStats'
import Timer from './Timer'
import Footer from './Footer'

type Question = { id: number; question: string }

type State = {
    question: Question[]
    status: 'loading' | 'ready' | 'error'
}

type Action = {
    type: string
    payload?: any
}

const initialState: State = {
    question: [
        {
            id: 1,
            question:
                "In the heart of the forest, where sunlight filters through the canopy in dappled patterns, I find solace. The rustle of leaves in the breeze and the chirping of birds create a symphony of nature's song. Each step I take feels like a journey into the depths of my own being.",
        },
    ],
    status: 'loading',
}

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
        <div className="flex flex-col items-center justify-evenly h-[100vh] w-[80vw] m-auto">
            <Header>
                <ParagraphChange />
                <HighScore />
                <About />
                <div className="flex flex-1"></div>
                <Login />
            </Header>
            <Main>
                <div className="flex flex-1"></div>
                <Paragraph question={question[0].question} />
                <div className="flex flex-1"></div>
                <TypingStats>
                    <Timer />
                    <p>Mistakes</p>
                    <p>WPM</p>
                    <p>CPM</p>
                    <button>Try again</button>
                </TypingStats>
            </Main>
            <Footer>Tab + enter - restart test</Footer>
        </div>
    )
}

export default App
