<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Maatwebsite\Excel\Facades\Excel;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function table()
    {
        return view('pokemons.table');
    }
    public function import(Request $request)
    {
        if(!$request->file){
            return Redirect::back()->withErrors(['File not found or invalid!']);
        }
        Excel::import(new \App\Imports\PokemonImport, $request->file);
        return Redirect::back()->with('success', 'File imported successfully!');
    }
}
