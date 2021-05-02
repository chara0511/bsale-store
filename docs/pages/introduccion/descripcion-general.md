# Descripción General

BSale store es un ejercicio de postulación propuesto por la empresa BSale que consiste en crear una aplicación web, implementando cliente y servidor.
BSale store-test es una tienda online que despliegue productos agrupados por la categoría a la que
pertenecen.

## Database Schema

### Product

| Name        |   Type    |                           Description |
| :---------- | :-------: | ------------------------------------: |
| `id`        |   `int`   |      Identificador único del producto |
| `name`      | `varchar` |                   Nombre del producto |
| `url_image` | `varchar` | URL de la imagen asociada al producto |
| `price`     |  `float`  |          Precio de venta del producto |
| `discount`  |   `int`   |  Porcentaje de descuento del producto |
| `category`  |   `int`   |         Identificador de la categoría |

### Category

| Name   |   Type    |                         Description |
| :----- | :-------: | ----------------------------------: |
| `id`   |   `int`   | Identificador único de la categoría |
| `name` | `varchar` |              Nombre de la categoría |
