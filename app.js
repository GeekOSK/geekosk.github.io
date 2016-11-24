angular.module('GeekOSK', ['ngMaterial', 'ngAnimate', 'ui.router', 'firebase'])
    .config(function($mdThemingProvider) {

    });
var config = {
    apiKey: "AIzaSyCZRi7NLyenH3oWriZUg6jt6wALshrKFdQ",
    authDomain: "geekosk-bab95.firebaseapp.com",
    databaseURL: "https://geekosk-bab95.firebaseio.com",
    storageBucket: "geekosk-bab95.appspot.com",
    messagingSenderId: "790212317255"
};
firebase.initializeApp(config);
