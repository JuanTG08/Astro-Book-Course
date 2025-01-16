import { SCORE_API_ENDPOINT } from "astro:env/client";
import { scoreElement } from "./[id].astro.0.mts";

fetch(SCORE_API_ENDPOINT)
        .then((res) => res.text)
        .then((scoreValue) => {
                if (scoreElement) {
                        scoreElement.innerHTML = ``;
                }
        });
