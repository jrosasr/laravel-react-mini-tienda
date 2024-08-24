<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $roles = [
            ['name' => 'admin'],
            ['name' => 'client'],
        ];

        foreach ($roles as $rol) {
            Role::updateOrCreate(
                ['name' => $rol['name']],
                ['name' => $rol['name']]
            );
        }

        $userAdmin = User::updateOrCreate(
            [
                'email' => 'admin@admin.com'
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => Hash::make('12341234'),
            ]
        );

        $userAdmin->syncRoles(['admin']);

        $userClient = User::updateOrCreate(
            [
                'email' => 'client@client.com'
            ],
            [
                'name' => 'Client',
                'email' => 'client@client.com',
                'password' => Hash::make('12341234'),
            ]
        );

        $userClient->syncRoles(['client']);

        $products = [
            [
                'title' => 'Product 1',
                'description' => 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member.',
                'price' => 22.3,
                'image' => 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            ],
            [
                'title' => 'Product 2',
                'description' => 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentines Day',
                'price' => 695,
                'image' => 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
            ],
            [
                'title' => 'Product 3',
                'description' => 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person and, therefore, by content.',
                'price' => 49.99,
                'image' => 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
            ],
            [
                'title' => 'Product 4',
                'description' => 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                'price' => 19.99,
                'image' => 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
            ],
            [
                'title' => 'Product 5',
                'description' => 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member.',
                'price' => 22.3,
                'image' => 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            ],
            [
                'title' => 'Product 6',
                'description' => 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentines Day',
                'price' => 695,
                'image' => 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
            ],
            [
                'title' => 'Product 7',
                'description' => 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person and, therefore, by content.',
                'price' => 49.99,
                'image' => 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
            ],
            [
                'title' => 'Product 8',
                'description' => 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                'price' => 19.99,
                'image' => 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
            ],
        ];

        foreach ($products as $key => $value) {
            Product::updateOrCreate(
                [
                    'title' => $value['title']
                ],
                [
                    'title' => $value['title'],
                    'description' => $value['description'],
                    'price' => $value['price'],
                    'image' => $value['image'],
                ]
            );
        }

    }
}
