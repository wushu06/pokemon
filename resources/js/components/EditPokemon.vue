<template>
    <v-container class="pa-0">
        <form>
            <v-container>
                <v-layout row wrap>
                    <v-flex
                        xs12
                        md12>
                        <v-text-field
                            v-model="name"
                            :label="`Name: ${pokemon.name}`">
                        </v-text-field>
                        <v-slider
                            v-model="speed.val"
                            :label="speed.label"
                            :thumb-color="speed.color"
                            thumb-label="always"
                        ></v-slider>
                        <v-btn color="primary" @click="submit">Update</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </form>
    </v-container>
</template>
<script>
    export default {
        props: [
            'pokemon'
        ],
        data: () => ({
            name: '',
            speed: { label: 'speed', val: 1, color: 'red' },
        }),
        methods: {
            submit() {
                let data = {
                    name:  this.name,
                    speed: this.speed.val,
                };
                this.$emit('clicked', data);
            },

        },
        beforeMount() {
            this.name = this.pokemon.name
            this.speed.val = this.pokemon.speed
        }

    }
</script>
