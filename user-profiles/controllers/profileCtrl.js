var profiles = [
    {
        name: 'Preston McNeil',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

module.exports = {};

exports.getProfiles = function (req, res, next) {
    var currentUser = req.session.currentUser;
    var userProfiles = [];
    for (var i = 0; i < currentUser.friends.length; i++) {
        var currentFriend = currentUser.friends[i];
        for (var j = 0; j < profiles.length; j++) {
            var currentProfile = profiles[j];
            if (currentFriend === currentProfile.name) {
                userProfiles.push(currentProfile);
            }
        }
    }
    res.json({
        currentUser: currentUser,
        friends: userProfiles
    })
};