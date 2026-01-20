<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>
<div id="headercontainer">
    <a href="/" class="linkcontainer">
        <span class="material-symbols-outlined menu-symbol"> home </span>
        <h5 class="header_text">Home</h5>
    </a>
    <a href="/tags" class="linkcontainer">
        <span class="material-symbols-outlined menu-symbol"> feed </span>
        <h5 class="header_text">Search Posts by Tag</h5>
    </a>
    <a href="/about" class="linkcontainer">
        <span class="material-symbols-outlined menu-symbol"> info </span>
        <h5 class="header_text">About Me</h5>
    </a>
    <a href="/projects" class="linkcontainer">
        <span class="material-symbols-outlined menu-symbol"> code </span>
        <h5 class="header_text">My Projects</h5>
    </a>
</div>

<style is:global>
    h2 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        width: 25%;
        font-size: 20px;
        text-align: center;
        color: #4ecdc4;
        vertical-align: middle;
        margin: 0 0 0 0;
    }
    .linkcontainer{
        text-decoration:none;
        color: #4ecdc4;
    }
    .linkcontainer::visited{
        text-decoration:none;
    }
    .linkcontainer {
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items:center;
        flex-direction: column;
        height:18vh;
        text-align:center;
        justify-content: center;
    }
    .header_text{
        font-size: calc(8px + 0.8vh + 0.1vw);
        margin: 0 0 0 0;
        margin-top:2vh;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .menu-symbol {
        color: #4ecdc4;
        font-size: calc(1px+0.1vh+0.1vw);
        text-align: center;
    }
    @media only screen and (min-width: 600px) {
        .menu-symbol {
            transform: scale(2, 2);
        }
    }
    #headercontainer {
        height: 18vh;
        width:100vw;
        display: flex;
        flex-direction: row;
        margin: 0 0 0 0;
        background: #000500;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1vh solid #f092dd;
    }
</style>
