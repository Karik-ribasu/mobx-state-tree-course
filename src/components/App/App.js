import React from "react"
import WishlistView from "../WishlistView/WishlistView";
import { values } from "mobx";
import { getSnapshot } from "mobx-state-tree";

const App = ({ group }) => {
  let [selectedUser, setSelectedUser] = React.useState(null)

  function selectUser(event) {
    setSelectedUser(group.users.get(event.target.value))
  }

  return (
    <div>
      <header><h1>My Wishlist</h1></header>
      <main>
        {selectedUser && <WishlistView wishlist={selectedUser.wishlist} id={selectedUser.id} />}
        <select onChange={selectUser}>
          <option>- Select User -</option>
          {values(group.users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
      </main>

    </div>
  )
}

export default App;
