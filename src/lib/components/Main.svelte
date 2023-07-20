<script></script>

<body>
  <div class="main-container">
    <div class="left-container">
      <img src="src/static/assets/form-demo.png" alt="" />
      <!-- <div class="auth-splash">
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
      </div> -->
    </div>
    <div class="right-container">
      <div class="content">
        <img
          class="logobody"
          src="src/static/assets/svault-logo-trim.png"
          alt=""
        />
        <h1>Authentication for SvelteKit</h1>
        <!-- <br> -->
        <h3>
          Svault is an authentication library for easily deploying
          authentication into your SvelteKit application. Svault supports both
          native username/password authentication as well as OAuth.
        </h3>
      </div>
    </div>
  </div>
  <section id="team">
    <h2>The Svault Team</h2>
    <div class="cardcontainer">
      <div class="card">
        <img class="profile" src="src/static/assets/dp.jpeg" alt="" />
        <h2>Daniel Park</h2>
        <a href="https://github.com/parkdaniel731">
          <img
            class="teamlogo"
            src="src/static/assets/github-mark-white.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/danielpark137/">
          <img class="teamlogo" src="src/static/assets/linkedin.svg" alt="" />
        </a>
      </div>
      <div class="card">
        <img class="profile" src="src/static/assets/fb.jpg" alt="" />
        <h2>Franki Biswas</h2>
        <a href="https://github.com/fpena213">
          <img
            class="teamlogo"
            src="src/static/assets/github-mark-white.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/franki-biswas/">
          <img class="teamlogo" src="src/static/assets/linkedin.svg" alt="" />
        </a>
      </div>
      <div class="card">
        <img class="profile" src="src/static/assets/mb.jpeg" alt="" />
        <h2>Michael Buenrostro</h2>
        <a href="https://github.com/mbuenrostro21">
          <img
            class="teamlogo"
            src="src/static/assets/github-mark-white.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/michael-buenrostro/">
          <img class="teamlogo" src="src/static/assets/linkedin.svg" alt="" />
        </a>
      </div>
      <div class="card">
        <img class="profile" src="src/static/assets/mc.jpg" alt="" />
        <h2>Michelle Conroy</h2>
        <a href="https://github.com/missmshel">
          <img
            class="teamlogo"
            src="src/static/assets/github-mark-white.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/michelleaconroy/">
          <img class="teamlogo" src="src/static/assets/linkedin.svg" alt="" />
        </a>
      </div>
      <div class="card">
        <img class="profile" src="src/static/assets/tb.jpg" alt="" />
        <h2>Tristan Bott</h2>
        <a href="https://github.com/trisbt">
          <img
            class="teamlogo"
            src="src/static/assets/github-mark-white.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/tristan-bott/">
          <img class="teamlogo" src="src/static/assets/linkedin.svg" alt="" />
        </a>
      </div>
    </div>
  </section>
</body>

<style>
  body {
    /* padding-top: 70px; */
    /* background: linear-gradient(to bottom, #17152c, #302b63, #7972ab); */
    background: linear-gradient(45deg, #020108, #302b63, rgb(92, 151, 167));
    background-size: 400% 400%;
    animation: gradientAnimation 10s ease infinite; /* Change the animation duration as needed */
    margin: 0;
    padding: 0;
  }
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .main-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 70px;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    margin-bottom: 100px;
  }
  .left-container {
    margin-bottom: 100px;
  }
  .right-container {
    width: 370px;
    display: flex;
    justify-content: end;
  }
  #team {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 50vh;
    margin: none;
    font-family: "Jost", sans-serif;
    color: rgb(233, 239, 244);
  }
  .cardcontainer {
    display: flex;
    color: rgb(233, 239, 244);
    font-family: "Jost", sans-serif;
    flex-wrap: wrap;
  }
  .card {
    text-align: center;
    width: 200px;
    padding: 24px;
    margin: 12px;
    box-shadow: 1px 1px 10px #9ab4fb70;
    border-radius: 5px;
    font-size: 14px;
  }
  .teamlogo {
    width: 30px;
  }
  .profile {
    width: 150px;
    height: auto;
  }
  .content {
    color: rgb(233, 239, 244);
    text-align: center;
    height: 35em;
    width: 25em;
    display: flex;
    flex-direction: column;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    /* align-content: center; */
    /* justify-content: center; */
  }
  h3 {
    line-height: 1.8;
  }
  .logobody {
    filter: grayscale(10%);
  }
  @media (max-width: 950px) {
    .main-container {
      flex-direction: column; /* Set the flex-direction to column for smaller screens */
      margin-bottom: 50%;
    }
    .cardcontainer{

    }
  }
</style>
