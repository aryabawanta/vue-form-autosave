# form-autosave

## Case Study & Assignment
### 1. Create a Google Firestore account.

### 2. Build a form with 5 fields with autosave ability and show the percentage of form completion to the user. Assume each field accounts for 20% of the form.

Specifics:

- Use TailwindCSS (tailwindcss.com) for design and UI
- Use Cloud Firestore as database
- Use Vuexfire (https://vuefire.vuejs.org/vuexfire/) to save data in the database without any cloud function.

## Solutions
1. Create a Goolge Firestore account from Firebase ( simply just login with google ), then create a firestore database
2. Building auto save form with 5 inputs with the spesifics ( using tailwind, cloud firestore and vuexfire ) => it described in the codes

## Problem
I cannot deploy a Cloud Function because I have to upgrade my package, so I calculated the percentage in the front end and save the  percentage directly in the firestore instead of using cloud function

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
