<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>
<div id="headercontainer">
    <a href="/" class="linkcontainer">
        <span class="material-symbols-outlined"> home </span>
    </a>
    <a href="/tags" class="linkcontainer">
        <span class="material-symbols-outlined"> feed </span>
    </a>
    <a href="/about" class="linkcontainer">
        <span class="material-symbols-outlined"> info </span>
    </a>
    <a href="mailto:chancellorceti@gmail.com" class="linkcontainer"
        ><span class="material-symbols-outlined"> mail </span></a
    >
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
    .linkcontainer {
        width: 100%;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    span {
        color: #4ecdc4;
        text-align: center;
    }
    @media only screen and (min-width: 600px) {
        span {
            transform: scale(2, 2);
        }
    }
    #headercontainer {
        height: 18vh;
        display: flex;
        flex-direction: row;
        margin: 0 0 0 0;
        background: #000500;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1vh solid #f092dd;
    }
</style>
