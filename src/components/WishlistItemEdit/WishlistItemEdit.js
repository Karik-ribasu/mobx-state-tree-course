import React from "react"
import { observer } from "mobx-react"

const WishlistItemEdit = ({ item }) => {

    function onChangeName(event) {
        item.changeName(event.target.value)
    }

    function onChangePrice(event) {
        const price = event.target.value ? parseFloat(event.target.value) : 0;
        if (!isNaN(price)) item.changePrice(price)
    }

    function onChangeImage(event) {
        item.changeImage(event.target.value)
    }

    return (
        <div className="wishlist__item-edit">
            Name: <input value={item.name} placeholder="Name" onChange={onChangeName}></input>
            <br />
            Price: <input value={item.price} placeholder="Price" onChange={onChangePrice}></input>
            <br />
            Image: <input value={item.image} placeholder="Image" onChange={onChangeImage}></input>
        </div>
    )
}

export default observer(WishlistItemEdit)