<?


$time=date("Y-m-d H:i:s");
$data_points['label'] = $time;
$data_points['y'] = "1500";

echo json_encode([$data_points]);

?>