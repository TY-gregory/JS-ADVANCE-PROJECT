<p align="center">

  <h3 align="center">WHERE DO YOU WANT TO GO ?</h3>

  <p align="center">
    cities' life quality of life
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#links-contacts">Links & Contacts</a></li>
  </ol>
</details>

## About The Project

This web application made with Javascript and has the function of retrieving data on the quality of life of cities present from the free API of [Teleport](https://developers.teleport.org/api/getting_started/) and displaying them.

The user by typing in the name of the desired city will find a set of statistics such as :

- the total score of the city and a brief description of it
- the partial scores of various indicators such as: housing, cost of living, startups, venture capital, travel connectivity, commuting, business freedom, safety, health, education, environmental quality, economy, taxation, Internet access, leisure and culture, tolerance, and outdoor life.

### Built With

- [HTML 5](https://developer.mozilla.org/en-US/docs/Glossary/HTML)
- [CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)
- [Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)

## Getting Started

### Prerequisites

Running the application requires [Node](https://nodejs.org/en/) to be installed on your operating system.

You can then install the latest version of npm from your terminal with the command:

```sh
npm install npm@latest -g
```

### Installation

1. Install NPM packages:

   ```sh
   npm install
   ```

2. Build from source:

   ```sh
   npm run build
   ```

## Usage

The user can type a city into the search input. The city name must be the English name of that city. When the form is submitted, once the fetch request API Teleport retrieves the city data.
of the city. The quality of life data are then displayed in the interface.

## Links & Contacts

[@Gregorio Bruni](/) - gregoriobruni96@gmail.com
