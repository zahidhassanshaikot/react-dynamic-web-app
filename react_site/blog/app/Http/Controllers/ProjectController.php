<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectModel;

class ProjectController extends Controller
{
    function onSelectAll(){
        $result=ProjectModel::all();
        return $result;
    }
    function onSelectThree(){
        $result=ProjectModel::limit(3)->get();
        return $result;
    }
    function onSelectDetails(Request $request){
        $id=$request->input('id');
        $result=ProjectModel::findOrFail($id);
        return $result;
    }
}
