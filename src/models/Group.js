import { types } from "mobx-state-tree"
import { Wishlist } from "./Wishlist"

export const User = types.model({
    id: types.string,
    name: types.string,
    gender: types.enumeration("gender", ["m", "f"]),
    wishlist: types.optional(Wishlist, {})
})

export const Group = types.model({
    users: types.map(User)
})
