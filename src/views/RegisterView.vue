<template>
    <main class="register-area">
        <h2>Register new user</h2>
        <form class="register-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" required />
            </div>
            <div class="controlls">
                <button>Register</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
.register-area {
    border-radius: 5px;
    background-color: rgb(93, 133, 255);
    max-width: 350px;
    margin: 2rem auto;
    padding: 2rem;
    color: white;
}

.register-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1.25rem;
}

label{
    min-width: 120px;
    display: inline-block;
}

input{
    padding: .5rem .75rem;
    border-radius: 20px;
    border: none;
}

h2{
    margin-bottom: 1.5rem;
}
.controlls>button {
    color: inherit;
    padding: 0.65rem 0.75rem;
    text-transform: uppercase;
    background-color: goldenrod;
    border: none;
    font-weight: 800;
    letter-spacing: 2px;
    border-radius: 20px;
    display: block;
    margin: 0 auto;
}
</style>