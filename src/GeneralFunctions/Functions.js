export const generateId = (arr) => {
  if (arr.length === 0) {
    return 1;
  } else {
    const index = arr.length - 1;
    return arr[index].id + 1;
  }
};
export const saveExpenses = (user, key) => {
  const users = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  users.id = generateId(users);
  users.push(user);
  localStorage.setItem(key, JSON.stringify(users));
};
export const readExpenses = (key) => {
  const exisiting_expenses = localStorage.getItem(key);
  if (exisiting_expenses === null) {
    return [];
  } else {
    return JSON.parse(exisiting_expenses);
  }
};

export const findUser = (email, password, arr) => {
  const found = arr.find((el) => el.email === email && el.password === password);
  return found;
};
