@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <v-card class="mx-auto" min-width="544">
                <v-card-title>{{ __('Login') }}</v-card-title>

                <div>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

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

                        <div class="form-group row mb-0">
                            <div class="col-md-10 offset-md-2">
                                    <v-checkbox
                                        label="Remember Me"
                                        name="remember"
                                        id="remember"
                                    ></v-checkbox>
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
                                    {{ __('Login') }}
                                </v-btn>
                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </v-card>
        </div>
    </div>
</div>
@endsection
