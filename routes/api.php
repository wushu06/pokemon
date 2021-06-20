<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\PokemonController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [ApiAuthController::class, 'apiRegister']);
Route::post('/login', [ApiAuthController::class, 'apiLogin']);

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/pokemons', [PokemonController::class, 'index']);

    Route::get('/pokemons/{id}', [PokemonController::class, 'show']);
    Route::get('/pokemons/search/{name}', [PokemonController::class, 'search']);
    Route::get('/pokemons/sort/{filter}', [PokemonController::class, 'sort']);
    Route::get('/pokemons/filters/all', [PokemonController::class, 'filters']);
    Route::post('/pokemons/filters/', [PokemonController::class, 'filterBy']);
    Route::post('/pokemons', [PokemonController::class, 'store']);
    Route::put('/pokemons/{id}', [PokemonController::class, 'update']);
    Route::delete('/pokemons/{id}', [PokemonController::class, 'destroy']);
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
