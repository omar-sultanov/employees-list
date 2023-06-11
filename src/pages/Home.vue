<template>
  <div class="Home">
    <Header />
    <FormEmployee @add:employee="addEmployee" />
    <EmployeesList :employees="employees" />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import { v4 as uuidv4 } from 'uuid';
import FormEmployee from '../components/FormEmployee.vue';
import EmployeesList from '../components/EmployeesList.vue';
import Header from '../components/Header.vue';

export default {
  name: 'HomePage',
  components: { FormEmployee, Header, EmployeesList },
};
</script>
<style>
.Home {
  width: 50%;
  margin: 0 auto;
}
</style>
