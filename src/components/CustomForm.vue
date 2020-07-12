<template>
    <div class="w-full flex justify-center flex-col">
        <div class="flex container mx-auto flex-col">
            <div class="status w-full justify-center">
                <span v-if="conditions.saving">
                    Saving...
                </span>
                <span v-else>
                    All changes saved
                </span>
            </div>
            <div class="shadow w-full bg-grey-light mt-2">
                <div
                    class="progress text-xs leading-none py-1 text-center text-white"
                    :style="`width: ${inputs.percentage}%`"
                ></div>
            </div>
            <custom-input
                class="my-5"
                label="Email"
                placeholder="example : arya.bawanta@gmail.com"
                v-model="inputs.email"
            ></custom-input>
            <custom-input
                class="my-5"
                label="First name"
                placeholder="example : Arya"
                v-model="inputs.name_first"
            ></custom-input>
            <custom-input
                class="my-5"
                label="Last name"
                placeholder="example : Bawanta"
                v-model="inputs.name_last"
            ></custom-input>
            <custom-input
                class="my-5"
                label="Job"
                placeholder="example : Developer"
                v-model="inputs.job"
            ></custom-input>
            <custom-input
                class="my-5"
                label="Address"
                placeholder="example : Bali, Indonesia"
                v-model="inputs.address"
            ></custom-input>
        </div>
    </div>
</template>

<script>
import CustomInput from "./CustomInput";
import { db } from "../db";
export default {
    components: {
        CustomInput,
    },
    data() {
        return {
            conditions: {
                saving: false,
            },
            id: "",
            inputs: {
                address: "",
                email: "",
                job: "",
                name_first: "",
                name_last: "",
                percentage: 0,
            },
        };
    },
    watch: {
        "inputs.address": function() {
            this.saveData();
        },
        "inputs.email": function() {
            this.saveData();
        },
        "inputs.job": function() {
            this.saveData();
        },
        "inputs.name_first": function() {
            this.saveData();
        },
        "inputs.name_last": function() {
            this.saveData();
        },
    },
    methods: {
        calculateFormCompletion() {
            let total = 0;
            let completed = 0;
            for (const property in this.inputs) {
                if (property == "percentage") continue;
                total++;
                const input = this.inputs[property];
                if (input != "") {
                    completed++;
                }
            }
            if (total == 0) return 0;
            this.inputs.percentage = (completed / total) * 100;
        },
        initializeData() {
            return db
                .collection("submissions")
                .add(this.inputs)
                .then((response) => {
                    this.id = response.id;
                });
        },
        saveData() {
            this.calculateFormCompletion();
            this.conditions.saving = true;
            return db
                .collection("submissions")
                .doc(this.id)
                .update(this.inputs)
                .then(() => {
                    this.conditions.saving = false;
                    console.log("form updated!");
                });
        },
    },
    created() {
        this.initializeData();
    },
};
</script>

<style scoped>
.container {
    width: 1280px;
    background: white;
    border-radius: 6px;
    padding: 12px;
}
.status {
    padding: 10px;
    color: rgba(0, 0, 0, 0.5);
}
.progress {
    background: #4080ff;
}
</style>
