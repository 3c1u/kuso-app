let stateSelector = state => state

@react.component
let make = () => {
    let (todo, setTodo) = React.useState(_ => ``)
    let dispatch = Store.useDispatch()
    let handleSubmit = (e) => {
        if (Js_string.length(todo) !== 0) {
            dispatch(ReduxThunk.Thunk(Store.pushTodo(todo)))
            setTodo(_ => ``)
        }
        ReactEvent.Form.preventDefault(e)
    }
    let {loading, sending, todos, user} = Store.useSelector(stateSelector)
    let isDeletable = (t: Store.todo) => {
        switch (Js.toOption(t.user), user) {
            | (None, _) => true
            | (_, None) => false
            | (Some(u1), Some(u2)) => u1.id === u2.id
        }
    }
    let handleChange = (e) => {
        let target = ReactEvent.Form.target(e)
        setTodo(target["value"])
    }

    <div className="app-body">
        <div className="app-container">
            <h2 className="todos-heading">{ReasonReact.string("Todos")}</h2>
            <div className="todos">
                {
                    if loading {
                        <p>{ReasonReact.string(`loading...`)}</p>
                    } else {
                        ReasonReact.array(Belt.Array.map(todos, v =>
                            <p className="todo-item" key={Belt.Int.toString(v.id)}>
                                {if isDeletable(v) {
                                    <DeleteButton onClick={(_) => {
                                        dispatch(ReduxThunk.Thunk(Store.removeTodo(v.id)))
                                        ()
                                    }}/>
                                } else {
                                    <UserIcon user={Js.toOption(v.user)} />
                                }}
                                <div className="todo-label-container">
                                    <span className="todo-label">
                                        {ReasonReact.string(v.title)}
                                    </span>
                                    {
                                        switch Js.toOption(v.user) {
                                            | None => <span />
                                            | Some(user) =>
                                                <span className="user-label">
                                                    {ReasonReact.string(`（${user.name}）`)}
                                                </span>
                                        }
                                    }
                                </div>
                            </p>)
                        )
                    }
                }
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input className="todo-input" type_="text" value={todo} onChange={handleChange} placeholder="Lorem ipsum..." />
                    <button className="add-button" disabled={sending || Js_string.length(todo) === 0}>
                        {ReasonReact.string("Add")}
                    </button>
                </form>
            </div>
        </div>
    </div>
}
