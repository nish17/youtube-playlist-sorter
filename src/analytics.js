import ReactGA from 'react-ga'

export const initGA = () => {
    // console.log('GA init')
    ReactGA.initialize('UA-170963982-2')
}
export const logPageView = () => {
    // console.log(`Logging pageview for ${window.location.pathname,window.location.search,window.location.hash}`)
    ReactGA.set({ page: window.location.pathname+window.location.search+window.location.hash })
    ReactGA.pageview(window.location.pathname+window.location.search+window.location.hash)
}
export const logEvent = (category = '', action = '') => {
    if (category && action) {
        ReactGA.event({ category, action })
    }
}
export const logException = (description = '', fatal = false) => {
    if (description) {
        ReactGA.exception({ description, fatal })
    }
}