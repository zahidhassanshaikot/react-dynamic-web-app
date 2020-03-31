<?php
$router->group(['middleware' => 'auth'], function () use ($router) {
$router->get('/ChartData','ChartDataController@onAllSelect');
$router->get('/ClientReview','ClientReviewController@onAllSelect');
$router->post('/contactSend','ContactController@onContactSend');

$router->get('/courseAll','CourseController@onSelectAll');
$router->get('/courseHome','CourseController@onSelectFour');
$router->post('/courseDetails','CourseController@onSelectDetails');

$router->get('/projectAll','ProjectController@onSelectAll');
$router->get('/projectHome','ProjectController@onSelectThree');
$router->get('/projectDetails/{projectId}','ProjectController@onSelectDetails');

$router->get('/footer','FooterController@onSelect');
$router->get('/information','InformationController@onSelect');
$router->get('/services','ServiceController@onSelect');

$router->get('/videoHome','HomeEtcController@selectVideoInfo');
$router->get('/TotalProjectClient','HomeEtcController@onAllSelect');
$router->get('/techDesc','HomeEtcController@selectTechDesc');
$router->get('/homeTopTitle','HomeEtcController@homeTitle');
    });
