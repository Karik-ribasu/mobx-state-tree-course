import { getSnapshot } from 'mobx-state-tree';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { Group } from "./models/Group"

const initialState = {
  users: {
    "u1i2": {
      id: "u1i2",
      name: "cobaia 1",
      gender: "m"
    },

    "ufg3": {
      id: "ufg3",
      name: "cobaia 2",
      gender: "f"
    }
  }
}

const group = Group.create(initialState)

function renderApp() {
  ReactDOM.render(
    <App group={group} />, document.getElementById('root')
  );
}

renderApp()

if (module.hot) {
  // case 1: new components
  module.hot.accept(["./components/App/App"], () => {
    renderApp()
  })

  // case 2: new changes on models
  module.hot.accept(["./models/Wishlist", "./models/Group"], () => {
    const snapshot = getSnapshot(group)
    group = Group.create(snapshot)
    renderApp()
  })
}