## Getting Started with the project

1. Run `npm install`
2. Run `npm start`

Note: TailwindCss was used for styling in this Project

## Axios configuration

If you go into [src/service/http.service.ts](https://github.com/indroneelray/react-pokemon/blob/master/src/service/http.service.ts), you can find an example on how to configure Axios in your project

### Using the configuration for api calls

If you go into [src/service/pokemon.service.ts](https://github.com/indroneelray/react-pokemon/blob/master/src/service/pokemon.service.ts), you will see how this Axios instance can be extended to isolated http services

## Router setup
If you go to [src/router.tsx](https://github.com/indroneelray/react-pokemon/blob/master/src/router.tsx), you can check out a basic AppRouter setup using `react-router` and `react-router-dom`. [<Navbar />](https://github.com/indroneelray/react-pokemon/blob/master/src/commpon-components/Navbar.tsx) is an example of an HOC and a component that uses the [`<Outlet />`](https://reactrouter.com/en/main/components/outlet)

## Pages
The Pages folder contains a folder for each route declared in Router. An easy to follow folder structure that makes finding components easier and more intuitive

## Pagination
The [`<Homepage />`](https://github.com/indroneelray/react-pokemon/blob/master/src/pages/Homepage/Homepage.tsx) component contains a very basic example of **Pagniation**.

# Contribute!
Please feel free to raise pull requests to add more examples of React concepts/Web dev implementations to make this a one stop cheat sheet for React developers!! Happy Coding🎉🎉🎉