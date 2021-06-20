<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pokemon', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('number')->index();
            $table->string('name');
            $table->string('type1')->nullable();
            $table->string('type2')->nullable();
            $table->unsignedInteger('hp')->nullable();
            $table->unsignedInteger('attack')->nullable();
            $table->unsignedInteger('defence')->nullable();
            $table->unsignedInteger('speed')->nullable();
            $table->unsignedInteger('special')->nullable();
            $table->string('gif')->nullable();
            $table->string('png')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pokemon');
    }
}
