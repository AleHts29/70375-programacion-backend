## Artillery

    ```bash
    artillery quick --count 40 --num 50 "http://localhost:9090/api/performance/operation/simple" -o resultadosSencilla.json
    ```

## Ejecucion de script .yml

    ```bash
    artillery run config.yml --output test01.json
    ```

## Generacion de reporte .html

    ```bash
    artillery report test01.json -o resultUser.html
    ```
