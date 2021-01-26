type user = {
    name: string,
    id: int,
    avatar: option<string>
}

type todo = {
    id: int,
    title: string,
    created_at: string,
    updated_at: string,
    user: Js.Nullable.t<user>
}

type state = {
    todos: array<todo>,
    loading: bool,
    sending: bool,
    user: option<user>
}

let initialState: state = {
    todos: [],
    loading: false,
    sending: false,
    user: None,
}

type action =
    | SetLoading(bool)
    | SetSending(bool)
    | SetTodos(array<todo>)
    | SetUser(option<user>)

type ReduxThunk.thunk<_> +=
  | Action(action)

let setLoading = (flag: bool) => SetLoading(flag)

let setSending = (flag: bool) => SetSending(flag)

let setTodos = (todos: array<todo>) => SetTodos(todos)

let setUser = (user: option<user>) => SetUser(user)

let pushTodo = (todo: string, s: Reductive.Store.t<ReduxThunk.thunk<state>, state>) => {
    Reductive.Store.dispatch(s, Action(setSending(true)))

    ignore(Axios.postData("/api/todos", {"todo": todo})
        ->Js.Promise.then_(value => {
            Reductive.Store.dispatch(s, Action(setTodos(value["data"])))
            Reductive.Store.dispatch(s, Action(setSending(false)))
            Js.Promise.resolve(())
        }, _)
    )
}

let removeTodo = (id: int, s: Reductive.Store.t<ReduxThunk.thunk<state>, state>) => {
    Reductive.Store.dispatch(s, Action(setSending(true)))

    ignore(Axios.delete(`/api/todos/${Belt.Int.toString(id)}`)
        ->Js.Promise.then_(value => {
            Reductive.Store.dispatch(s, Action(setTodos(value["data"])))
            Reductive.Store.dispatch(s, Action(setSending(false)))
            Js.Promise.resolve(())
        }, _)
    )
}

let loadUser = (s: Reductive.Store.t<ReduxThunk.thunk<state>, state>) => {
    ignore(Axios.get("/api/user")
        ->Js.Promise.then_(value => {
            Reductive.Store.dispatch(s, Action(setUser(value["data"])))
            Js.Promise.resolve(())
        }, _)
        ->Js.Promise.catch(_ => {
            Reductive.Store.dispatch(s, Action(setUser(None)))
            Js.Promise.resolve(())
        }, _)
    )
}

let loadTodos = (s: Reductive.Store.t<ReduxThunk.thunk<state>, state>) => {
    Reductive.Store.dispatch(s, Action(setLoading(true)))

    ignore(Axios.get("/api/todos")
        ->Js.Promise.then_(value => {
            Reductive.Store.dispatch(s, Action(setTodos(value["data"])))
            Reductive.Store.dispatch(s, Action(setLoading(false)))
            Js.Promise.resolve(())
        }, _)
    )
}

let reducer = (state, action) =>
    switch action {
        | SetLoading(loading) => {...state, loading}
        | SetSending(sending) => {...state, sending}
        | SetTodos(todos) => {...state, todos}
        | SetUser(user) => {...state, user}
    }

let appReducer = (state, action) =>
      switch action {
          | Action(action) => reducer(state, action)
          | _ => state
      }

let thunk = (store, next, action) =>
    switch action {
        | ReduxThunk.Thunk(func) => func(store)
        | _ => next(action)
    }

let thunked = (store, next) =>
    thunk(store, next)

let store = Reductive.Store.create(
    ~reducer=appReducer,
    ~preloadedState=initialState,
    ~enhancer=thunked,
    ()
)

let bootstrap = () => {
    store->Reductive.Store.dispatch(
        ReduxThunk.Thunk(loadTodos)
    )

    store->Reductive.Store.dispatch(
        ReduxThunk.Thunk(loadUser)
    )
}

include ReductiveContext.Make({
  type state = state
  type action = ReduxThunk.thunk<state>
})
