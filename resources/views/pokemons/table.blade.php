@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <h1>Pokemons</h1>
                <div>
                    <pokemon-table></pokemon-table>
                </div>
            </div>
        </div>
    </div>
@endsection
