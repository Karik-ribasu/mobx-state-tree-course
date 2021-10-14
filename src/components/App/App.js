import React from "react"
import WishlistView from "../WishlistView/WishlistView";
import { values } from "mobx";
import { observer } from "mobx-react";
import { getSnapshot } from "mobx-state-tree";

const App = ({ group }) => {
  let [selectedUser, setSelectedUser] = React.useState(null)

  function selectUser(event) {
    setSelectedUser(group.users.get(event.target.value))
  }

const User = observer(( {user} ) => (
  <div>
    <WishlistView wishlist={user.wishlist} id={user.id} />
    <button onClick={user.getSuggestions}>Suggestions</button>
    <hr/>
    <h3 className="recipient">{user.recipient ? user.recipient.name : ""}</h3>
    {user.recipient && <WishlistView wishlist={user.recipient.wishlist} readonly={true}/>}
  </div>
))

  return (
    <div>
      <header><h1>My Wishlist</h1></header>
      <main>
        <button onClick={group.reload}>Reload</button>
        <select onChange={selectUser}>
          <option>- Select User -</option>
          {values(group.users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
        <button onClick={group.drawLots}>Lots</button>
        {selectedUser && <User user={selectedUser}/>}
      </main>

    </div>
  )
}

export default App;
