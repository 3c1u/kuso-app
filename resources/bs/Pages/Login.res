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
        <h2>{ReasonReact.string(`Login`)}</h2>
        <form onSubmit={(e) => {
            ReactEvent.Form.preventDefault(e)
            ignore(Axios.postData(`/api/login`, {"email": email, "password": password})->Js.Promise.then_(_ => {
                dispatch(ReduxThunk.Thunk(Store.loadUser))
                Inertia.visit("/")
                Js_promise.resolve(())
            }, _))
        }}>
            <input type_="email" name="email" className="form-input" placeholder="Email" value={email}
                onChange={handleEmailChange}/>
            <input type_="password" name="password" className="form-input" placeholder="Password" value={password}
                   onChange={handlePasswordChange}/>
            <button className="login-button">{ReasonReact.string("Login")}</button>
        </form>
    </div>
}

let default = make
