<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Pokemon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

class PokemonTest extends TestCase
{
    use DatabaseMigrations;

    /** @test **/
    public function a_guest_cant_see_route()
    {
        $response = $this->get('/pokemons');
        $response->assertStatus(302)
            ->assertRedirect('/login');
    }

    /** @test **/
    public function a_logged_in_user_can_see_route()
    {
        $response =  $this->signIn()->get('/pokemons');
        $response->assertStatus(200);
    }



    /** @test **/
    public function a_logged_in_user_cant_upload_invalide_file()
    {
        $file = $this->getUploadableFile();
        $response =  $this->signIn()
            ->call('POST', '/import', ['_token' => csrf_token()], [], ['wrong_name' => $file], []);
        $response->assertSessionHasErrors(0,'File not found or invalid!');
    }

    /** @test **/
    public function a_logged_in_user_can_upload_file()
    {
        $file = $this->getUploadableFile();
        $response =  $this->signIn()
            ->call('POST', '/import', [  '_token' => csrf_token()], [], ['file' => $file], []);
        $response->assertSessionHasNoErrors();
    }

    /**
     * Get uploadable file.
     *
     * @return UploadedFile
     */
    protected function getUploadableFile()
    {
        $file = base_path("tests/fixtures/pokemons.csv");
        $dummy = file_get_contents($file);
        file_put_contents(base_path("tests/" . basename($file)), $dummy);
        $path = base_path("tests/" . basename($file));
        $original_name = 'pokemons.csv';
        $mime_type = 'text/csv';
        $error = null;
        $test = true;
        return new UploadedFile($path, $original_name, $mime_type, $error, $test);
    }
}
