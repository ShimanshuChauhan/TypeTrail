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
import Loader from './Loader'
import Error from './Error'

type Question = { id: number; question: string }

type State = {
    questions: Question[]
    status: 'loading' | 'ready' | 'error' | 'active'
    index: number
}

type Action = {
    type: string
    payload?: any
}

const initialState: State = {
    questions: [],
    status: 'loading',
    index: 0,
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'dataReceived':
            return {
                ...state,
                questions: action.payload,
                status: 'active', // change to 'ready' to see the start screen
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
    const [{ questions, status, index }, dispatch] = useReducer(
        reducer,
        initialState
    )

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
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                <div className="flex flex-1"></div>
                <Paragraph question={questions[0]?.question} status={status} />
                <div className="flex flex-1"></div>
                {status === 'active' && (
                    <TypingStats>
                        <Timer />
                        <p>Mistakes</p>
                        <p>WPM</p>
                        <p>CPM</p>
                        <button>Try again</button>
                    </TypingStats>
                )}
            </Main>
            <Footer>Tab + enter - restart test</Footer>
        </div>
    )
}

export default App
