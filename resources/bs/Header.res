let stateSelector = state => state

@react.component
let make = () => {
    let (email, setEmail) = React.useState(_ => "")
    let (password, setPassword) = React.useState(_ => "")
    let dispatch = Store.useDispatch()
    let {user} = Store.useSelector(stateSelector)
    let handleEmailChange = (e) => {
        let target = ReactEvent.Form.target(e)
        setEmail(target["value"])
    }
    let handlePasswordChange = (e) => {
        let target = ReactEvent.Form.target(e)
        setPassword(target["value"])
    }

    <div className="header">
        <h1>{ReasonReact.string("Kuso App")}</h1>
        {
            switch user {
                | Some(user) =>
                    <div className="logout-group">
                        <p>{ReasonReact.string("Logged as: " ++ user.name)}</p>
                        <form onSubmit={(e) => {
                            ReactEvent.Form.preventDefault(e)
                            ignore(Axios.post(`/api/logout`)->Js.Promise.then_(_ => {
                                dispatch(ReduxThunk.Thunk(Store.loadUser))
                                Js.Promise.resolve(())
                            }, _))
                        }}>
                            <button className="logout-button">{ReasonReact.string("Logout")}</button>
                        </form>
                    </div>
                | None =>
                    <div className="login-group">
                        <Inertia.Link href="/login">
                            <span className="login-link">
                                {ReasonReact.string("Login")}
                            </span>
                        </Inertia.Link>
                    </div>
            }
        }
    </div>
}
