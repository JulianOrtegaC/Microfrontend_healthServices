// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 firebase : {
  apiKey: "AIzaSyBcmOBtGXq5SYJKJg8P8DDDZNyixtPDOvU",
  authDomain: "storagemarketdisca.firebaseapp.com",
  projectId: "storagemarketdisca",
  storageBucket: "storagemarketdisca.appspot.com",
  messagingSenderId: "223646324820",
  appId: "1:223646324820:web:0fcb6e6089955b1c68b5c1"
},

// Initialize Firebase
  production: false,
  endpoint: 'https://localhost:7183',
  urlAPIMicroServicesUser:"https://projectmicroservicesusersapi.azurewebsites.net/", 
  urlAPIMicroServicesRequest:'https://localhost:7198'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
