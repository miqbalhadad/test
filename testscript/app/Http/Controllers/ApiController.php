<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Respone;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class ApiController extends Controller
{
    // fungsi register
    public function register(Request $request)
    {
        $user_M = new User();
        $user_M->username = $request->user['username'];
        $user_M->email = $request->user['email'];
        $user_M->password = Hash::make($request->user['password']);
        $user_M->phone = $request->user['phone'];
        $user_M->country = $request->user['country'];
        $user_M->city = $request->user['city'];
        $user_M->postcode = $request->user['postcode'];
        $user_M->name = $request->user['name'];
        $user_M->address = $request->user['address'];
        $user_M->save();

        $credential = [
            'email' => $request->user['email'],
            'password' => $request->user['password']
        ];
        $response['token'] = auth()->attempt($credential);
        $response['email'] = $request->user['email'];
        $response['username'] = $request->user['username'];

        return response()->json($response, 201);
    }


    public function getAllUser(Request $request)
    {
        $user_M = new User();
        $data = $user_M->get();
        return response()->json($data, 200);
    }

    public function authenticate(Request $request)
    {
        $credential = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];
        $token = auth()->attempt($credential);
        
        $response['email'] = $request->email;
        $response['token'] = $token;
        $response['username'] = $request->username;
        return response()->json($response, 200);
    }


}
