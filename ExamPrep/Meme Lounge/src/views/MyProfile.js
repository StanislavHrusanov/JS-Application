import { getUserMemes } from "../api/data.js";
import { userProfileTeplate } from "../templates/userProfileTemplate.js";
import { getUser } from "../util.js";

export async function myProfilePage(ctx) {

    const user = getUser();
    let userMemes = [];

    if (user) {
        userMemes = await getUserMemes(user._id);
    }

    ctx.render(userProfileTeplate(user, userMemes));
}