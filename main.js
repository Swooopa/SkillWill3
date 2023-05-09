// 1.1

function generateArray(n) {
    if (n <= 2) {
      throw new Error("n must be greater than 2");
    }
    
    const result = [1, 2];
    let sum = 3;
    let product = 1;
    
    for (let i = 2; i < n; i++) {
      if (i === 2) {
        result.push(sum);
      } else {
        const current = sum * product;
        result.push(current);
        product *= i;
        sum += current;
      }
    }
    
    return result;
  }
  

  // 1.2

  function getCity(user) {
    const { banks } = user?.address?.banks?.[2] || {};
    const { city } = banks?.address || {};
    return city;
  }

  console.log(getCity);

  // 1.3


  
  function cloneAndMutate(obj) {
    // create a new object with the same prototype as the original
    const clonedObj = Object.create(Object.getPrototypeOf(obj));
    
    // iterate over the original object's keys
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        // recursively clone sub-objects
        clonedObj[key] = cloneAndMutate(obj[key]);
      } else {
        // assign a new value to primitive properties
        clonedObj[key] = obj[key] + 1;
      }
    }
    
    return clonedObj;
  }
  const originalObj = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  
  const clonedObj = cloneAndMutate(originalObj);
  
  console.log(clonedObj);
  /*
  {
    name: 'John',
    age: 31,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  }
  */
    