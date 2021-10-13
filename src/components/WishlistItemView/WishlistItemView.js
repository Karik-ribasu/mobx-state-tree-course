import React from "react"
import WishlistItemEdit from "../WishlistItemEdit/WishlistItemEdit"
import { observer } from "mobx-react"
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"

const WishlistItemView = ({ item }) => {
    let [editing, setEditing] = React.useState(false)
    let [itemClone, setItemClone] = React.useState(null)

    function toggleEdit() {
        setEditing(!editing)
        setItemClone(clone(item))
    }

    function saveChanges() {
        applySnapshot(item, getSnapshot(itemClone))
        setEditing(!editing)
    }

    function renderEditable() {
        return <WishlistItemEdit item={itemClone}></WishlistItemEdit>
    }

    return editing ? (
        <li className="wishlist__item">
            {renderEditable()}
            <button onClick={saveChanges}>save</button>
            <button onClick={toggleEdit}>close</button>
        </li>
    ) : (
        <li className="wishlist__item">
            {item.image && <img src={item.image} classname="wishlist__item-image"></img>}
            <h3 className="wishlist__item-name">{item.name}</h3>
            <span className="wishlist__item-price">{item.price}</span>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={item.remove}>Remove</button>
        </li>
    )


}

export default observer(WishlistItemView)