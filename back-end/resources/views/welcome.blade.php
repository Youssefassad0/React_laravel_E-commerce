<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>App Seeder&factory</title>
</head>
<body>
    <div class="container mt-5 ">
      
        <table class="table table-center ">
<thead>
    <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Filiere</th>
        <th>age</th>
    </tr>
</thead>
<tbody>
    @foreach ($stagiaire as $stg)
        <tr>
            <td>
                {{ $stg->id }}
            </td>   <td>
                {{ $stg->nom }}
            </td>   <td>
                {{ $stg->prenom }}
            </td>   <td>
                {{ $stg->filiere }}
            </td><td>
                {{ $stg->age }}
            </td>
        </tr>
    @endforeach
</tbody>
        </table>
        <div>
            {{ $stagiaire->links() }}
        </div>
    </div>
</body>
</html>