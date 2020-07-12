<template>
    <div class="w-full sm:w-1/2 mx-auto flex flex-col">
        <div v-if="label != ''" class="w-full justify-start flex mb-1">
            <span class="input-label">
                {{ label }}
            </span>
        </div>
        <div>
            <input
                v-model.lazy="input"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                :placeholder="placeholder"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            default: "",
            type: String,
        },
        placeholder: {
            default: "",
            type: String,
        },
        value: {
            default: "",
            type: String,
        },
    },
    data() {
        return {
            input: this.value,
        };
    },
    watch: {
        input: function(value) {
            this.$emit("input", value);
        },
    },
};
</script>

<style scoped>
.input-label {
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 1.13px;
}
</style>
