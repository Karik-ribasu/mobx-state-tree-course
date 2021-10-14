import React from "react"
import { observer } from "mobx-react"
import { onSnapshot } from "mobx-state-tree"

import { Wishlist } from "../../models/Wishlist"
import WishlistItemView from "../WishlistItemView/WishlistItemView"
import WishlistItemEntry from "../WishlistItemEntry/WishlistItemEntry"

const WishlistView = ({ wishlist, id, readonly }) => {

    // let [initialState, setInitialState] = React.useState(
    //     localStorage.getItem(`wishlistApp${id}`) ? Wishlist.create(JSON.parse(localStorage.getItem(`wishlistApp${id}`))) : wishlist
    // )

    // onSnapshot(initialState, snapshot => {
    //     localStorage.setItem(`wishlistApp${id}`, JSON.stringify(snapshot))
    // })

    return (
        <div className="wishlist">
            <ul>{wishlist.items.map((item, index) => <WishlistItemView key={item.key} item={item} readonly={readonly}/>)}</ul>
            <p>Total Price: {wishlist.totalPrice}</p>
            {!readonly && <WishlistItemEntry wishlist={wishlist} />}
        </div>
    )
}

export default observer(WishlistView)