# Honeydew

### A spin on the classic todo app in Angular

**Honeydew** is the brainchild of my experience learning Angular. I decided to put a spin on the classic todo app and create a "honey-do" (Honeydew) list. I also wanted to experiment with Google's Firestore (https://firebase.google.com/products/firestore/) while I was at it.

## Overview

This app was created using Angular's CLI (https://cli.angular.io/). 

As with your typical todo app you can add new *dews* to your Honeydew list. *Dews* can be marked as completed which crosses them off in the list. You can also **Harvest** the *dews* to remove all existing *dews* and start fresh.

![Honeydew](resources/HoneydewScreenshot.png)

### Running the app

Using the Angular CLI makes running the Honeydew app as easy as ```ng serve --open```

By default, this will serve up the app at this url http://localhost:4200/ .

You can also broadcast it this way ```ng serve --host 0.0.0.0``` to open it up to anyone in your network. This is what I do so that my wife can properly update my Honeydew list. You'll just need to replace "localhost" in the url above with your machine's IP address.

### Firestore Configuration

Firestore is a cloud database system that performs live syncing of your data from storage to the clients accessing it. This is a great solution for a list being shared between multiple users.

Getting set up with Firestore is pretty simple. You can pretty much find out everything you need to know/do at this link (https://firebase.google.com/docs/web/setup)

I'm using Google's Spark plan which is the free, hobbyist level account. It provides more than enough storage and bandwith to run Honeydew. Obviously you can set up other paid plans if you'd like but anyone can run Honeydew on the Spark setup.

Once you have your Firestore account and project set up you'll need to configure Honeydew to use your particular Firestore database. 

Update the Firestore (firebase) key data in the environment file in this directory **/src/environments**.

```
export const environment = {
  production: false,
  firebase: {
    apiKey: "##API_KEY##",
    authDomain: "##AUTH_DOMAIN##",
    databaseURL: "##DATABASE_URL##",
    projectId: "##PROJECT_ID##",
    storageBucket: "",
    messagingSenderId: "##MESSAGING_SENDER_ID"
  }
};
```