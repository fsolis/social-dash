export function formatFollowers(followers) {
    return followers > 10000 ? followers.toString().substring(0, 2) + "k" : followers;
}