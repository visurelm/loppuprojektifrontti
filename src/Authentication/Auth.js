import auth0 from 'auth0-js';
import history from '../history';
import axios from "axios/index";

/*eslint no-restricted-globals: 0*/

const LOGIN_SUCCESS_PAGE = "/";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'jermu.eu.auth0.com',
        clientID: 'etTCTSDZi6ev3eKQomKUA23YEwE0D7mw',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'http://elsa',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    randomint = 0;

    getrandomint = () => {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        this.randomint = axios.get("/users").then((r)=>{this.randomint =  r.data.length});

    };


    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getrandomint();
    }

    login() {
        this.auth0.authorize();
    };

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

    testLogin(){
        this.auth0.loginWithCredentials({
            connection: 'Username-Password-Authentication',
            username: 'Jermu',
            password: 'Jermuilija1',
            scope: 'openid profile email'
        })
    }

    signUpStudent(username, password, email) {
    // signUpStudent(username, password, email,groupid,contactpersonuserid) {
        let emailtopush = email ? email : "elsa" + (this.randomint++) + "@elsa.fi"
        let added = this.auth0.signup({
            connection: "Username-Password-Authentication",
            email: emailtopush,
            username: username,
            password: password,
            app_metadata: {roles: "Student"}
        }, function (err, o) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(o);
                axios.defaults.headers.common = {
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                };
                axios.post("/users", {
                    username: o.username,
                    role: "Student",
                    points: 0,
                    groupid: 1,
                    completedtasks: [],
                    contactpersonuserid: 18,
                    testid: "auth0|" + o.Id
                });
            }
        }, (err) => {
            throw err;
        });
        console.log("Lisättiin", added);
    };

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
        location.pathname = LOGIN_FAILURE_PAGE;
        this.auth0.logout({returnTo: 'http://localhost:3000'});
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}
