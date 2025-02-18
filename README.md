# Playwright & Cucumber: Search Flight - Vueling

Este proyecto automatiza la búsqueda de vuelos en la web de **Vueling** utilizando **Playwright**, **TypeScript** y **Cucumber**. Implementa el **patrón Page Object**, manejo de **cookies** y generación de **reportes**, garantizando una separación clara entre la lógica (`src/`) y las pruebas (`tests/`).

## 🛠 Requisitos

- [Node.js](https://webdriver.io/docs/gettingstarted) (Versión recomendada: **14 o superior**)
- [Git](https://git-scm.com/)

## 📦 Instalación

```sh
# Clonar el repositorio
git clone https://github.com/tu-usuario/vueling-search-playwright.git
cd vueling-search-playwright

# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npx playwright install
```

## 🚀 Ejecutar las pruebas

```bash
# Ejecutar las pruebas (incluye generación de reportes)
npm run test

# Generar y visualizar el reporte Allure
npm run report
```

## 📚 Referencias

- [Playwright](https://playwright.dev/) 🔗

- [Cucumber.js](https://github.com/cucumber/cucumber-js) 🔗