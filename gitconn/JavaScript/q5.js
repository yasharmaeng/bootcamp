var employee=[{
    name: "Yash",
    age:21,
    salary:999,
    DOB: new Date(1999,08,7),
},
{
    name: "Sharma",
    age:18,
    salary:5100,
    DOB: new Date(1999,10,20),
},
{
    name: "Kumar",
    age:40,
    salary:1000,
    DOB: new Date(2010,01,01),
},
{
    name: "alwar",
    age:33,
    salary:3333,
    DOB: new Date(2013,03,03),
}
];

console.log(employee);


//part 2
for(i in employee)
{
    if(employee[i].salary>5000){
        console.log("PART 2->"+employee[i].name)
    }
}

//part 3
var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  console.log(groupBy(employee, employee.length));


//part 4
for(i in employee)
{
    if(employee[i].salary<1000 && employee[i].age>20){
        console.log("PART 4->"+employee[i].name+" "+employee[i].salary)
        employee[i].salary=employee[i].salary*5;
        console.log("After Increment ->"+employee[i].salary)
    }
}