import { createStore } from 'vuex';

export default createStore({
  state: {
    employees: [
        {
          name: 'Омар',
          surname: 'Султанов',
          address: 'Москва',
          experience: 1,
          age: 25,
        },
      ],
    editEmployee: null,
  },
  mutations: {
     // Mutation to add a new employee
    addEmployee(state, employee) {
      state.employees.push(employee);
    },

    // Mutation to update an existing employee
    updateEmployee(state, employee) {
      if (state.editEmployee) {
        Object.assign(state.editEmployee, employee);
        state.editEmployee = null;
      }
    },

       // Mutation to set the employee being edited
    editEmployee(state, employee) {
      state.editEmployee = employee;
    },

       // Mutation to delete an employee
    deleteEmployee(state, employee) {
      const index = state.employees.indexOf(employee);
      if (index !== -1) {
        state.employees.splice(index, 1);
      }
    },
  },
});
