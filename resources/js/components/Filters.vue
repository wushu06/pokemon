<template>
    <v-container class="filter-wrapper" fluid>
        <div>
            <span v-if="selected.length">Selected Filter: </span>
            <span v-for="(sel, index) in selected"
                  :key="`sel-${index}`"
                  class="mr-3">
                <strong>{{ sel }}</strong>
            </span>
        </div>
        <h5 class="mt-3 mb-3">Types:</h5>
        <v-layout row class="" v-if="types.length">
            <v-flex xs2 v-for="(type, index) in types"
                    :key="`filter-${index}`">
                <v-checkbox
                    v-model="selected"
                    :label="type"
                    :value="type"
                ></v-checkbox>
            </v-flex>
        </v-layout>
        <div>
            <span v-if="selectedSpeed.length">Selected Filter: </span>
            <span v-for="(sel, index) in selectedSpeed"
                  :key="`sel-${index}`"
                  class="mr-3">
                <strong>{{ sel }}</strong>
            </span>
        </div>
        <h5 class="mt-3 mb-3">Speed:</h5>
        <v-layout row class="" v-if="speed.length">
            <v-flex xs2 v-for="(sp, index) in speed"
                    :key="`filter-${index}`">
                <v-checkbox
                    v-model="selectedSpeed"
                    :label="`${sp}`"
                    :value="sp"
                ></v-checkbox>
            </v-flex>
        </v-layout>
        <div>
            <span v-if="selectedHp.length">Selected Filter: </span>
            <span v-for="(sel, index) in selectedHp"
                  :key="`sel-${index}`"
                  class="mr-3">
                <strong>{{ sel }}</strong>
            </span>
        </div>
        <h5 class="mt-3 mb-3">HP:</h5>
        <v-layout row class="" v-if="hp.length">
            <v-flex xs2 v-for="(h, index) in hp"
                    :key="`filter-${index}`">
                <v-checkbox
                    v-model="selectedHp"
                    :label="`${h}`"
                    :value="h"
                ></v-checkbox>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                selected: [],
                selectedSpeed: [],
                selectedHp: [],
                filters: {},
                types: [],
                speed: [],
                hp: [],
                filterBy: {}
            }
        },
        watch: {
            selected: function (newValue, oldValue) {
                this.setFilterBy('type1', newValue)
            },
            selectedSpeed: function (newValue, oldValue) {
                this.setFilterBy('speed', newValue)
            },
            selectedHp: function (newValue, oldValue) {
                this.setFilterBy('hp', newValue)
            }
        },
        methods: {
            setFilterBy(key, value) {
                if(this.selected.length <=0 && this.speed.length <=0 && this.hp.length <=0 ){
                    this.filterBy = {};
                }else{
                    this.filterBy[key] = value;
                }
                this.filter()

            },
            filter() {
                this.$emit('sendFilteredData', this.filterBy);
            }
        },
        mounted() {
            let self = this;
            axios.get('/api/pokemons/filters/all')
                .then((res) => {
                    let data = res.data;
                    let types = [];
                    let speed = [];
                    let hp = [];
                    if (data) {
                        data.map((d) => {
                            types.push(d.type1);
                            types.push(d.type2);
                            speed.push(d.speed);
                            hp.push(d.hp);
                        })
                    }
                    self.types = _.uniqBy(types);
                    self.speed = _.uniqBy(speed);
                    self.hp = _.uniqBy(hp);
                })
                .catch(error => {
                    console.log(error);
                })

        }
    }
</script>
