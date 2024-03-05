import {defineStore} from 'pinia'

export const useScreenStore = defineStore('screen', {
    state: () => ({
        screenWidth: null,
    }),
    actions: {
        updateScreenSize(width: null) {
            console.log(width)
            this.screenWidth = width;
        },
    },
    getters: {
        windowWidth: state => state.screenWidth,
    },
})