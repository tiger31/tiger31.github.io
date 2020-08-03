<template>
    <v-card class="pa-2">
        <v-card-title>
            <div class="filter-input">
                <v-text-field placeholder="Mask" v-model="filterMask" clearable></v-text-field>
            </div>
            <div id="label-filter">
                <v-chip v-for="(label, key) in filterLabels" :key="key" close @click:close="onFilterRemove(label)" :color="labelsColors[label]||'default'" small>{{label}}</v-chip>
            </div>
        </v-card-title>
        <MaskEntity v-for="(mask, key) in masks" :key="key" v-bind="mask" v-on:fire="fire" v-on:filter="onFilter" v-on:remove="onRemove"/>
        <div class="masks-input">
            <v-text-field class="ml-2" v-model="maskInput" clearable placeholder="Enter your mask to save it"></v-text-field>
            <v-btn class="ma-2" color="success" @click="saveMask">Save</v-btn>
        </div>
    </v-card>    
</template>

<script>
import MaskEntity from "./Mask";
import colors from "../colors";
export default {
    name: "MastsTab",
    components: {
        MaskEntity
    },
    data: () => ({
        maskInput: "",
        filterMask: "",
        labelsColors: colors, 
        predefinedMasks: [
            //UK
            { value: "+4420721XXXXX", labels: ["Geographical", "GB/UK"] },
            { value: "+4484444XXXXX", labels: ["National", "GB/UK"] },
            { value: "+44800XXXXXXX", labels: ["Free", "GB/UK"] },
            { value: "+44808XXXXXXX", labels: ["Free", "GB/UK"] },
            //Italy
            { value: "+39066XXXXX", labels: ["Geographical", "Italy"] },
            { value: "+39800XXXXXX", labels: ["Free", "Italy"] },
            //Germany
            { value: "+493023XXXXX", labels: ["Geographical", "Germany"] },
            { value: "+493060XXXXX", labels: ["Geographical", "Germany"] },
            { value: "+49177XXXXXXX", labels: ["National", "Germany"] },
            { value: "+49800XXXXXXX", labels: ["Free", "Germany"] },
            //Netherland
            { value: "+311044XXXXX", labels: ["Geographical", "Netherland"] },
            { value: "+316200XXXXX", labels: ["National", "Netherland"] },
            { value: "+318008XXXXXX", labels: ["Free", "Netherland"] },
        ],
        filterLabels: [],
        userMasks: [],
    }),
    computed: {
        masks() {
            return this.filter([].concat(this.predefinedMasks, this.userMasks), this.filterMask, this.filterLabels)
        }
    },
    methods: {
        fire(mask) {
            this.$emit("fire", mask);
        },
        onFilter(label) {
            if (!this.filterLabels.includes(label))
                this.filterLabels.push(label) 
        },
        onFilterRemove(label) {
            const index = this.filterLabels.indexOf(label);
            if (index > -1) {
                this.filterLabels.splice(index, 1);
            }
        },
        onRemove(mask) {
            const index = this.userMasks.map(m => m.value).indexOf(mask);
            if (index < 0) 
                return
            this.userMasks.splice(index, 1);
            localStorage.setItem("userMasks", JSON.stringify(this.userMasks));
        },
        filter(masks, value, labels) {
            const v = value || "";
            return masks.filter(m => m.value.toLowerCase().includes(v.toLowerCase()) && labels.every(l => m.labels.includes(l)));
        },
        saveMask() {
            const mask = this.maskInput.toUpperCase().replace(/[xх]/, 'x')
            if (mask.indexOf('X') > 0 && !this.userMasks.map(m => m.value).includes(mask)) {
                this.userMasks.push({ value: mask.toUpperCase(), labels: ["Personal"] })
                localStorage.setItem("userMasks", JSON.stringify(this.userMasks));
            }
        }
    },
    mounted() {
        if (!localStorage.userMasks)
            return
        try {
            this.userMasks = JSON.parse(localStorage.userMasks);
        } catch (e) {
            console.error("Unable to parse users masks", e)
        }
    },
    beforeDestroy() {
        localStorage.setItem("userMasks", JSON.stringify(this.userMasks));
    }
}
</script>

<style lang="scss" scoped>
    .filter-input {
        width: 100%;
    }
    .masks-input {
        display: flex;
        justify-content: center;
        align-items: center;
        :first-child {
            flex-grow: 1;
        }
    }
</style>