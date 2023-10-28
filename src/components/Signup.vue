<template>
    <div id="mainContainer">  
        <div id="imageContainer">  
            <img src="../assets/foodsplash.jpeg" alt="signup picture">
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
    import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

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
 
 
<style scoped>

/* Main Container */
#mainContainer {
    display: flex;
    width: 90vw;
    margin-top: 3vh;
    font-family: 'Arial', sans-serif;
}

/* Image Container */
#imageContainer {
    flex: 0.6;
    margin-top: 7vh;
    font-family: 'Arial', sans-serif;
}

img {
    width: 50%;
    height: auto;
}

/* Form Container */
#formContainer {
    flex: 0.4;
    margin-top: 8vh;
    margin-left: 3vh;
}

#headerText h1 {
    font-family: 'Courier New', monospace;
    line-height: 30px;
}

/* Form Styles */
#registrationForm {
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.inputFields {
    display: inline-block;
    text-align: center;
    width: 100%;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
}

input {
    border: 1.5px solid #aaa;
    padding: 14px 22px;
    margin: 12px 0;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
}

input:focus {
    border-color: #666;
    box-shadow: 0 0 5px rgba(0, 119, 204, 0.5);
}

::placeholder {
    font-size: 18px;
    color: #bbb;
}

/* Button Styles */
#submitAccountBtn {
    background-color: #9fadd3;
    border: 2px solid #9fadd3;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    padding: 12px 34px;
    font-size: 19px;
    width: 100%;
}

#submitAccountBtn:hover {
    background-color: #8f9999;
    border: 2px solid #8f9999;
}

/* Login Prompt */
#loginPrompt {
    display: flex;
    margin-top: 1vh;
}

#loginBtn {
    background: transparent;
    border: none;
    margin-left: 0.5vw;
    font-size: 1em;
    color: #555;
}

#loginBtn:hover {
    color: #000;
    border-bottom: 1px solid #333;
}

</style>
