<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CourseTableModel;

class CourseController extends Controller
{
    function onSelectAll(){
        $result=CourseTableModel::all();
        return $result;
    }
    function onSelectFour(){
        $result=CourseTableModel::limit(4)->get();
        return $result;
    }
    function onSelectDetails($courseId){
        $id=$courseId;
        $result=CourseTableModel::findOrFail($id);
        return $result;
    }
}
