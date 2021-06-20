<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Activity extends Model
{
    use HasFactory;
    protected $guarded;
    /**
     * Fetch the associated subject for the activity.
     *
     * @return MorphTo
     */
    public function subject()
    {
        return $this->morphTo();
    }
}
