<template>
    <div id="container"> 
        <div id="leftcontainer">
            <img src="../assets/signup.jpeg" alt="signup picture">
        </div>

        <div id="rightcontainer">
            <div id="contentofwords">
                <h1>Create an Account</h1> 
            </div>

            <form id="myform" @submit.prevent="register">
                <div class="formli">
                    <label for="userName">What should we call you?</label>
                    <input type="text" id="userName" v-model="name" pattern="[a-zA-Z0-9._]+" title="Letters, numbers, underscore and period are allowed" placeholder="Enter your username" required> 
                
                    <label for="email">What's your email?</label>
                    <input type="email" id="email" v-model="email" placeholder="Enter your email address" required>
                   
                    <label for="password">Create a password</label>
                    <input type="password" id="password" v-model="password" placeholder="Enter your password" required> 
                    
                    <div id="buttonsupdate">
                        <button id="createaccountbutton" type="submit">Create Account</button> 
                    </div>
                </div>
            </form>

            <div id="gotologin">
                <span>Already have an account?</span> 
                <br>
                <button id="loginbutton" type="button" v-on:click="goToLogIn">Log in</button> 
            </div>
        </div>
    </div>
</template>
 
<script>
    import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged} from "firebase/auth";

    export default {
        name:"SignUp",

        data() {
            return {
                email: "",
                password: "",
                name: ""
            }
        },
        methods: {
            // Creates an account for the user with the user's input email and password and stores the account firestore authentication component
            register() {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        const user = userCredential.user
                        updateProfile(user, {
                            displayName: this.name
                        })
                        alert('Successfully registered!')
                        this.$router.push({name: 'EditProfile'})
                    })
                    .catch(error => {
                        alert(error.message);
                    })
            },
            goToLogIn() {
                this.$router.push({name: 'LogInDisplay'})
            }
        },
    
    }
</script>
 
 

