<?php

namespace App\Models;

use App\Models\RecordsActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory,RecordsActivity;
    protected $table = 'pokemon';
    protected $fillable = ['number','name','type1','type2','hp','attack','defence','speed','special','gif','png','description'];
}
