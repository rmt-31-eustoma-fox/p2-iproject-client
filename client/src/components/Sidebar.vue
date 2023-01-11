<script>
import { mapActions } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { mainFunction } from '../stores/main';
export default {
    methods: {
        ...mapActions(mainFunction, ['logout'])
    }
}
</script>
<template>
    <div class="d-flex justify-content-center col-2" style="">
        <nav class="text-white row container-fluid ">
            <ul class="navbar-nav mr-auto d-flex">
                <li class="p-4">
                    <router-link to="/" class="link text-white">
                        <span class="lg:block"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAuUlEQVRYhe3W0Q2CMBRGYUZgBEfoCI7iSI7gCI7ACG6iGxxfSkRyW0r5b3i5N+lb0/MlEOgwxHQOcAfSWfEH8MlLiwCu/M9UiCfgJkfUAEZcjzAAz0Ic4C1HrAAvYCzEcUEsAC1xPSID9sS1CODSEZcjeuIaxMH4MYQo3ocQx/chnOJtCOf4NoLfNz05xeeZlj3rMaz/AS6A2ksYgOpFxGtfAAKgOLh1AhCATcCYD5+XeXkw9rUu87wvKiRmOIYzk1AAAAAASUVORK5CYII="
                                alt="Home"> HOME</span>
                    </router-link>
                </li>
                <li class="p-4">
                    <router-link to="/deck" class="link text-white">
                        <span class="lg:block"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABdklEQVRYhe2X3bGDIBBGU4IlWIIlWIIlWIIdpARKoARLoARLSAmWcO7D/QgEEePPQx7cGWZE2G8Piw7L4/GLBlSlMaAFBsAAFngCPVBfBdCmYgpsgJmyjUB7FmAAXNJPA8+Ai7IwJuPmDID1IhnhSUDZbQI6bQnxIvYCpEH9ilcDr+gMhyCU2tSG3UJBr9maUClto55zGdjMQqThojYCvQdR36SObRSk0d5PalbCjeCqHIDGS+aAGnip38XOXTSxiwPx+c9PC+f8IkrmAfrYuf/S+Q15AsDbDXAD3AA3wA3wWwD+MHpdADDzf+Q+9S4+RYctgFkOE2VbAEjHB2sIJ6iTntHYUoNQ8TpU0QrKZZphvSDJFa/eJs1xylC5tNucUPYd1gD2CtmPvfrOpyX/Le0HkKCTgGGluCRUTum34wglvj0EoAA2Ep0JdaL/bnKXlnfxqjnHLyoSaciX62lgy/JaV7Py5xwF6Qm3Jqvnno1L7SUAV9sfBabcrB3ubk0AAAAASUVORK5CYII="
                                alt="Deck"> DECK</span>
                    </router-link>
                </li>
                <li class="p-4">
                    <router-link to="/profile" class="link text-white">
                        <span class="lg:block"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABi0lEQVRYhdWWa7GEMAyFVwISkIAEJKwEJOCgEpCABCQgAQlIQMK3P0hnS2hLgS53bmYYZmh6cpKQx+v13wWoAQM0f2G8ABa+8iwJoGEr/dMECkWgyQleAR0wAPWBnpF3kZNA73i23MSqgfLspUmFt7po3HWkPXOxdS6OF42XyolzkZS81ndyC8wOgeEqjg/4LWkaYvkVJ3p5gnpXjG9Cmw08kcDAXp5rQp4KsXKvD7B2tk5C2kX0xgCBS6XqAuvcNgE9PQOslHcJtArQRHRnpXu/xCQFFnj2ecRaVqF/wEuYtSHZuXKcJgKDRb4vAeNBEuSYKxKdkOdaKnU3fa74PJfvJtE4wBy5O8WMV3z/gQGpAtJCr8XI3drBeIcctAR0FcAavtTQaxkdDCNPuFpIy3PsfGFfnvq8CRJwiNhJp6Vjvwfq8ypguOVsq2bdBXoBGS1AxMtGzm2nnC4Z9hCpcJrSEQEnivmWVAdYr1mbFGQ36CFgIgRubc8pxmuO+8HvFhPxvkt4yp+RyC0fnloS7BniYBgAAAAASUVORK5CYII="
                                alt="Profile"> PROFILE</span>
                    </router-link>

                </li>
                <li class="p-4">
                    <span class="lg:block"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABpElEQVRYhc2WbRGDMAyGJ2ESkICESkACEnBQCUhAAhIqAQmVgIR3P5ZuIaQftNxu7x1/cjR5mo+2j8e/C8ATgAGwALDMbgBYABOAjv1rAcwAzF3BVxw1UNCd2XYGxGXzUdIAk3A4A+hE8A8ErXHC3rcAeOlMgZLZGYRtbQE47BB6Sbgs/XPKzC0AZHMJgFAirq0FYBPOOgoS04h3M3I1lUDW2yo7DAolWoTdtAAYEWAlAJkZkK0XADuAsSaw3MkOff41TQTC5a4CjMKBRXz+NWm9Ml0BcGJxj/Mpl9KM2nGEcpCQM38BIIzsIuymBEB2vlbTEmlZy98N0C8f2RMlMqg5lnGuf4f0+R+TlrkiAK8ALBUAFudG9CUAB0XKUiJtEv4cQFmw/xSAghkcn1cO33tAdrWmga1xZLPBbxaAgagjlIseydhQHJgBqBcK0veBjwCU75wByPptZNeu4tw/3R0AJU+yAOCbAciRBpCaiFCmA0BVcHIk6/1E+k24KOBNALKWOYC62U8AOOEs9zC5/VluCSJ8Pd4Hyhb5RgLga+ZqgF/oBR7cy2iaOYq8AAAAAElFTkSuQmCC">
                        ABOUT US</span>
                </li>
                <li class="p-4">
                    <span @click="logout" class="lg:block"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABiElEQVRYheWXW5GFMAxArwQkIAEJSLgSkIADJCABCUioBCQgAQlnP9rO5oa+eO3OzmaGD5g8TpM0La/XXxWgBd7uaX4DYOZbzP8AACqf7hAA0D4VuAZGYAOGBMDg3kegviNwJQJ7KQHwMl0NPrGXPgHQBfSP94cLPmtHiO0WAnDfm4DtchRAOxgyOrtVsi9HWSawgyUZvATA6fTK17sEwAiDMaFXNAewTexlzQWXq9+A6gaACliFbpcCkE6DqT8K4HTl7thSpFLqAqeTe3Kwed/Y062sVidElaENKcg03X648NncfQ7g/AiNA4w5ALkD5gcAZNN2IYUm26n3AewHUlGnng9e8Xmihn1nG+U8gCxv/GBSjbjdkYXA6uMzg/3YvLwdVe2T490b6EtFdyG49pWcmNLQKMPoqRixD13lTHb1ysGiIBYKfkCwI13brsXBMxC4mvYuUO2exn0zatUevD4UXIGMnJf58MojEA3hG3JMDE/8L2LL4lNtsLVdXZpn7EX0539Ur8gXnNzhOnfNWOgAAAAASUVORK5CYII="
                            class="h-7 w-7"> LOGOUT</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
li {
    cursor: pointer;
}

li :hover {
    border: 100px solid rgba(red, green, blue, 0.3);
    background-color: blue;
    opacity: 0.3;
    color: white;
}

.link {
    text-decoration: none;
}
</style>