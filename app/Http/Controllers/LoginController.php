<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        return response()->json([
            'success' => Auth::attempt($credentials)
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out']);
    }
}
