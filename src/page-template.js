const generateManagerCard = function (manager) {
    return `
    <div class="card employee-card col-3">
    <div class="card-header">
        <h2 class="card-title"> ${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
            <li class="list-group-item">Office #: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
};

const generateEngineerCard = function (engineer) {
    return `
    <div class="card employee-card col-3">
    <div class="card-header">
        <h2 class="card-title"> ${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-cog mr-2"></i> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target='_blank'> ${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `;
};

const generateInternCard = function (intern) {
    return `
    <div class="card employee-card col-3">
    <div class="card-header">
        <h2 class="card-title"> ${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
    `;
};

generateWebsite = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateInternCard(employee);

            pageArray.push(internCard);
        }
        
    };

    const employeeCards = pageArray.join('')

    const generateTeam = generateHtml(employeeCards); 
    return generateTeam;
};





const generateHtml = function (employeeCards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff Profiles</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-4 jumbotron bg-success bg-gradient text-white">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
                ${employeeCards}
        </div>
    </div>
</body>
</html>`;
};

module.exports = generateWebsite;
