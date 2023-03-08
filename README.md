# Hashnode Clone

[Hashnode](https://hashnode.com/) Fullstack Clone using Django Rest Framework with Reactjs.
* **About Hashnode:** It's a free blogging platform and community of developers that enables you to publish articles on your domain with a custom blog page. Hashnode allows you to completely customise your blog page with built-in features, widgets and integrations.
## Demo

See the [Demo](https://hashnode-clone-one.vercel.app/) for a live demonstration of the website.


## Features

- **Light/dark mode toggle based on User preferances**
- **Live previews**
- **Fullscreen mode**
- **Cross platform**
- **User Management:** 
  - User Registration with E-mail activation
  - Login/Logout
  - Password change
  - Password reset via e-mail
  - Social Media authentication(using only google account)


## Run Locally  

Clone the project  

~~~bash  
  git clone https://github.com/ZakariaBrahimi/Hashnode-Clone.git my-project
~~~

Go to the project directory  

~~~bash  
  cd my-project
~~~
* First of all, you should start both of servers frontend and backend
### Backend:

Go to the **backend** project directory
~~~bash  
  cd backend
~~~
Install all python packages in requirements.txt file
~~~bash  
  pip install -r requirements.txt
~~~
Start django project
~~~bash  
  django-admin startproject project-name .
~~~
Create two apps
~~~bash  
  python manage.py startapp app1
  python manage.py startapp app2
~~~

Migrate the database and Start the server
~~~bash  
  python manage.py makemigrations
  python manage.py migrate

  python manage.py runserver
~~~


### Frontend:

Install dependencies  
~~~bash  
npm install
~~~

#### Environment Variables  

To run this project, you will need to add the following environment variables to your .env file  
~~~bash  
REACT_APP_API_URL  = http://127.0.0.1:8000/hashnode/api/
REACT_APP_AUTH_URL = http://127.0.0.1:8000/auth/
~~~

Start the server  
~~~bash  
npm run start
~~~

## Tech Stack
- **Programming languages** — Python, JavaScript
- **Backend Framework** — Django Rest Framework
- **Frontend Framework** — React.js
- **CSS Framework** — Tailwind CSS
- **SQL data storage** — PostgreSQL
- **Hosting** — [Vercel](http://vercel.com/) (Client) and [Render](https://render.com/) (Server).
- **Others** — [Axios](https://axios-http.com/docs/intro), [dj-rest-auth](https://dj-rest-auth.readthedocs.io/en/latest/)


## Lessons Learned  

What did you learn while building this project? What challenges did you face and how did you overcome t


## Acknowledgements  

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
