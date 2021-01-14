<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function todos()
    {
        return Todo::all();
    }

    public function addTodo(Request $request) {
        $todo = new Todo;
        $todo->title = $request->todo;
        $todo->save();

        $todos = Todo::all();
        return $todos;
    }

    public function removeTodo(string $id) {
        Todo::where('id', (int) $id)->delete();
        $todos = Todo::all();
        return $todos;
    }
}
