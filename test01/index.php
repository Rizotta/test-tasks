<?
require 'tree.php';

function has_children($rows, $id) {
	foreach ($rows as $row) {
		if ($row['PARENT_ID'] == $id)
			return true;
	}
	return false;
}

function make_menu($rows, $parent=0) {	
	$result = "<ul>";	

	foreach ($rows as $row)	{

		if ($row['PARENT_ID'] == $parent){
			$result.= "<li>{$row['NAME']}";

			if (has_children($rows,$row['ID'])) {
				$result.= make_menu($rows,$row['ID']);
			}

			$result.= "</li>";
		}
	}
	$result.= "</ul>";
	return $result;
}

echo make_menu($data);

?>