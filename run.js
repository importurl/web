function run();{
  let print = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⠀</title>
    <style>
        body {
            font-family: Calibri, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: indigo;
        }
        .container {
            background-color: #270042;
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 5px #000000;
        }
        .container h2{
            color: white;
            }
        input {
            font-family: Calibri, sans-serif;
            display: block;
            border-radius: 5px;
            margin: 10px 0;
            padding: 5px;
            width: 200px;
            transition: 0.5s;
            background-color: black;
            color: white;
        }
        input:hover{
            border-radius: 10px;
            }
        button {
            font-family: Calibri, sans-serif;
            display: inline;
            margin: 5px 0;
            padding: 5px 10px;
            background-color: #414a4c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.5s;
        }
        button:hover{
            background-color: #414a4c
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button onclick="login()">Login</button>
        <button onclick="register()">Register</button>
        <p id="message"></p>
    </div>

    <script>
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedPassword = localStorage.getItem(username);

            if (storedPassword === password) {
                document.getElementById('message').textContent = 'Login successful! Welcome, ' + document.getElementById('username').value + '.';

var location = window.location.href;
var directoryPath = location.substring(0, location.lastIndexOf("/")+1)+'iframe.html';
let string = `<html>
<head>
    <title>⠀</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <style>
    body{
    height: 100vh;
    width: 100vw;
    margin: 0;
    background: black;
    justify-content: center;
    overflow: hidden;
    }
    iframe{
    height: 100vh;
    width: 100vw;
    margin: 0;
    border: none;
    background: black;
    justify-content: center;
    overflow: hidden;
    }
    </style>
</head>
<body>
<iframe width="100vw" height="100vh" src="https://voidnetworkisthebest.global.ssl.fastly.net" frameborder="0" scrolling="no" allowfullscreen></iframe>';
</body>
</html>`;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(1000).then(() => { document.body.innerHTML = string; });
            } else {
                document.getElementById('message').textContent = 'Invalid username or password.';
            }
        }

        function register() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                localStorage.setItem(username, password);
                document.getElementById('message').textContent = 'Registration successful!';
            } else {
                document.getElementById('message').textContent = 'Please enter both username and password.';
            }
        }
    </script>
</body>
</html>`

document.body.innerHTML = print
}
