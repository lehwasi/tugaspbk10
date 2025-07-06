import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '../src/stores/user'

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('melakukan login dengan benar', () => {
    const user = useUserStore()
    user.login('Ali', 'ali@email.com')
    expect(user.name).toBe('Ali')
    expect(user.email).toBe('ali@email.com')
  })

  it('logout mengosongkan data user', () => {
    const user = useUserStore()
    user.login('Ali', 'ali@email.com')
    user.logout()
    expect(user.name).toBe('')
    expect(user.email).toBe('')
  })
})
