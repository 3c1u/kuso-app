import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import { InertiaProgress } from '@inertiajs/progress'
import { Provider, store, bootstrap, dispatch, setTodos } from '../bs/Store.bs'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

// pusher
window.Pusher = Pusher
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '96d8e58c80516298847a',
    cluster: 'ap3',
    forceTLS: true
})

const channel = window.Echo.channel('global')
channel.listen('.new-todo', function(data) {
    console.log(data)
    dispatch(setTodos(data.todos))
})

axios.defaults.withCredentials = true

bootstrap()

InertiaProgress.init({
    color: '#1478f1',
    showSpinner: true
})

const el = document.getElementById('app')

render(
    <Provider.make store={store}>
        <InertiaApp
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={name => import(`../bs/Pages/${name}.bs`).then(module => module.default)}
        />
    </Provider.make>,
    el
)
