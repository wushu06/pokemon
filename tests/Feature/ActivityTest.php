<?php

namespace Tests\Feature;

use App\Models\Activity;
use App\Models\User;
use App\Models\Pokemon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

class ActivityTest extends TestCase
{
    use DatabaseMigrations;

    /** @test * */
    public function it_records_activity_when_pokemon_added()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->create(['number' => 1, 'name' => 'nour']);
        $this->assertDatabaseHas('activities', [
            'user_id' => auth()->id(),
            'type' => 'created_pokemon',
            'subject_id' => $pokemon->id,
            'subject_type' => 'App\\Models\\Pokemon'
        ]);
    }

    /** @test * */
    public function it_records_activity_when_pokemon_updated()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->create( ['number'=>1,'name' => 'MyPokemon', 'speed' => 99]);
        $this->put('/api/pokemons/'.$pokemon->id, ['name' => 'MyPokemonUpdated', 'speed' => 99]);
        $this->assertDatabaseHas('activities', [
            'user_id' => auth()->id(),
            'type' => 'updated_pokemon',
            'subject_id' => $pokemon->id,
            'subject_type' => 'App\\Models\\Pokemon'
        ]);
    }

    /** @test * */
    public function it_records_activity_when_pokemon_deleted()
    {
        $this->signIn();
        $pokemon = Pokemon::factory()->create( ['number'=>1,'name' => 'MyPokemon', 'speed' => 99]);
        $id = $pokemon->id;
        $this->delete('/api/pokemons/'.$id, ['id' => $id]);
        $this->assertDatabaseHas('activities', [
            'user_id' => auth()->id(),
            'type' => 'deleted_pokemon',
            'subject_id' => $id,
            'subject_type' => 'App\\Models\\Pokemon'
        ]);
    }
}
