# Boilerplate of React, Express, MongoDB, Passport and Axios.

# Features

* React v16+
* React-Router v4+
* Express v4+
* MongoDB
* PassportJS
* AxiosJS

# How it works

Express runs on a port and React on another.
Whenever the app makes a request that couldn't be found within react-router routes, React will forward the request to the server specified in `"proxy"` which is the Express server in this case.
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "stop": "taskkill /f /im node.exe"
  },
  "proxy": "http://localhost:3001"
```

# Getting started

In root directory run
```npm install```
and in client directory run
```npm install```

Start Express on port 3001 as React normally starts on 3000
```PORT=3001 node server/www```
or use nodemon for auto restart server after saving
```PORT=3001 nodemon server/www```

Finally start React, in client directory run
```npm start```

# Production

See [this article](https://daveceddia.com/create-react-app-express-production/) on how to deploy the project to production 

