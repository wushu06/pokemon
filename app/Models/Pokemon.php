<?php

namespace App\Models;

use App\Models\RecordsActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Pokemon extends Model
{
    use HasFactory, RecordsActivity;
    /**
     * @var \Illuminate\Database\Query\Builder
     */
    protected $table = 'pokemon';
    protected $fillable = ['number', 'name', 'type1', 'type2', 'hp', 'attack', 'defence', 'speed', 'special', 'gif', 'png', 'description'];
    private static $collection;
    /**
     * @return Collection
     */
    public static function getFilters()
    {
        return DB::table('pokemon')
            ->select('type1', 'type2', 'speed', 'hp')
            ->distinct()
            ->whereNotNull(['type1', 'type2', 'speed', 'hp'])
            ->get();
    }


    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function filter(Request $request)
    {
        self::$collection = DB::table('pokemon');
        self::setFilerClause($request, 'type1')
            ->setFilerClause($request, 'speed')
            ->setFilerClause($request, 'hp');
        return self::$collection->paginate(10);
    }

    /**
     * @param $request
     * @param $key
     * @return Pokemon
     */
    private static function setFilerClause($request, $key)
    {
        if ($request->$key) {
            self::$collection->whereIn($key, $request->$key);
        }
        return new static;
    }


}
