<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Events\NewTodoEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function todos()
    {
        return Todo::with('user')->get();
    }

    public function addTodo(Request $request) {
        $id = Auth::id();
        $todo = new Todo;
        $todo->title = $request->todo;
        $todo->user_id = $id == null ? null : intval($id);
        $todo->save();

        $todos = $this->todos()->all();
        event(new NewTodoEvent($todos));
        return $todos;
    }

    public function removeTodo(string $id) {
        Todo::where('id', (int) $id)
            ->where(function ($query) {
                $query->orWhere('user_id', Auth::id())
                      ->orWhereNull('user_id');
            })->delete();

        $todos = $this->todos()->all();
        event(new NewTodoEvent($todos));
        return $todos;
    }
}
