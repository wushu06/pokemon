<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @if($errors->any())
                <v-snackbar
                    :value="true"
                    bottom="bottom"
                    right="right"
                    timeout="6000">
                    {{$errors->first()}}
                </v-snackbar>
            @endif

            <form method="POST" action="{{route('import')}}" enctype="multipart/form-data">
                @csrf
                <div class="form-group row">
                    <v-file-input
                        counter
                        multiple
                        show-size
                        truncate-length="15"
                        name="file"
                    ></v-file-input>
                </div>
                <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-4">
                        <v-btn
                            type="submit"
                            depressed
                            color="primary"
                            class="btn-primary"
                        >
                            Catch Pokemons
                        </v-btn>
                    </div>
                </div>
            </form>
                @if (\Session::has('success'))
                        <v-snackbar
                            :value="true"
                            bottom="bottom"
                            right="right"
                            timeout="6000">
                            {!! \Session::get('success') !!}
                        </v-snackbar>
                @endif
        </div>

    </div>
</div>

