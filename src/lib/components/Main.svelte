<script>
  function copyToClipboard() {
    const codeElement = document.getElementById("copy-svault");
    const text = codeElement.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  }
</script>

<body class="w-screen">
  <div class="bg-[#22252B] h-screen w-screen grid grid-cols-9 grid-rows-12">
    <div
      class="flex justify-center items-center col-start-4 col-span-3 row-start-3 row-span-2 iphone:col-start-3 iphone:col-span-5"
    >
      <img
        class="h-32 iphone:h-20 tablet:h-24"
        src="src/static/assets/svault-logo-trim.png"
        alt=""
      />
    </div>
    <div
      class="flex justify-center items-start col-start-2 col-span-7 row-start-5"
    >
      <h1
        class="text-[50px] iphone:text-[19px] tablet:text-[38px] medium:text-[38px] text-white font-bold font-orb"
      >
        Authentication for SvelteKit
      </h1>
    </div>
    <!-- <br> -->
    <div
      class="flex justify-center items-center mt-3 row-start-6 col-start-3 col-span-5 row-span-3 border-4 border-solid border-[#C53000] rounded-full iphone:col-start-2 iphone:col-span-7"
    >
      <h3
        class="text-center px-7 iphone:text-sm text-white text-4xl medium:text-2xl tablet:text-xl"
      >
        Svault is an authentication library for easily deploying authentication
        into your SvelteKit application. Svault supports both native
        username/password authentication as well as OAuth 2.0.
      </h3>
    </div>
    <div
      class="flex items-center justify-center pt-7 row-start-9 col-start-4 col-span-3"
    >
      <span
        class="bg-[#c53100ae] flex gap-5 items-center justify-between py-3 px-5 rounded-full"
      >
        <code
          id="copy-svault"
          class="text-white text-left iphone:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
        >
          npm install svault
        </code>
        <button
          class="text-white hover:text-slate-800"
          on:click={() => copyToClipboard()}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</body>

<!--
OLD STYLING FILES
-->
<!-- body {
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
} -->

<style>
  h3 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
