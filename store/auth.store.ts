import {defineStore} from 'pinia';

interface IAuthStore {
  email: string
  name: string
  status: boolean
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    name: '',
    status: false
  }
}

export const useAuthStore = defineStore('useAuthStore', {
  state: () => defaultValue,
  getters: {
    isAuth: state => state.user.status
  },
  actions: {
    clear() {
      this.$patch(defaultValue)
    },
    set(newUser: IAuthStore) {
      this.$patch({user: newUser})
    }
  }
})
