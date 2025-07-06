import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '../src/stores/cart'

describe('Cart Store', () => {
  setActivePinia(createPinia())

  it('menambahkan item ke cart', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, name: 'Bakso' })
    expect(cart.items.length).toBe(1)
    expect(cart.items[0].name).toBe('Bakso')
  })

  it('menghapus item dari cart', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, name: 'Bakso' })
    cart.removeFromCart(1)
    expect(cart.items.length).toBe(0)
  })
})
