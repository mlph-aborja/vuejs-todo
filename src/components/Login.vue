<template>
    <div class="container-sm" >
        <h3>Login</h3>
        <form>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" v-model.trim="$v.firstName.$model" class="form-control" :class="{ 'is-invalid': $v.firstName.$error }" id="first-name">
                <div class="error" v-if="!$v.firstName.required">Field is required</div>
                <div class="error" v-if="!$v.firstName.minLength">Name must have at least {{$v.firstName.$params.minLength.min}} letters.</div>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text"  v-model.trim="$v.lastName.$model"  class="form-control" :class="{ 'is-invalid': $v.lastName.$error }" id="last-name">
                <div class="error" v-if="!$v.lastName.required">Field is required</div>
                <div class="error" v-if="!$v.lastName.minLength">Name must have at least {{$v.lastName.$params.minLength.min}} letters.</div>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" v-model.trim.lazy="$v.age.$model"  class="form-control" :class="{ 'is-invalid': $v.age.$error }" id="age">
                <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                <label class="password">Password</label>
                <input id="password" class="form-control" :class="{ 'is-invalid': $v.password.$error }" v-model.trim="$v.password.$model"/>
            </div>
            <div class="error" v-if="!$v.password.required">Password is required.</div>
            <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
            <div class="form-group">
                <label class="repeat-password">Repeat password</label>
                <input id="repeat-password" class="form-control" :class="{ 'is-invalid': $v.repeatPassword.$error }" v-model.trim="$v.repeatPassword.$model"/>
            </div>
            <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
            <button type="submit" v-bind:disabled="$v.$invalid" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

import { required, minLength, between, sameAs } from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            age: 0,
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        firstName: {
            required,
            minLength: minLength(2)
        },
        lastName: {
            required,
            minLength: minLength(2)
        },
        age: {
            between: between(18, 65)
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    }
}
</script>

<style scoped>

</style>