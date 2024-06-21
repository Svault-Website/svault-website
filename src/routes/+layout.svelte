<script>
  import "../app.css";
</script>

<nav
  class="flex justify-between fixed w-full bg-[#d9d9d9] border-2 border-solid border-b-neutral-400"
>
  <div class="w-32 h-24 ml-5 iphone:ml-1 content-center">
    <!-- <p>Logo Here</p> -->
    <a href="/">
      <img
        src="src/static/assets/svault-logo-trim.png"
        alt=""
        class="logohome"
      />
    </a>
  </div>
  <div class="content-center">
    <ul class="flex justify-evenly">
      <!-- <li>Home</li> -->
      <li
        class="flex justify-center items-center w-20 h-12 border-2 border-solid border-[#C53000] rounded-3xl bg-[#C53000] text-lg text-white font-bold mr-3 iphone:w-16 iphone:text-base"
      >
        <a href="https://svault.mintlify.app/">Docs</a>
      </li>
      <li
        class="flex justify-center items-center w-20 h-12 border-2 border-solid border-[#C53000] rounded-3xl bg-[#C53000] text-lg text-white font-bold mr-3 iphone:w-16 iphone:text-base"
      >
        <a href="#team">Team</a>
      </li>
      <li
        class="flex justify-center items-center w-20 h-12 border-2 border-solid border-[#C53000] rounded-3xl bg-[#C53000] text-lg text-white font-bold iphone:w-16 iphone:text-base"
      >
        <a href="https://github.com/oslabs-beta/Svault">Github</a>
      </li>
    </ul>
  </div>
</nav>

<slot />

<!--
OLD STYLING FILES
-->
<!-- nav {
  /* width: 100%; */
  position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: transparent;
color: aliceblue;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
} -->

<!-- .logo-container {
  padding-left: 20px;
  /* background-color: rgb(138, 138, 138); */
}
.links-container {
  display: flex;
  justify-content: space-evenly;
  /* padding-right: 50px; */
  width: 300px;
  /* background-color: rgb(62, 107, 119); */
}
.links-container ul {
  display: flex;
  justify-content: space-evenly;
  /* padding-right: 50px; */
  width: 300px;
  /* background-color: rgb(62, 107, 119); */
}
ul {
  list-style: none;
}
li {
  display: inline-block;
}
a:link,
a:visited,
a {
  text-decoration: none;
  font-size: larger;
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: aliceblue;
}

.logohome {
  width: 8em;
} -->

<style lang="postcss">
  /* .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aqua;
    } */
</style>
