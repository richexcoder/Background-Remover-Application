# Background-Remover-Application
This is a web app that removes the background from images
i built it using html css javascript and python
This is how it works:

you upload an image on the website
it sends the image to the python backend
the backend uses a library called rembg to remove the background
it sends the image back and you can download it

project files
background-remover/
│
├── index.html        (the webpage)
├── styles.css        (the styling)
├── app.js            (the javascript)
│
└── backend/
    ├── requirements.txt    (python libraries)
    └── api/
        └── main.py         (the python server)
how to run it

step 1 - set up the backend

open your terminal and go to the backend folder

cd background-remover/backend

create a virtual environment

python -m venv env

activate it (mac/linux)

source env/bin/activate

activate it (windows)

env\Scripts\activate

install the libraries

pip install -r requirements.txt

start the server

uvicorn api.main:app --reload

you should see something like "Uvicorn running on http://127.0.0.1:8000"

step 2 - open the frontend

open index.html with Live Server in VS Code

(right click index.html and click "Open with Live Server")

step 3 - use the app

pick an image
click the Remove Background button
wait a few seconds
download the result

if something breaks

make sure the backend server is actually running
make sure you installed all the libraries
check the browser console for errors (press F12)
