
## Admin

Requirements: 

* JDK 1.8
* Maven

Start the server:
```sh
$ mvn clean compile spring-boot:run
```
Test: http://localhost:8080

## Client

Requirements: 

* Node 4.6 (https://nodejs.org/en/download/)
* Ionic 2
```sh
$ npm install -g ionic
$ npm install -g cordova
```

Pre-requisites:
```sh
$ npm install
$ sudo chown -R <user> * // only for linux
$ sudo ionic hooks add // only for linux
```


Test web application:
```sh
$ ionic serve
```

Android emulator test:
```sh
$ ionic build android
$ ionic run android
```

