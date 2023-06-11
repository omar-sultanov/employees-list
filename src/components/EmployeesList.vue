<template>
  <div>
    <table class="table caption-top">
      <caption class="text-bold">
        Список сотрудников: {{ employees.length }}
      </caption>
      <thead class="table-dark">
        <tr>
          <th scope="col">№</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Адрес</th>
          <th scope="col">Стаж</th>
          <th scope="col">Возраст</th>
          <th scope="col">Редактировать</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.surname }}</td>
          <td>{{ employee.address }}</td>
          <td>{{ employee.experience }}</td>
          <td>{{ employee.age }}</td>
          <td>
            <button
              id="btn-update"
              type="button"
              class="btn btn-secondary p-1 rounded-0"
              @click="editEmployee(employee)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                /></svg
              ><span>Изменить</span>
            </button>
            <button
              id="btn-remove"
              class="btn btn-danger p-1 rounded-0"
              @click="deleteEmployee(employee)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                /></svg
              >Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
export default {
  name: 'EmployeesList',
  computed: mapState(['employees']),
  methods: {
    ...mapMutations(['editEmployee', 'deleteEmployee']),
  },
};
</script>

<style>
caption {
  font-size: 20px;
  color: black;
}
th,
td {
  font-weight: 400;
  font-size: 12px;
}
#btn-update {
  font-size: 10px;
  margin-right: 5px;
}
#btn-remove {
  font-size: 10px;
}

#btn-update svg {
  color: white;
  margin-right: 5px;
}
</style>
