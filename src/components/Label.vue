<template>
    <v-chip :close="close" small @click="onClick" @click:close="onClose">
        <slot>Unset</slot>
    </v-chip>    
</template>

<script>
export default {
    name: "MaskLabel",
    data: () => ({

    }),
    props: {
        close: {
            type: Boolean,
            default: false
        },
        label: {
            type: Object,
            default: () => ({
                color: "dimgrey",
                id: -1
            })
        }
    },
    methods: {
        onClick() {
            this.$emit("click", this.label);
        },
        onClose() {
            this.$emit("close", this.label)
        }
    }
}
</script>

<style scoped>

</style>