<script>
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a href="">
            <img alt="logo" class="logo" src="../assets/F1_logo_PNG1.png" width="175" height="50" style="vertical-align:middle;margin:0px 0px">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="'/'" style="margin-right: 10px;">Home</RouterLink>
                    <RouterLink :to="'/drivers'" style="margin-right: 10px;">Drivers</RouterLink>
                    <RouterLink :to="'/constructors'" style="margin-right: 10px;">Constructors</RouterLink>
                    <RouterLink :to="'/map'" style="margin-right: 10px;">Map View</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>