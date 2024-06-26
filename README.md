# Pickit

BackEnd para Pickit.

### Dependencias

* Node v16.13
* MySQL 

### Instalar dependencias

* npm install

### Ejecutar

* How to run the program
```
npm run start:dev
```

## Autor

Gonzalez Cristian David

## Modo de uso

######### TODAS LAS PETICIONES NECESITAN TOKEN EN HEADERS. 
## TOKEN = miclaveultrasecreta123*


# Autos
* [listar vehiculos](#listar-Autos)
* [Buscar por marca](#buscar-por-marca)
* [crear nuevo vehiculos](#nuevo-auto)
* [editar vehiculos](#editar-auto)

# Propietarios
* [listar propietarios](#listar-propietarios)
* [Buscar por apellido propietario](#buscar-por-apellido)
* [registrar nuevo propietario](#nuevo-propietario)
* [editar propietario](#editar-propietario)

# Servicios
* [listar todos los servicios](#listar-servicios)
* [Buscar por id de propietario](#buscar-por-propietario)
* [registrar nuevo servicio](#nuevo-servicio)

# Autos - propietario
* [listar todos los vehiculos con sus respectivos propietarios](#listar-todos-los-autos-con-su-respectivo-propietario)
* [Obtener vehiculo con su respectivo propietario](#Obtener-vehiculo-con-su-respectivo-propietario)


## Metodos

### listar Autos
- uri: /api/cars/list
- method: `'GET'`
- headers:
  - `x-token`: `miclaveultrasecreta123*`

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
- headers:
  - `x-token`: `miclaveultrasecreta123*`

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
  - `x-token`: `miclaveultrasecreta123*`

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
  - `x-token`: `miclaveultrasecreta123*`
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
- headers:
  - `x-token`: `miclaveultrasecreta123*`

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
- headers:
  - `x-token`: `miclaveultrasecreta123*`

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
  - `x-token`: `miclaveultrasecreta123*`
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
  - `x-token`: `miclaveultrasecreta123*`
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
## Servicios
### listar todos los servicios
- uri: /api/transactions/list
- method: `'GET'`
- headers:
  - `x-token`: `miclaveultrasecreta123*`

- response:
```json
[
    {
        "id": 1,
        "status": "ok",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 7,
            "description": "Revisión General",
            "price": "5000.30",
            "createdAt": "2022-05-13T17:49:18.000Z"
        }
    },
    {
        "id": 2,
        "status": "ok",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 1,
            "description": "Cambio de Aceite",
            "price": "3500.60",
            "createdAt": "2022-05-13T17:43:31.000Z"
        }
    },
    {
        "id": 3,
        "status": "pen",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 2,
            "description": "Cambio de Filtro",
            "price": "1220.20",
            "createdAt": "2022-05-13T17:44:23.000Z"
        }
    },
    {
        "id": 4,
        "status": "KO",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 5,
            "description": "Cambio de Correa",
            "price": "12100.60",
            "createdAt": "2022-05-13T17:48:22.000Z"
        }
    }
]
```
### buscar servicio por id de auto
- uri: /api/transactions/find/:car_id
- method: `'GET'`
- headers:
  - `x-token`: `miclaveultrasecreta123*`

- response:
```json
[
    {
        "id": 1,
        "status": "ok",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 7,
            "description": "Revisión General",
            "price": "5000.30",
            "createdAt": "2022-05-13T17:49:18.000Z"
        }
    },
    {
        "id": 2,
        "status": "ok",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 1,
            "description": "Cambio de Aceite",
            "price": "3500.60",
            "createdAt": "2022-05-13T17:43:31.000Z"
        }
    },
    {
        "id": 3,
        "status": "pen",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 2,
            "description": "Cambio de Filtro",
            "price": "1220.20",
            "createdAt": "2022-05-13T17:44:23.000Z"
        }
    },
    {
        "id": 4,
        "status": "KO",
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        },
        "services": {
            "id": 5,
            "description": "Cambio de Correa",
            "price": "12100.60",
            "createdAt": "2022-05-13T17:48:22.000Z"
        }
    }
]
```
### nuevo servicio
- uri: /api/transactions/new
- method: `'POST'`
- headers:
  - `Accept`: `application/json`
  - `Content-Type`: `application/json`
  - `x-token`: `miclaveultrasecreta123*`
  - body:
```json
{
    "car": 1,
    "owner": 1,
    "service": 5,
    "status": "KO"
}
```

- response:
```json
{
    "id": 4,
    "car_id": 1,
    "owner_id": 1,
    "service_id": 5,
    "status": "KO",
    "updatedAt": "2022-05-13T18:59:35.057Z",
    "createdAt": "2022-05-13T18:59:35.057Z"
}
```
### listar todos los autos con su respectivo propietario
- uri: /api/carsOwner/list
- method: `'GET'`
- headers:
  - `x-token`: `miclaveultrasecreta123*`

- response:
```json
[
    {
        "id": 1,
        "car": {
            "id": 5,
            "manufacturer": "fiat",
            "models": "argo",
            "color": "gris",
            "year": 2021,
            "registration": "ae578sa"
        },
        "owner": {
            "id": 3,
            "lastName": "Ramirez",
            "name": "Maria"
        }
    },
    {
        "id": 2,
        "car": {
            "id": 4,
            "manufacturer": "nissan",
            "models": "frontier",
            "color": "gris",
            "year": 2017,
            "registration": "ac945ky"
        },
        "owner": {
            "id": 3,
            "lastName": "Ramirez",
            "name": "Maria"
        }
    },
    {
        "id": 3,
        "car": {
            "id": 2,
            "manufacturer": "ford",
            "models": "f-100",
            "color": "azul",
            "year": 1950,
            "registration": "dre745"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        }
    },
    {
        "id": 4,
        "car": {
            "id": 1,
            "manufacturer": "ford",
            "models": "falcon",
            "color": "rojo",
            "year": 1971,
            "registration": "dfw154"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        }
    }
]
```
### buscar por marca
- uri: /api/carsOwner/find/:idCar
- method: `'GET'`
- headers:
  - `x-token`: `miclaveultrasecreta123*`

- response:
```json
[
    {
        "id": 3,
        "car": {
            "id": 2,
            "manufacturer": "ford",
            "models": "f-100",
            "color": "azul",
            "year": 1950,
            "registration": "dre745"
        },
        "owner": {
            "id": 1,
            "lastName": "Gonzalez",
            "name": "Cristian"
        }
    }
]
```



