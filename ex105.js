function filter_list(l) {
    // Return a new array with the strings filtered out
    l = l.filter(a => !(typeof a === 'string') && a >= 0)
    return l;
  }

  console.log(filter_list([1,2,'aasf','1','123',123]))