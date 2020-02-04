<?php

$router->get('/ChartData','ChartDataController@onAllSelect');
$router->get('/ClientReview','ClientReviewController@onAllSelect');
$router->post('/contactSend','ContactController@onContactSend');

$router->get('/courseAll','CourseController@onSelectAll');
$router->get('/courseHome','CourseController@onSelectFour');
$router->post('/courseDetails','CourseController@onSelectDetails');

$router->get('/projectAll','ProjectController@onSelectAll');
$router->get('/projectHome','ProjectController@onSelectThree');
$router->post('/projectDetails','ProjectController@onSelectDetails');

$router->get('/footer','FooterController@onSelect');
$router->get('/information','InformationController@onSelect');
$router->get('/services','ServiceController@onSelect');
