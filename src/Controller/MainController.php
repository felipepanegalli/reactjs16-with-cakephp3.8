<?php

namespace App\Controller;

use App\Controller\AppController;

class MainController extends AppController
{
    public function index()
    {
        $this->viewBuilder()->layout(false);
    }
}
