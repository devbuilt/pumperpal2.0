// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBo7vxpa0mVkPegO0B3Yk-ubM61nBSA7hs",
    authDomain: "pumperpal-cc45a.firebaseapp.com",
    databaseURL: "https://pumperpal-cc45a.firebaseio.com",
    projectId: "pumperpal-cc45a",
    storageBucket: "pumperpal-cc45a.appspot.com",
    messagingSenderId: "44945402257"
  };
  firebase.initializeApp(config);

// FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);