<script>
    // import "../app.css";
</script>

<nav class="navbar">
    <div class="logo-container">
        <!-- <p>Logo Here</p> -->
        <a href="/">
            <img src="./assets/svault-logo-trim.png" alt="" class="logohome" />
        </a>
    </div>
    <div class="links-container">
        <ul>
            <!-- <li>Home</li> -->
            <li><a href="https://svault.mintlify.app/">Docs</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="https://github.com/oslabs-beta/Svault">Github</a></li>
        </ul>
    </div>
</nav>

<slot />

<style>
    nav {
        position: sticky;
        top: 0;
        left: 0;
        width: 101%;
        background-color: rgb(245, 245, 245, 0.25);
        color: aliceblue;
        display: flex;
        z-index: 1;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        /* justify-content: space-between; */
        align-items: flex-end;
        /* padding: 1vw; */
    }
    .logo-container {
        /* padding-left: 2vw; */
        /* background-color: rgb(138, 138, 138); */
    }
    .links-container {
        display: flex;
        justify-content: space-evenly;
        /* padding-right: 50px; */
        width: 40vw
        /* background-color: rgb(62, 107, 119); */
    }
    .links-container ul {
        display: flex;
        justify-content: space-evenly;
        /* padding-right: 50px; */
        /* width: 300px; */
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
        margin: 2.5vw;
    }

    .logohome {
        width: 8em;
    }
    @media (max-width: 390) {
    }
</style>
