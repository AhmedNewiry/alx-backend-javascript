export default function createIteratorObject(report) {
  const allEmployees = [];

  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      allEmployees.push(...report.allEmployees[department]);
    }
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < allEmployees.length) {
            return { value: allEmployees[index++], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
