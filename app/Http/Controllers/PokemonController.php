<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use App\Models\Pokemon;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Class PokemonController
 * @package App\Http\Controllers
 */
class PokemonController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return LengthAwarePaginator
     */
    public function index()
    {
        return $this->getData();
    }

    /**
     * @return LengthAwarePaginator
     */
    private function getData()
    {
        $request = new Request;
        return DB::table('pokemon')->orderBy('id', $request->dir ?? 'ASC')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function store(Request $request)
    {
        $last = Pokemon::all()->last();
        $request->request->set('number', $last && $last['number'] ? (int) $last['number'] + 1 : 1);
        $request->validate([
            'name' => 'required'
        ]);

        $Pokemon = Pokemon::create($request->all());
        return $Pokemon ? $this->getData() : null;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return Pokemon::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return LengthAwarePaginator
     */
    public function update(Request $request, $id)
    {
        $Pokemon = Pokemon::find($id);
        $Pokemon->update($request->all());
        return $Pokemon ? $this->getData() : null;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return LengthAwarePaginator|boolean
     */
    public function destroy($id)
    {
        return Pokemon::destroy($id) ? $this->getData() : null;
    }

    /**
     * Search for a name
     *
     * @param str $name
     * @return LengthAwarePaginator
     */
    public function search($name)
    {
        return DB::table('pokemon')
            ->where('name', 'like', '%' . $name . '%')
            ->orderBy('name', $request->dir ?? 'ASC')
            ->paginate(10);
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function sort(Request $request)
    {
        if ($request->sort && Schema::hasColumn('pokemon', $request->sort)) {
            return DB::table('pokemon')->orderBy($request->sort, $request->dir ?? 'ASC')->paginate(10);
        }
        return DB::table('pokemon')->orderBy('id', $request->dir ?? 'ASC')->paginate(10);
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function filters()
    {
        return Pokemon::getFilters();
    }

    public function filterBy(Request $request)
    {
        if(!$request->hasAny(['type1', 'speed', 'hp'])){
            return $this->getData();
        }
        return Pokemon::filter($request);


    }
}
