# **Rotating Pairs - Front**

<p align="center"> 🚀 Project created to draw pairs without repetitions, for those who work with pair programming and rotating pairs. </p>

You can see the app in production by versel [here](https://rotating-pairs.vercel.app)

🏁 Table of Contents

===================

<!--ts-->

👉 [Dependencies and Environment](#dependenciesandenvironment)

👉 [Installing](#installing)

👉 [Learn More](#learnmore)

👉 [License](#license)

👉 [Author](#author)

<!--te-->

===================

<div id="dependenciesandenvironment"></div>

## **💻 Dependencies and Environment**

- Node (Utilizado v18.16.0)
- npm (Utilizado v9.7.2)

<div id="installing"></div>

## 🚀 **Installing**

**1-** You will need installing the dependencies of the project:

```bash
# installing the dependencies
$ npm install
```

After that, in this project you will need create a _.env_ file in root folder with the following content:

```
NEXT_PUBLIC_URL_BACK=http://localhost:8080
```

**2-** After that, you have two choices to exec the application:

**2.1-** Using the application's own back-end, to do this, you will need to clone the [back-end repository](https://github.com/glener10/rotating-pairs-back) and install and run the server (follow the documentation), the process should be quick and should not take more than 5 minutes. You will need to uncomment the ButtonsCombinations component (molecule) code in src/components/molecules/ButtonsCombinations/index.tsx on line 20

**2.2-** Reading data from a [static json](./src/components/molecules/ButtonsCombinations/combinations.json) present in the project. To do this, simply run the application with the command:

**3-** So just run Front with the command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**NOTE: Both options have limited test values ​​(only combinations with 2 or 10 inputs can be generated)**. The other combinations are private only for production application

<div id="learnmore"></div>

## **📖 Learn More**

To learn more about technologies used in the application:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Radix UI](https://www.radix-ui.com/) - An open source component library optimized for fast development, easy maintenance, and accessibility.

<div id="license"></div>

## **🔒 License**

Project has [MIT license](LICENSE).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<div id="author"></div>

#### **👷 Author**

Made by Glener Pizzolato! 🙋

[![Linkedin Badge](https://img.shields.io/badge/-Glener-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/glener-pizzolato/)](https://www.linkedin.com/in/glener-pizzolato-6319821b0/)
[![Gmail Badge](https://img.shields.io/badge/-glenerpizzolato@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:glenerpizzolato@gmail.com)](mailto:glenerpizzolato@gmail.com)
