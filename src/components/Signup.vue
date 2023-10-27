<template>
    <div id="mainContainer">  
        <div id="imageContainer">  
            <img src="../assets/signup.jpeg" alt="signup picture">
        </div>

        <div id="formContainer"> 
            <div id="headerText">  
                <h1>Create an Account</h1> 
            </div>

            <form id="registrationForm"> 
                <div class="inputFields"> 
                    <label for="userNameInput">What should we call you?</label>  
                    <input type="text" id="userNameInput" v-model="name" pattern="[a-zA-Z0-9._]+" title="Letters, numbers, underscore and period are allowed" placeholder="Enter your username" required> 
                
                    <label for="emailInput">What's your email?</label>  
                    <input type="email" id="emailInput" v-model="email" placeholder="Enter your email address" required>
                   
                    <label for="passwordInput">Create a password</label>  
                    <input type="password" id="passwordInput" v-model="password" placeholder="Enter your password" required> 
                    
                    <div id="submitBtnContainer"> 
                        <button id="submitAccountBtn" type="submit">Create Account</button>  
                    </div>
                </div>
            </form>

            <div id="loginPrompt"> 
                <span>Already have an account?</span> 
                <br>
                <button id="loginBtn" type="button" v-on:click="goToLogIn">Log in</button>  <!-- Changed from "loginbutton" -->
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
 
 

