function printName(name: string | null | undefined): void {
  if (name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null);
printName(undefined);
printName('John Doe');