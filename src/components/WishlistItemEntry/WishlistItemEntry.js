import { getSnapshot } from "mobx-state-tree"
import React from "react"

import { WishlistItem } from "../../models/Wishlist"
import WishlistItemEdit from "../WishlistItemEdit/WishlistItemEdit"

const WishlistItemEntry = ({ wishlist }) => {

    let [entry, setEntry] = React.useState(
        WishlistItem.create({
            name: "",
            price: 0,
            id: parseInt(100 * Math.random())
        })
    )

    function addWishlist() {
        const entryData = getSnapshot(entry)
        if (entryData.name && entryData.price) {
            wishlist.add(entry)
            setEntry(
                WishlistItem.create({
                    name: "",
                    price: 0,
                    id: parseInt(10000 * Math.random())
                }))
        }
    }

    return (
        <div>
            <WishlistItemEdit item={entry} />
            <button onClick={addWishlist}>Add</button>
        </div>
    )
}

export default WishlistItemEntry
