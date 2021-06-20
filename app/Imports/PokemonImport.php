<?php

namespace App\Imports;

use App\Models\Pokemon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PokemonImport implements ToModel,WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        return new Pokemon([
            'number'  => $row['number'],
            'name'    => $row['pokemon'],
            'type1'   => $row['type_1'],
            'type2'   => $row['type_2'],
            'hp'      => $row['hp'],
            'attack'  => $row['attack'],
            'defence' => $row['defense'],
            'speed'   => $row['speed'],
            'special' => $row['special'],
            'gif'     => $row['gif'],
            'png'     => $row['png'],
            'description'  => $row['description']
        ]);
    }

    private function _isValid(array $row)
    {

    }
}
