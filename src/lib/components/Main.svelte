<script></script>

<div class="main-container">
  <div class="left-container">
    <div class="auth-splash">
      <div class="native-container">
        <div class="input-container">
          <p>username</p>
          <p>password</p>
          <div class="native-buttons">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div class="oauth-buttons">
        <button>Github</button>
        <button>Google</button>
        <button>Discord</button>
      </div>
    </div>
  </div>
  <div class="right-container">
    <div class="content">
      <h1>Authentication</h1>
      <h2>for SvelteKit</h2>
    </div>
  </div>
</div>

<style>
  .main-container {
    height: 75vh;
    display: flex;
    justify-content: space-around;
  }
  
  .native-container {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>