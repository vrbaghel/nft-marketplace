import '../styles/globals.css'

/**
 * my-app component, any global styles to be used within application are declared here
 *
 * @param {*} { Component, pageProps }
 * @return {*} 
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
