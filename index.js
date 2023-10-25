
  // Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
    const data = [
        [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Bob', age: 40 }
        ],
        [
            { name: 'Tom', age: 20 },
            { name: 'Alice', age: 33 },
            { name: 'Jack', age: 44 }
        ]
    ];

    const names = data.map(person => person.name);
    console.log(names); // ['John', 'Jane', 'Bob', 'Tom', 'Alice', 'Jack']