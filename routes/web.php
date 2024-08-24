<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('dashboard');

// Route::get('/get-product-list', function () {
//     return Inertia::render('Products/ProductList');
// })->middleware(['auth', 'verified', 'role:admin'])->name('products.index');

Route::get('products/get-product-list', [ProductController::class, 'getProductList']);
Route::resource('products', ProductController::class)->middleware(['auth', 'verified', 'role:admin']);

Route::get('/cart/login-to-pay', function () {
    return Inertia::render('LoginToPay');
})->name('login-to-pay');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
