<?php
	function get($channel) {
		$value = $_REQUEST["$channel"];
		if ($value === "") { $value = NULL; }
		return $value;
	}
?>
