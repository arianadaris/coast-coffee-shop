![Coast_Header](https://github.com/arianadaris/coast-coffee-shop/assets/73635827/8e8872e8-5719-4434-94b7-7fe8257f911c)
<h1></h1>

<h5 align="center">ReactJS / TailwindCSS / PostgreSQL / .NET Core Web API</h5>
<h1 align="center">Coast Coffee Shop<br>
  <a href="http://www.arianadaris.dev/" target="_blank"><img src="https://img.shields.io/badge/View Website-informational?style=flat&logo=java&logoColor=3C2F2A&color=F3F0EE" /></a>
</h1>

<h3>A fake coffee shop website with complete backend functionality, including user authentication, account management, and order tracking.</h3>

<h4>Overview</h4>
<p>I created this project to learn how to do the following:</p>
  • Manage a PostgreSQL database with a data manager, which updates or removes entries in tables in the database<br>
  • Use a database-first EntityFramework approach to structure the database and models before creating an API<br>
  • Develop a .NET Core API that manipulates database data (retrieved from the data manager) and returns data to the interface<br>
  • Create a user authentication system from scratch using React Contexts, ensuring critical user information is secure<br>

<h4>Impact</h4>

<h4>Features</h4>
  • View a menu containing all the products contained in the database<br>
  • Create an account, used to place orders and track rewards<br>
  • View a cart and add/update/remove items from it<br>
  • "Place" an order and check order status<br>
  • Log into an existing account<br>
<h1></h1>

<h4>To Dos</h4>
  • Interface - Account page rewards section<br>
  • Interface - Rewards page<br>
  • Interface - Order page<br>
  • Interface - Order section in Account page ?<br>
  • Interface - Order status component<br>
  • Interface - Make mobile responsive<br>
  • Backend - Update user information<br>
  • Backend - Order system<br>
  • Backend - Delete user account and cart<br>

<h4>Installation & Set Up</h4>
<h5>PostgreSQL Set Up</h5>
1. Navigate to the folder containing SQL function files (create_tables.sql, drop_db.sql, insert_data.sql)

2. Create the coffeeshop database if it does not exist:

```sh
psql -U postgres -h localhost
CREATE DATABASE coffeeshop;
```

3. If the coffeeshop database exists:

```sh
psql -U postgres -h localhost -d coffeeshop
```

4. Create and insert data into the tables

```sh
\i create_tables.sql
\i insert_data.sql
\i drop_db.sql
```

<h5>Front-End Set Up</h5>
1. Install dependencies

```sh
npm install
```

2. Start the development server

```sh
npm start
```

<h4>Building & Running for Production</h4>
1. Generate a full static production build

```sh
npm build serve
```

2. Preview the site as it will appear once deployed

```sh
npm build serve
```
