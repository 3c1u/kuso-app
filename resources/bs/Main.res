ReactDOMRe.renderToElementWithId(
    <Store.Provider store={Store.store}>
        <App />
    </Store.Provider>,
    "root",
)

Store.store->Reductive.Store.dispatch(
    ReduxThunk.Thunk(Store.loadTodos)
)

Store.store->Reductive.Store.dispatch(
    ReduxThunk.Thunk(Store.loadUser)
)
