import { types, getParent, destroy } from "mobx-state-tree"

export const WishlistItem = types.model({
    name: types.string,
    price: types.number,
    image: types.optional(types.string, ""),
    id: types.number
})
    .actions(self => ({
        changeName(newName) {
            self.name = newName
        },
        changePrice(newPrice) {
            self.price = newPrice
        },
        changeImage(newImage) {
            self.image = newImage
        },
        remove() {
            getParent(self, 2).remove(self)
        }
    }))

export const Wishlist = types.model({
    items: types.optional(types.array(WishlistItem), []),
})
    .actions(self => ({
        add(newItem) {
            self.items.push(newItem)
        },
        remove(item) {
            console.log(item)
            destroy(item)
        }
    }))
    .views(self => ({
        get totalPrice() {
            return self.items.reduce((sum, entry) => sum + entry.price, 0)
        }
    }))