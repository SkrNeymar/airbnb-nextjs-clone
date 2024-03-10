<br/>
<p align="center">
  <h3 align="center">Next.js 14 Airbnb Full Stack Clone</h3>

  <p align="center">
    Next.js App Route, NextAuth, React, Tailwind, Prisma, MongoDB, 
    <br/>
    <br/>
    <a href="https://nextjs-14-airbnb.vercel.app/">View Demo</a>
  </p>
</p>

## About The Project

![Screen Shot](https://res.cloudinary.com/djhhzsnda/image/upload/v1707379344/nextbnb_mbiexy.png)

Features:

- Next.js 14 App Route
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google & Github OAuth authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
- Favorites System
- Shareable URL filters
- POST and DELETE routes in route handlers (app/API)
- fetch data in server react components by directly accessing the database without exposing the API
- unify loading and error handling
- handle relations between Server and Child components!

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

### Cloning the repository

```shell
git clone https://github.com/SkrNeymar/airbnb-nextjs-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_PRESET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## License

Distributed under the MIT License. See [LICENSE](https://github.com/SkrNeymar/airbnb-nextjs-clone/blob/main/LICENSE.txt) for more information.
