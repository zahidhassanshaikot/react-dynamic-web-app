<?php

namespace App\Http\Controllers;

use App\HomeEtcModel;
use Illuminate\Http\Request;

class HomeEtcController extends Controller
{
    function selectVideoInfo(){
        $result=HomeEtcModel::select('video_description','video_url')->get();
        return $result;
    }
    function onAllSelect()
    {
        $result = HomeEtcModel::select('total_project', 'total_client')->get();
        return $result;
    }
    function selectTechDesc()
    {
        $result = HomeEtcModel::select('tech_description')->get();
        return $result;
    }
    function homeTitle()
    {
        $result = HomeEtcModel::select('home_title','home_subtitle')->get();
        return $result;
    }
}
