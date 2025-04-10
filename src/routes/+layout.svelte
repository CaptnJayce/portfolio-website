<script lang="ts">
	let { children } = $props();
</script>

<style>
    :global {
        body {
            background-color: #232530;
        }

        .title {
            color: #FDF0ED;
        }
    }

    .nav {
        background-color: #FDF0ED;
        display: flex;
        justify-content: center;
    }

    .button {
        background-color: #1A1C23;
        border: none;
        color: #FDF0ED;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
    }
    a {
        text-decoration: none;
        color: #FDF0ED;
    }
</style>

<nav class = "nav">
    <a href="/" class="button">Home</a>
    <a href="/about" class="button">About</a>
    <a href="/projects" class="button">Project</a>
    <a href="/games" class="button">Soon</a>
    <a href="/links" class="button">Links</a>
</nav>

{@render children()}