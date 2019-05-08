'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */


const Route = use('Route')

Route.get('/users','UserController.js')
Route.get('/sessions','SessionController.js')


Route.resource('properties','PropertyController')
    .apiOnly()     //method get and set have no routes
    .middleware('auht') //only logged in users can access

Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')

Route.get('images/:path', 'ImageController.show')