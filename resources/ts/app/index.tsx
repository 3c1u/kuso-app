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
}

interface State {
    todos: Todo[],
    loading: boolean,
}

const initialState: State = {
    todos: [],
    loading: false,
}

const setLoading = (loading: boolean) =>
    ({
        type: 'SET_LOADING',
        loading,
    } as const)

const setTodos = (todos: Todo[]) =>
    ({
        type: 'SET_TODOS',
        todos,
    } as const)

type Actions = ReturnType<typeof setTodos | typeof setLoading>

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
        default:
            break;
    }
    return currentState
}

export const loadTodos = (): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    dispatch(setLoading(true))
    const todos = await axios.get<Todo[]>('/api/todos')
    dispatch(setTodos(todos.data))
    dispatch(setLoading(false))
}

export const pushTodo = (todo: string): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    const todos = await axios.post<Todo[]>('/api/todos', { todo })
    dispatch(setTodos(todos.data))
}

export const removeTodo = (id: number): ThunkAction<Promise<void>, State, undefined, Actions> => async (dispatch, _) => {
    const todos = await axios.delete<Todo[]>(`/api/todos/${id}`, {})
    dispatch(setTodos(todos.data))
}

export const useSelector = createSelectorHook<State, Actions>()

const App = (props: {}) => {
    const [todo, setTodo] = React.useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e: FormEvent) => {
        dispatch(pushTodo(todo) as any)
        setTodo('')
        e.preventDefault()
    }
    const handleChange = (e: ChangeEvent) => {
        setTodo((e.target as HTMLInputElement).value)
    }
    const [loading, todos] = useSelector(({loading, todos}) => [loading, todos])

    return (<>
        <h2>Todos</h2>
        {loading ? <p>loading...</p> : todos.map(v =>
            <p key={v.id}>
                <button onClick={() => {
                    dispatch(removeTodo(v.id) as any)
                }}>x</button>
                {v.title}
            </p>)}
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleChange}/>
            <button>Add</button>
        </form>
    </>)
}

const store = createStore(reducer,
    applyMiddleware(ReduxThunk))
store.dispatch(loadTodos() as any)
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
