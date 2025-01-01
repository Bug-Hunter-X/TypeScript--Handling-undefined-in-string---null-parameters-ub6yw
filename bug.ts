function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // This will work fine
printName(undefined); // This will throw an error because 'undefined' is not assignable to 'string | null'