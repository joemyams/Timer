
 var employees = [
            {"id": 0, "firstName": "Merriam", "lastName": "Dingcong", "managerId": 2, "managerName": "YamGwapa","Motto": "In God We Trust.", "reports": 1, "title": "Nurse And Research Associate", "department": "Call Center", "cellPhone": "0943-5763208", "officePhone": "254-5716", "email": "yammercado@yahoo.com", "city": "DANAO, CITY", "pic": "yam.jpg", "twitterId": "@yams"},
            {"id": 1, "firstName": "Joshua Emmanuel", "lastName": "Dingcong", "managerId": 0, "managerName": "Shuaki", "Motto": "Be Who You Want to Be, Not What Others Want You To See.", "reports": 1, "title": "President and CEO", "department": "Ionic Mobile Development", "cellPhone": "0923-4599349", "officePhone": "254-5716", "email": "joemyams@yahoo.com", "city": "CEBU, CITY", "pic": "joemyams.jpg", "twitterId": "@joemyams"},
            {"id": 2, "firstName": "Baby-Loren", "lastName": "Montiballe", "managerId": 3, "managerName": "Lornz", "Motto": "Don't Worry, Just Breath. If It's Meant To Be, It Will Find It's Way.", "reports": 1, "title": "Supervisor", "department": "MaxiCare Agent", "cellPhone": "0949-3712865", "officePhone": "none", "email": "lorna@yahoo.com", "city": "CEBU, CITY", "pic": "lorna.jpg", "twitterId": "@lorna"},
            {"id": 3, "firstName": "Jason", "lastName": "Pablo", "managerId": 2, "managerName": "Son Ix", "Motto": "Lumabo Man Ang Mga MATA Ko.. Mananatili Pa Ring MALINAW Ang Pagtingin Ko Sayo.", "reports": 4, "title": "CTU President", "department": "IT", "cellPhone": "0917-5505257", "officePhone": "none", "email": "jason_x3me@yahoo.com", "city": "CEBU, CITY", "pic": "sonix.jpg", "twitterId": "@sonix"},
            {"id": 4, "firstName": "Jin", "lastName": "Hisoler", "managerId": 3, "managerName": "Jin2x", "reports": 0, "title": "Nurse", "department": "Health", "cellPhone": "09428051734", "officePhone": "none", "email": "jinhisoler@gmail.com", "city": "CEBU, CiTY", "pic": "jin.jpg", "twitterId": "@jinz"},
            {"id": 5, "firstName": "Alfred Walter", "lastName": "Dy", "managerId": 2, "managerName": "WawaDy", "Motto": "Aanhin Mo Ang Palasyo Kung Walang Internet Connection Dito! Mabuti Pa Sa Bahay Kubo Nasa Wifi Zone Nakapwesto!", "reports": 0, "title": "Web Designer", "department": "Web Development", "cellPhone": "0925-5023159", "officePhone": "none", "email": "wawady@gmail.com", "city": "CEBU, CiTY", "pic": "wawa.jpg", "twitterId": "@wawady"},
            {"id": 6, "firstName": " Myrnie", "lastName": "Ocsana", "managerId": 3, "managerName": "Myrnie", "reports": 0, "title": "SuperModel", "department": "Victoria Secret", "cellPhone": "0932-2072545", "officePhone": "none", "email": "Myrnie@gmail.com", "city": "CEBU, CiTY", "pic": "myrna.jpg", "twitterId": "@myrna"},
            {"id": 7, "firstName": "Rj", "lastName": "Mercado", "managerId": 2, "managerName": "Rj Gwapo", "reports": 3, "title": "Sales Manager", "department": "UNO", "cellPhone": "0943-9171764", "officePhone": "none", "email": "rj28@yahoomail.com", "city": "CEBU, CITY", "pic": "rj.jpg", "twitterId": "@rj"},
            {"id": 8, "firstName": "Beatriz", "lastName": "Barcoma", "managerId": 3, "managerName": "TitaBeatriz", "reports": 0, "title": "Designer and Model", "department": "Victoria Secret", "cellPhone": "09225569902", "officePhone": "none", "email": "beatriz@yahooemail.com", "city": "CEBU, CITY", "pic": "tita.jpg", "twitterId": "@Tita"},
            {"id": 9, "firstName": "Randy", "lastName": "Datiles", "managerId": 2, "managerName": "Randz", "Motto": "Life without Clash of Clans is a Mistake.", "reports":  1, "title": "COC LEADER", "department": "GAMING", "cellPhone": "0932-6136752", "officePhone": "none", "email": "randz555@yahoo.com", "city": "MINDANAO, CITY", "pic": "randy.jpg", "twitterId": "@Randz"},
            {"id": 10, "firstName": "Andy", "lastName": "Wong", "managerId": 10, "managerName": "AndyDeveloper", "Motto": "Work Hard, Party Hard.", "reports": 0, "title": "Ruby on Rails Developer", "department": "Software Development", "cellPhone": "none", "officePhone": "none", "email": "andywong@yahooemail.com", "city": "CEBU, CITY", "pic": "andy.jpg", "twitterId": "@andywong"},

        ];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(employees.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(employees);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};

exports.findReports = function (req, res, next) {
    var id = parseInt(req.params.id),
        response,
        reports = [],
        employee;

    response = {
        id: id,
        firstName: employees[id].firstName,
        lastName: employees[id].lastName,
        title: employees[id].title,
        pic: employees[id].pic
    }

    for (var i=0; i<employees.length; i++) {
        employee = employees[i];
        if (employee.managerId === id) {
            reports.push({id: employee.id, firstName: employee.firstName, lastName: employee.lastName, title: employee.title, pic: employee.pic});
        }
    }

    response.reports = reports;

    res.send(response);
};
