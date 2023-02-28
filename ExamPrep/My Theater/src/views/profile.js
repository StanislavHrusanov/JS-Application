import { until } from "../../node_modules/lit-html/directives/until.js";
import { getProfileTheaters } from "../api/data.js";
import { profileTemplate } from "../templates/profileTemplate.js";
import { getUser } from "../util.js";

export function profilePage(ctx) {
    const user = getUser();

    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const profileTheaters = await getProfileTheaters(user._id);

        return profileTemplate(user, profileTheaters);
    }
}