import auth0 from 'auth0-js';

/*eslint no-restricted-globals: 0*/

const LOGIN_SUCCESS_PAGE = "/Users";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'elsa.eu.auth0.com',
        clientID: 'RBYAe8Ys8Eom5BKxlNUrHAMtset7ehlj',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://elsa.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
                sessionStorage.setItem("access-token", authResult.accessToken);
                sessionStorage.setItem("id_token", authResult.idToken);
                sessionStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        })
    };

    logout() {
        sessionStorage.removeItem("access-token");
        sessionStorage.removeItem("id_token");
        sessionStorage.removeItem("expires_at");

        location.pathname = LOGIN_FAILURE_PAGE;
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(sessionStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
}
