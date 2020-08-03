<template>
    <div class="mask">
        <div class="mask-value subtitle-2 grey--text darken-2" @click="fire(value)">{{value}}</div>
        <div class="mask-labels">
            <v-chip v-for="(label, key) in labels" :key="key" small :color="labelsColors[label]||'default'" @click="filter(label)">
                {{label}}
            </v-chip>
        </div>
        <span class="mr-2 icon mdi mdi-delete" v-if="labels.includes('Personal')" @click="remove(value)"></span>
    </div>    
</template>

<script>
import colors from "../colors";
export default {
    name: "MaskEntity",
    data: () => ({
        labelsColors: colors
    }),
    props: {
        value: {
            type: String,
            required: true
        },
        labels: {
            type: Array,
            default: () => ([])
        }
    },   
    methods: {
        fire(mask) {
            this.$emit("fire", mask)
        },
        filter(label) {
            this.$emit("filter", label)
        },
        remove(mask) {
            this.$emit("remove", mask);
        }
    }
}
</script>

<style lang="scss" scoped>
    .mask {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0 !important;
        &:hover {
            background-color: rgb(71, 71, 71);
        }
        div {
            padding: 5px;
        }
        .mask-value {
            flex-grow: 1;
            cursor: pointer;
        }
        .mask-labels {
            align-self: flex-end;
            span {
                margin: 0 3px;
            }
        }
        .icon {
            width: 1.5rem;
            height: 1.5rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            &:hover {
                border-radius: 50%;
                cursor: pointer;
                background-color: dimgray;
            }
        }
    }
</style>