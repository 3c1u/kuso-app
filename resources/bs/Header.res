let stateSelector = state => state

@react.component
let make = () => {
    let dispatch = Store.useDispatch()
    let {user} = Store.useSelector(stateSelector)

    <div className="header">
        <h1 className="header-branding">{ReasonReact.string("Kuso App")}</h1>
        {
            switch user {
                | Some(user) =>
                    <div className="logout-group flex flex-row items-center">
                        <p className="flex flex-row items-center m-0 p-0 text-sm">
                            <UserIcon user={Some(user)} />
                            <span className="ml-2">
                                {ReasonReact.string("Logged as: " ++ user.name)}
                            </span>
                        </p>
                        <form className="flex" onSubmit={(e) => {
                            ReactEvent.Form.preventDefault(e)
                            ignore(Axios.post(`/api/logout`)->Js.Promise.then_(_ => {
                                dispatch(ReduxThunk.Thunk(Store.loadUser))
                                Js.Promise.resolve(())
                            }, _))
                        }}>
                            <button className="fancy-link text-sm m-0 ml-2">{ReasonReact.string("Logout")}</button>
                        </form>
                    </div>
                | None =>
                    <div className="login-group">
                        <Inertia.React.Link href="/login">
                            <span className="fancy-link">
                                {ReasonReact.string("Login")}
                            </span>
                        </Inertia.React.Link>
                    </div>
            }
        }
    </div>
}
