@react.component
let make = (~user: option<Store.user>) =>
    switch user {
        | None => <span className="icon-skeleton" />
        | Some(user) => <img className="icon" src={switch user.avatar {
            | Some(avatar) => avatar
            | None => ""
        }} alt={user.name} width="24" />
    }
