import {defineStore} from 'pinia';

export const useLoaderStore = defineStore('useLoaderStore', {
  state: () => ({
    isLoading: true
  }),
  actions: {
    setIsLoading(newState: boolean) {
      this.$patch({isLoading: newState})
    },
  }
})
