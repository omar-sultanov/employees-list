<template>
  <div>
    <form
      class="row g-3 my-3 border-bottom pb-4"
      @submit.prevent="handleSubmit"
    >
      <div class="col-md-6">
        <label for="inputName" class="form-label"
          >Имя
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            /></svg
        ></label>
        <input
          type="text"
          v-model="employee.name"
          class="form-control"
          id="inputName"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="inputSurname" class="form-label"
          >Фамилия
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            /></svg
        ></label>
        <input
          type="text"
          v-model="employee.surname"
          class="form-control"
          id="inputSurname"
          required
        />
      </div>

      <div class="col-md-12">
        <label for="inputAddress" class="form-label">
          Адрес
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            /></svg
        ></label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          v-model="employee.address"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="inputAge" class="form-label">
          Возраст
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            /></svg
        ></label>
        <input
          v-model="employee.age"
          type="text"
          class="form-control"
          id="inputAge"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="inputExprerience" class="form-label"
          >Стаж
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            /></svg
        ></label>
        <input
          type="text"
          v-model="employee.experience"
          class="form-control"
          id="inputExperience"
          required
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary px-5 rounded-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
            <path
              fill-rule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            /></svg
          >{{ isEdit ? 'Сохранить' : 'Добавить' }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FormEmployee',
  computed: {
    ...mapState(['editEmployee']),

    // Computed property to determine if the form is in edit mode or add mode
    isEdit() {
      return !!this.editEmployee;
    },

    // Computed property for the employee object being edited or a new employee
    employee: {
      get() {
        return (
          this.editEmployee || {
            name: '',
            surname: '',
            experience: '',
            age: '',
            address: '',
          }
        );
      },
      set(value) {
        this.updateEmployee(value);
      },
    },
  },
  methods: {
    ...mapMutations(['addEmployee', 'updateEmployee']),
    handleSubmit() {
      if (this.isEdit) {
        this.updateEmployee(this.employee);
      } else {
        this.addEmployee(this.employee);
      }
      this.employee = {};
    },
  },
};
</script>
<style>
label {
  font-size: 13px;
  font-weight: bold;
}
.btn-primary {
  font-size: 12px;
}
label svg {
  color: brown;
  margin-bottom: 4px;
}
button svg{
  margin-right: 6px;
}
</style>
