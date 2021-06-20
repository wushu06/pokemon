<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Pokemon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

class ApiTest extends TestCase
{
    use DatabaseMigrations;

    /** @test * */
    public function api_can_show_all_pokemons()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->create(['number' => 1, 'name' => 'nour']);
        $response = $this->get('/api/pokemons');
        $response->assertJsonFragment(['name' => $pokemon->name]);

    }

    /** @test * */
    public function api_can_add_pokemon()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->make();
        $this->post('/api/pokemons', ['name' => 'MyPokemon', 'speed' => 99]);
        $pokemon->refresh();
        $this->assertDatabaseHas('pokemon', ['name' =>  'MyPokemon']);

    }

    /** @test * */
    public function api_can_update_pokemon()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->create( ['number'=>1,'name' => 'MyPokemon', 'speed' => 99]);
        $this->put('/api/pokemons/'.$pokemon->id, ['name' => 'MyPokemonUpdated', 'speed' => 99]);
        $pokemon->refresh();
        $this->assertDatabaseHas('pokemon', ['name' =>  'MyPokemonUpdated']);

    }

    /** @test * */
    public function api_can_delete_pokemon()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->create( ['number'=>1,'name' => 'MyPokemon', 'speed' => 99]);
        $pokemon2 = Pokemon::factory()->create( ['number'=>2,'name' => 'My2Pokemon', 'speed' => 1]);
        $id = $pokemon->id;
        $this->delete('/api/pokemons/'.$id, ['id' => $id]);
        $this->assertDatabaseMissing('pokemon', ['id' =>  $id]);
        $this->assertDatabaseHas('pokemon', ['id' =>  $pokemon2->id]);

    }
}
