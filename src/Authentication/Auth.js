import auth0 from 'auth0-js';
import history from '../history';

/*eslint no-restricted-globals: 0*/

const LOGIN_SUCCESS_PAGE = "/Users";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'jermu.eu.auth0.com',
        clientID: 'etTCTSDZi6ev3eKQomKUA23YEwE0D7mw',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'http://elsa',
        responseType: 'token id_token',
        scope: 'read:users'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace(LOGIN_SUCCESS_PAGE);
                location.pathname = LOGIN_SUCCESS_PAGE
            } else if (err) {
                history.replace(LOGIN_FAILURE_PAGE);
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        // history.replace('/');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
        location.pathname  = LOGIN_FAILURE_PAGE;
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    // handleAuthentication() {
    //     this.auth0.parseHash((err, authResult) => {
    //         if (authResult && authResult.accessToken && authResult.idToken) {
    //             let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
    //             sessionStorage.setItem("access-token", authResult.accessToken);
    //             sessionStorage.setItem("id_token", authResult.idToken);
    //             sessionStorage.setItem("expires_at", expiresAt);
    //             location.hash = "";
    //             location.pathname = LOGIN_SUCCESS_PAGE;
    //         } else if (err) {
    //             location.pathname = LOGIN_FAILURE_PAGE;
    //             console.log(err);
    //         }
    //     })
    // };
    //
    // logout() {
    //     sessionStorage.removeItem("access-token");
    //     sessionStorage.removeItem("id_token");
    //     sessionStorage.removeItem("expires_at");
    //
    //     location.pathname = LOGIN_FAILURE_PAGE;
    // }
    //
    // isAuthenticated() {
    //     let expiresAt = JSON.parse(sessionStorage.getItem("expires_at"));
    //     return new Date().getTime() < expiresAt;
    // }
}
