# Pickit

BackEnd para Pickit.

## Getting Started

### Dependencies

* Node v16.13
* MySQL 

### Installing

* npm install

### Executing program

* How to run the program
```
npm run start:dev
```

## Authors

Gonzalez Cristian David

## Using

# Autos
* [listar autos](#listar-Autos)
* [Buscar por marca](#buscar-por-marca)
* [crear nuevo auto](#nuevo-auto)
* [editar auto](#editar-auto)

# Propietarios
* [listar propietarios](#listar-propietarios)
* [Buscar por apellido propietario](#buscar-por-apellido)
* [registrar nuevo propietario](#nuevo-propietario)
* [editar propietario](#editar-propietario)

### listar Autos
- uri: /api/cars/list
- method: `'GET'`

- response:
```json
[
    {
        "id": 1,
        "manufacturer": "ford",
        "models": "falcon",
        "color": "rojo",
        "year": 1971,
        "registration": "dfw154",
        "createdAt": "2022-05-13T15:44:11.000Z",
        "updatedAt": "2022-05-13T15:44:11.000Z"
    },
    {
        "id": 2,
        "manufacturer": "ford",
        "models": "f-100",
        "color": "azul",
        "year": 1950,
        "registration": "dre745",
        "createdAt": "2022-05-13T15:44:39.000Z",
        "updatedAt": "2022-05-13T15:44:39.000Z"
    }
]
```
### buscar por marca
- uri: /api/cars/find/:manufacturer
- method: `'GET'`

- response:
```json
[
    {
        "id": 4,
        "manufacturer": "nissan",
        "models": "frontier",
        "color": "gris",
        "year": 2017,
        "registration": "ac945ky",
        "createdAt": "2022-05-13T16:20:09.000Z",
        "updatedAt": "2022-05-13T16:20:09.000Z"
    }
]
```
### nuevo auto
- uri: /api/cars/new
- method: `'POST'`
- headers:
  - `Accept`: `application/json`
  - `Content-Type`: `application/json`
  - body:
```json
{
    "manufacturer": "chevrolet",
    "models": "aveo",
    "year": 2011,
    "registration": "fds761",
    "color": "blanco"
}
```

- response:
```json
{
    "id": 9,
    "manufacturer": "chevrolet",
    "models": "aveo",
    "year": 2011,
    "registration": "fds761",
    "color": "blanco",
    "updatedAt": "2022-05-13T20:37:26.839Z",
    "createdAt": "2022-05-13T20:37:26.839Z"
}
```
### editar auto
- uri: /api/cars/edit/:id
- method: `'PUT'`
- headers:
  - `Accept`: `application/json`
  - `Content-Type`: `application/json`
  - body:
```json
{
    "manufacturer": "chevrolet",
    "models": "aveo",
    "year": 2011,
    "registration": "fds761",
    "color": "rojo"
}
```

- response:
```json
[
    true
]
```

## Propietarios
### listar propietarios
- uri: /api/owner/list
- method: `'GET'`

- response:
```json
[
    {
        "id": 1,
        "lastName": "Gonzalez",
        "name": "Cristian",
        "createdAt": "2022-05-13T17:17:49.000Z",
        "updatedAt": "2022-05-13T17:17:49.000Z"
    },
    {
        "id": 2,
        "lastName": "Gonzalez",
        "name": "Nahuel",
        "createdAt": "2022-05-13T15:29:36.000Z",
        "updatedAt": "2022-05-13T15:30:23.000Z"
    }
]
```
### buscar por apellido
- uri: /api/owner/find/:lastName
- method: `'GET'`

- response:
```json
[
    {
        "id": 3,
        "lastName": "Ramirez",
        "name": "Maria",
        "createdAt": "2022-05-13T20:56:59.000Z",
        "updatedAt": "2022-05-13T20:56:59.000Z"
    }
]
```
### nuevo propietario
- uri: /api/owner/new
- method: `'POST'`
- headers:
  - `Accept`: `application/json`
  - `Content-Type`: `application/json`
  - body:
```json
{
    "lastName": "Ramirez",
    "name": "Maria"
}
```

- response:
```json
{
    "id": 3,
    "lastName": "Ramirez",
    "name": "Maria",
    "updatedAt": "2022-05-13T20:56:59.895Z",
    "createdAt": "2022-05-13T20:56:59.895Z"
}
```
### editar propietario
- uri: /api/cars/edit/:id
- method: `'PUT'`
- headers:
  - `Accept`: `application/json`
  - `Content-Type`: `application/json`
  - body:
```json
{
    "lastName": "Ramirez",
    "name": "Maria Esther"
}
```

- response:
```json
[
    true
]
```



