import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import { InertiaProgress } from '@inertiajs/progress'
import { Provider, store, bootstrap } from '../bs/Store.bs'

axios.defaults.withCredentials = true

bootstrap()

InertiaProgress.init({
    color: '#ed8936',
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
