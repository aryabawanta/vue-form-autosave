import { vuexfireMutations, firestoreAction } from "vuexfire";
import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        inputs: [],
    },
    mutations: vuexfireMutations,
    actions: {
        bindTodos: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef("inputs", db.collection("inputs"));
        }),
    },
});
