<?php

    $dadosP = filter_input_array(INPUT_POST, FILTER_DEFAULT);

    echo json_encode($dadosP);