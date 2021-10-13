import { reaction } from "mobx"
import { getSnapshot, onSnapshot } from "mobx-state-tree"
import { WishlistItem, Wishlist } from "./Wishlist"

it("Can create Wishlist Item", () => {

    const item = WishlistItem.create({
        name: "book",
        price: 50.99,
        id: 54896
    })
    expect(item.price).toBe(50.99)
    expect(item.name).toBe("book")
    item.changeName("table")
    expect(item.name).toBe("table")
})

it("Can create Wishlist", () => {
    const wishlist = Wishlist.create({
        items: [
            WishlistItem.create({
                name: "book",
                price: 50.99,
                image: "",
                id: 4864
            }),
            WishlistItem.create({
                name: "table",
                price: 210.99,
                image: "",
                id: 94315
            }),
        ]
    })

    expect(getSnapshot(wishlist)).toMatchSnapshot()
})

it("Can calculate total price", () => {
    const wishlist = Wishlist.create({
        items: [
            WishlistItem.create({
                name: "book",
                price: 50.99,
                image: ""
            }),
            WishlistItem.create({
                name: "table",
                price: 210.99,
                image: ""
            }),
        ]
    })

    let changed = 0
    reaction(() => wishlist.totalPrice, () => changed++)

    expect(wishlist.totalPrice).toBe(261.98)

    wishlist.items[0].changeName("pen")
    expect(changed).toBe(0)
    wishlist.items[0].changeImage("imagesample.jpg")
    expect(changed).toBe(0)
    wishlist.items[0].changePrice(2.99)
    expect(changed).toBe(1)
    console.log(wishlist.totalPrice)
})