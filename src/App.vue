<template>
    <div id="app">
        <custom-form />
    </div>
</template>

<script>
import CustomForm from "./components/CustomForm.vue";
export default {
    name: "App",
    components: {
        CustomForm,
    },
};
</script>

<style>
body {
    background: #eef0f1;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
