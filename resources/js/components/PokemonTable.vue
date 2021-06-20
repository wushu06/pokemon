<template>
    <v-layout row class="">
        <v-flex xs12>
            <v-data-table
                v-if="load"
                item-key="name"
                class="elevation-1"
                loading
                loading-text="Loading... Please wait"
            ></v-data-table>
            <v-layout row class="mr-3 mt-3 mb-3 ml-3">
                <v-flex xs6>
                    <div>
                        <v-btn fab class="mb-3 mt-3 mr-2" depressed small @click="addPokemon">
                            <v-icon color="grey">fas fa-plus</v-icon>
                        </v-btn>
                        <span>Add Pokemon</span>
                    </div>
                </v-flex>
                <v-flex xs6>
                    <div>
                        <v-btn fab class="mb-3 mt-3 mr-2" depressed small v-on:click="showFilter = !showFilter">
                            <i class="fas fa-filter"></i>
                        </v-btn>
                        <span>Filter</span>
                    </div>
                </v-flex>
            </v-layout>
            <Filters v-if="showFilter" @sendFilteredData="filteredData"/>
            <v-card ref="form" class="mb-5 mt-3">
                <v-card-text>
                    <v-text-field
                        ref="name"
                        @input="search"
                        v-model="name"
                        label="Search Pokemon by name"
                        required
                    ></v-text-field>
                </v-card-text>
            </v-card>
            <div class="total" v-if="total">
                <span><strong>Total:</strong> {{total}}</span>
            </div>
            <div class="total" v-if="total === 0">
                <h5>No result!</h5>
            </div>
            <v-simple-table v-if="total">
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left" @click="sort('id')" style="min-width: 130px">
                            Action
                        </th>
                        <th class="text-left" @click="sort('number')">
                            Number
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left" @click="sort('name')">
                            Name
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left">
                            Gif
                        </th>
                        <th class="text-left">
                            Png
                        </th>
                        <th class="text-left" @click="sort('type1')">
                            Type 1
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left" @click="sort('type2')">
                            Type 2
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left" @click="sort('hp')">
                            HP
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left" @click="sort('attack')">
                            Attack
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left" @click="sort('defense')">
                            Defense
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left" @click="sort('speed')">
                            Speed
                            <i :class="arrow"></i>
                        </th>
                        <th class="text-left">
                            Description
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in pokemons"
                        :key="item.id"
                    >
                        <td>
                            <v-btn fab class="transparent-color mr-3" depressed  small @click="edit(item)">
                                <v-icon color="grey">fas fa-edit</v-icon>
                            </v-btn>
                            <v-btn fab class="transparent-color" depressed  small @click="deletePokemon(item.id)">
                                <v-icon color="pink">fas fa-trash</v-icon>
                            </v-btn>
                        </td>
                        <td>{{ item.number }}</td>
                        <td>{{ item.name }}</td>
                        <td><img :src=item.gif width="50" alt=""></td>
                        <td><img :src=item.png width="50" alt=""></td>
                        <td>{{ item.type1 }}</td>
                        <td>{{ item.type2 }}</td>
                        <td>{{ item.hp }}</td>
                        <td>{{ item.attack }}</td>
                        <td>{{ item.defense }}</td>
                        <td>{{ item.speed }}</td>
                        <td>{{ item.description }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>

            <div class="text-xs-center pagination-wrapper">
                <v-pagination
                    v-if="pageNumber > increment"
                    v-model="page"
                    :length="Math.ceil(pageNumber / increment)"
                    :circle="circle"
                    @input="next"
                    :total-visible="5"
                    color="black"
                    class="my-4"
                ></v-pagination>
                <div class="total" v-if="total">
                    <span><strong>Total:</strong> {{total}}</span>
                </div>
            </div>
            <v-dialog
                fullscreen hide-overlay transition="dialog-bottom-transition"
                v-model="dialogEdit"
                max-width="900">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogEdit = false">
                            <v-icon color="red">fas fa-times</v-icon>
                        </v-btn>
                        <v-toolbar-title>Edit:</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-lis
                        <EditPokemon :pokemon="pokemon" @clicked="onPokemonUpdated"/>
                    </v-list>

                </v-card>
            </v-dialog>
            <v-dialog
                v-model="dialog"
                max-width="290">
                <v-card>
                    <v-card-title class="headline">Deleting:</v-card-title>
                    <v-card-text>
                        Are you sure you want to delete this Pokemon?
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text="text"
                            @click="dialog = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="pink"
                            text="text"
                            @click="deleteConfirmed"
                        >
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog
                fullscreen hide-overlay transition="dialog-bottom-transition"
                v-model="dialogAddPokemon"
                max-width="900"
            >
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialogAddPokemon = false">
                            <v-icon color="red">fas fa-times</v-icon>
                        </v-btn>
                        <v-toolbar-title>New Pokemon</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>
                        <AddPokemon @clicked="onPokemonAdded"/>
                    </v-list>
                </v-card>
            </v-dialog>
            <v-snackbar
                v-model="snackbar"
                bottom="bottom"
                right="right"
                :timeout="timeout">
                {{message}}
                <v-btn
                    color="pink"
                    text
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </v-flex>
    </v-layout>
</template>

<script>


    import axios from "axios";
    import EditPokemon from "./EditPokemon";
    import AddPokemon from "./AddPokemon";
    import Filters from "./Filters";

    export default {
        props: [],
        data: () => ({
            name: null,
            showFilter: false,
            filters: {},
            id: null,
            pokemon: null,
            pokemons: {},
            timeout: 6000,
            snackbar: false,
            message: '',
            total: 0,
            errors: '',
            dialog: false,
            dialogEdit: false,
            dialogAddPokemon: false,
            page: 1,
            currentUser: 0,
            pageNumber: 0,
            circle: false,
            currentPage: 0,
            increment: 10,
            multiple: false,
            option: null,
            dir: 'asc',
            load: true,
            arrow: "fas fa-arrow-down"
        }),
        components: {
            EditPokemon, AddPokemon, Filters
        },
        watch: {},
        computed: {},

        methods: {
            onShow() {

            },
            filteredData(filters = this.filters){
                this.filters = filters;
                axios.post( `/api/pokemons/filters?page=${this.page}`, filters)
                    .then((res) => {
                        this.setData(res)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            next(page) {
                this.page = page;
                if (this.name && this.name !== '') {
                    this.search();
                } else {
                    if(_.isEmpty(this.filters, true)){
                        this.getData();
                    }else{
                        this.filteredData();
                    }

                }
            },
            search() {
                if (this.name === '') {
                    this.getData();
                    return;
                }
                this.getData(`/api/pokemons/search/${this.name}`);
            },
            sort(option) {
                if (option === '') {
                    return;
                }
                if (option === this.option) {
                    this.dir = this.dir === 'desc' ? 'asc' : 'desc'
                } else {
                    this.option = option;
                    this.dir = 'desc';
                }
                if(this.dir === 'desc'){
                    this.arrow = "fas fa-arrow-up"
                }else{
                    this.arrow = "fas fa-arrow-down"
                }
                console.log(this.option);
                this.getData(`/api/pokemons/sort/filter?sort=${this.option}`, '&');
            },
            edit(pokemon) {
                this.dialogEdit = true;
                this.pokemon = pokemon;
            },
            onPokemonUpdated(newData) {

                this.pokemon.name = newData.name;
                this.pokemon.speed = newData.speed;

                let self = this;
                axios.put(
                    `/api/pokemons/${this.pokemon.id}`,
                    self.pokemon
                )
                    .then(res => {
                        self.setData(res);
                        self.dialogEdit = false;
                        self.snackbar = true;
                        self.message = `${self.pokemon.name}  has been updated!`;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            deleteConfirmed() {
                this.dialog = false;
                if (!this.id) {
                    return;
                }
                let self = this;
                axios.delete(
                    `/api/pokemons/${this.id}`,
                )
                    .then(res => {
                        self.setData(res);
                        self.snackbar = true;
                        self.message = 'Pokemon has been deleted!';
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            addPokemon(){
                this.dialogAddPokemon = true
            },
            onPokemonAdded(data){
                let self = this;
                axios.post(
                    `/api/pokemons/`,
                    data
                )
                    .then(res => {
                        self.setData(res);
                        self.dialogAddPokemon = false;
                        self.snackbar = true;
                        self.message = `${data.name}  has been added!`;
                    })
                    .catch(error => {
                        console.log(error);
                    })

            },
            deletePokemon(id) {
                this.dialog = true;
                this.id = id
            },
            setData(res) {
                this.pageNumber = res.data.total;
                this.total = res.data.total;
                this.pokemons = res.data.data;
                this.load = false;
            },
            getData(url = '/api/pokemons', concat = '?') {
                let self = this;
                let page = `${concat}page=${this.page}&dir=${this.dir}`;
                axios.get(`${url}${page}`)
                    .then((res) => {
                        self.setData(res)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        beforeMount() {
        },
        mounted() {
            this.getData();
        }
    }
</script>

