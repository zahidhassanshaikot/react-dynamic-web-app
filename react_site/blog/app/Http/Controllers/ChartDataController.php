<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ChartDataModel;

class ChartDataController extends Controller
{
    function onAllSelect(){
        $result=ChartDataModel::select('technology','projects')->get();
        return $result;
    }
}
