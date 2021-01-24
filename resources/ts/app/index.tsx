import React, {ChangeEvent, FormEvent} from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createSelectorHook, Provider, useDispatch} from 'react-redux'
import ReduxThunk, {ThunkAction} from 'redux-thunk';
import axios from 'axios';

type Todo = {
    id: number
    title: string
    created_at: string
    updated_at: string
    user: {
        name: string
    } | null
}

interface User {
    name: string
}

interface State {
    todos: Todo[],
    loading: boolean,
    sending: boolean,
    user: User | null,
}

const initialState: State = {
    todos: [],
    loading: false,
    sending: false,
    user: null,
}

const setLoading = (loading: boolean) =>
    ({
        type: 'SET_LOADING',
        loading,
    } as const)

const setSending = (sending: boolean) =>
    ({
        type: 'SET_SENDING',
        sending,
    } as const)

const setTodos = (todos: Todo[]) =>
    ({
        type: 'SET_TODOS',
        todos,
    } as const)

const setUser = (user: User | null) =>
    ({
        type: 'SET_USER',
        user,
    } as const)

type Actions = ReturnType<typeof setTodos | typeof setLoading | typeof setSending | typeof setUser>

export default function reducer(
    currentState = initialState,
    action: Actions,
): State {
    switch (action.type) {
        case 'SET_TODOS': {
            const {todos} = action
            return {
                ...currentState, todos
            }
        }
        case 'SET_LOADING': {
            const {loading} = action
            return {
                ...currentState, loading
            }
        }
        case 'SET_SENDING': {
            const {sending} = action
            return {
                ...currentState, sending
            }
        }
        case 'SET_USER': {
            const {user} = action
            return {
                ...currentState, user
            }
        }
        default:
            break;
    }
    return currentState
}

export const loadUser = (): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    try {
        const user = await axios.get<User>('/api/user')
        dispatch(setUser(user.data))
    } catch (e) {
        dispatch(setUser(null))
    }
}

export const loadTodos = (): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    dispatch(setLoading(true))
    const todos = await axios.get<Todo[]>('/api/todos')
    dispatch(setTodos(todos.data))
    dispatch(setLoading(false))
}

export const pushTodo = (todo: string): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    dispatch(setSending(true))
    const todos = await axios.post<Todo[]>('/api/todos', {todo})
    dispatch(setTodos(todos.data))
    dispatch(setSending(false))
}

export const removeTodo = (id: number): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    dispatch(setSending(true))
    const todos = await axios.delete<Todo[]>(`/api/todos/${id}`, {})
    dispatch(setTodos(todos.data))
    dispatch(setSending(false))
}

export const useSelector = createSelectorHook<State, Actions>()

const DeleteButton = (props: any) => (
    <button {...props} className="delete-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
                <g data-name="close">
                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                    <path
                        d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                    />
                </g>
            </g>
        </svg>
    </button>)

const Header = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch()
    const user = useSelector(s => s.user)

    return <div className="header">
        <h1>Kuso App</h1>
        {
            user === null ? (
                <div className="login-group">
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        ;(async () => {
                            await axios.post('/api/login', {email, password})
                            dispatch(loadUser())
                        })()
                    }}>
                        <input type="email" name="email" className="form-input" placeholder="Email" value={email}
                               onChange={(e) => setEmail((e.target as HTMLInputElement).value)}/>
                        <input type="password" name="password" className="form-input" placeholder="Password" value={password}
                               onChange={(e) => setPassword((e.target as HTMLInputElement).value)}/>
                        <button className="login-button">Login</button>
                    </form>
                </div>
            ) : (
                <div className="logout-group">
                    <p>Logged as: {user.name}</p>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        ;(async () => {
                            await axios.post('/api/logout')
                            dispatch(loadUser())
                        })()
                    }}>
                        <button className="logout-button">Logout</button>
                    </form>
                </div>
            )
        }
    </div>
}

const App = (props: {}) => {
    const [todo, setTodo] = React.useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e: FormEvent) => {
        if (todo.length === 0) {
            e.preventDefault()
            return
        }

        dispatch(pushTodo(todo) as any)
        setTodo('')
        e.preventDefault()
    }
    const handleChange = (e: ChangeEvent) => {
        setTodo((e.target as HTMLInputElement).value)
    }
    const [loading, sending, todos] = useSelector(({loading, sending, todos}) => [loading, sending, todos])

    return (<div className="app-root">
        <Header/>
        <div className="app-body">
            <div className="app-container">
                <h2 className="todos-heading">Todos</h2>
                <div>
                    {loading ? <p>loading...</p> : todos.map(v =>
                        <p className="todo-item" key={v.id}>
                            <DeleteButton onClick={() => {
                                dispatch(removeTodo(v.id) as any)
                            }}/>
                            <span className="todo-label">{v.title}</span>
                            {v.user === null ? null : <span className="user-label">（{v.user.name}）</span>}
                        </p>)}
                    <form className="todo-form" onSubmit={handleSubmit}>
                        <input className="todo-input" type="text" value={todo} onChange={handleChange}/>
                        <button className="add-button" disabled={sending || todo.length === 0}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

const store = createStore(reducer,
    applyMiddleware(ReduxThunk))
store.dispatch(loadTodos() as any)
store.dispatch(loadUser() as any)
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
