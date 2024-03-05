import {createVuetify, } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'surface-bright': '#FFFFFF',
        'surface-light': '#EEEEEE',
        'surface-variant': '#424242',
        'on-surface-variant': '#EEEEEE',
        primary: '#1867C0',
        'primary-darken-1': '#1F5592',
        secondary: '#48A9A6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        black: '#222222',
        white: '#FFFFFF',
    },
}
const myCustomDarkTheme = {
    dark: true,
    colors: {
        background: '#121212',
        surface: '#1E1E1E',
        'surface-bright': '#333333',
        'surface-light': '#333333',
        'surface-variant': '#121212',
        'on-surface-variant': '#EEEEEE',
        primary: '#BB86FC',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#03DAC6',
        error: '#CF6679',
        info: '#03A9F4',
        success: '#4CAF50',
        warning: '#FFC107',
        'black-grey': '#222222',
        white: '#FFFFFF',
        'white-second': '#ECEEEC'
    },
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'myCustomDarkTheme',
            themes: {
                myCustomLightTheme,
                myCustomDarkTheme
            },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})