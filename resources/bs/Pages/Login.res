@react.component
let make = () => {
    let (email, setEmail) = React.useState(_ => "")
    let (password, setPassword) = React.useState(_ => "")
    let dispatch = Store.useDispatch()
    let handleEmailChange = (e) => {
        let target = ReactEvent.Form.target(e)
        setEmail(target["value"])
    }
    let handlePasswordChange = (e) => {
        let target = ReactEvent.Form.target(e)
        setPassword(target["value"])
    }

    <div>
        <Header />
        <div className="app-body">
            <div className="app-container">
                <h2 className="todos-heading">{ReasonReact.string(`Login`)}</h2>
                <form className="login-form" onSubmit={(e) => {
                    ReactEvent.Form.preventDefault(e)
                    ignore(Axios.postData(`/api/login`, {"email": email, "password": password})->Js.Promise.then_(_ => {
                        dispatch(ReduxThunk.Thunk(Store.loadUser))
                        Inertia.visit("/")
                        Js_promise.resolve(())
                    }, _))
                }}>
                    <input type_="email" name="email" className="form-input mt-4" placeholder="Email" value={email}
                        onChange={handleEmailChange}/>
                    <input type_="password" name="password" className="form-input mt-4" placeholder="Password" value={password}
                           onChange={handlePasswordChange}/>
                    <button className="login-button mt-4 mx-auto">{ReasonReact.string("Login")}</button>
                </form>
            </div>
        </div>
    </div>
}

let default = make
