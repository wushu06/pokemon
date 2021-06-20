@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <v-card
            class="mx-auto"
            min-width="544"
        >
            <div>
                <v-card-title>{{ __('Dashboard') }}</v-card-title>
                <div class="card-form">
                    @include('form')
                </div>
            </div>
        </v-card>
    </div>
</div>
@endsection
