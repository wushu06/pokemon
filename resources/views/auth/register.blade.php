@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <v-card class="mx-auto" min-width="544">
                <v-card-title>{{ __('Register') }}</v-card-title>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">

                            <div class="col-md-8 offset-md-2">
                                <v-text-field
                                    label="Name"
                                    type="text"
                                    name="name"
                                    value="{{ old('name') }}"
                                    class="@error('namel') is-invalid @enderror"
                                    required
                                    autocomplete="name"
                                ></v-text-field>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col-md-8 offset-md-2">
                                <v-text-field
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value="{{ old('email') }}"
                                    class="@error('email') is-invalid @enderror"
                                    required
                                ></v-text-field>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <v-text-field
                                    label="Password"
                                    type="password"
                                    name="password"
                                    class="@error('password') is-invalid @enderror"
                                    autocomplete="current-password"
                                    required
                                ></v-text-field>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <v-text-field
                                    label="Confirm Password"
                                    type="password"
                                    name="password_confirmation"
                                    autocomplete="new-password"
                                    required
                                ></v-text-field>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-10 offset-md-2">
                                <v-btn
                                    type="submit"
                                    depressed
                                    color="primary"
                                    class="btn-primary"
                                >
                                    {{ __('Register') }}
                                </v-btn>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
