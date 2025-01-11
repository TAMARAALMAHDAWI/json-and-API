

const person = {
    name: "tamara",
    age: 24,
    email: "tamara@22.com"
  };
  
 
  const jsonString = JSON.stringify(person);
  console.log("JSON String:", jsonString);
  
 
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedObject);

  //2//
  {
  function countProperties(jsonObject) {
  
    const propertiesArray = Object.keys(jsonObject);
    
    
    return propertiesArray.length;
  }
  
  
  const person = {
    name: "tamara",
    age: 24,
    email: "tamara@22.com"
  };
  
  console.log(countProperties(person)); 
}


//3//

const booksData = {
    "books": [
      {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publicationDate": "1925-04-10"
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "publicationDate": "1949-06-08"
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publicationDate": "1960-07-11"
      }
    ]
  };
  
  function getBookTitles(jsonObject) {
  
    return jsonObject.books.map(book => book.title);
  }
  
  
  const titles = getBookTitles(booksData);
   
  console.log(titles);

  //4//
  const studentsData = {
    "students": [
      {
        "name": "sara",
        "grade": 85
      },
      {
        "name": "Hala",
        "grade": 92
      },
      {
        "name": "Adam",
        "grade": 78
      },
      {
        "name": "Amer",
        "grade": 88
      }
    ]
  };

   
  function calculateAverageGrade(jsonObject) {
    
    const students = jsonObject.students;
   
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);

    const averageGrade = totalGrade / students.length;
  
    
    return averageGrade;
  }
  
  
  const average = calculateAverageGrade(studentsData);
  
  
  console.log("Average Grade:", average);

  //5//
  function sortByProperty(jsonObject, property) {
    
    if (Array.isArray(jsonObject)) {
        jsonObject.sort((a, b) => {
            if (a[property] > b[property]) {
                return 1;
            } else if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        });
    }
    return jsonObject;
}


const students = [
    { name: "tamara", grade: 85 },
    { name: "sara", grade: 92 },
    { name: "Amer", grade: 78 },
    { name: "Hala", grade: 88 }
];

const sortedStudents = sortByProperty(students, "grade");
console.log(sortedStudents);

//6//







  function sortCitiesByPopulation(jsonData) {
 
    let cities = jsonData.cities;
    
    
    cities.sort((a, b) => b.population - a.population);
    

    return cities.map(city => city.name);
  }
  
  const jsonData = {
    "cities": [
      { "name": "New York", "population": 8419600, "country": "USA" },
      { "name": "Tokyo", "population": 13929286, "country": "Japan" },
      { "name": "Berlin", "population": 3644826, "country": "Germany" },
      { "name": "Cairo", "population": 9500000, "country": "Egypt" }
    ]
  };
   
  console.log(sortCitiesByPopulation(jsonData));


  //7//
  function calculateTotalRevenue(jsonData) {

    let products = jsonData.products;
    
    
    let totalRevenue = products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
    
    return totalRevenue;
  }
  
    

  
  


