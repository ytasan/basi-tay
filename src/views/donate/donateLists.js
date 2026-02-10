export default {
    donateList(vue) {
        return [
            {
                name: vue.$t('donate.supportUs'),
                ico: "bi-heart-fill", color: "#d94242",
                linktype: "external",
                link: "https://basi-tay.github.io/basi-tay/support-us"
            },
            {name: vue.$t('donate.shareWithFriends'), ico: "bi-share-fill", color: "#4297d9", linktype: "tagId", link: 'shareTab'},
            {name: vue.$t('donate.rate'), ico: "bi-star-half", color: "#d0b114", linktype: "external", link: 'https://alternativeto.net/software/basi-tay/about/'},
        ]
    },
    shareList(vue) {
        return [
            {
                name: "Twitter",
                ico: "bi-twitter",
                color: "#3eafda",
                linktype: "external",
                link: "https://twitter.com/intent/tweet?text=".concat('',vue.$t('donate.shareMessage'),"  https://basi-tay.github.io/basi-tay")
            },
            {
                name: "Facebook",
                ico: "bi-facebook",
                color: "#4b6cad",
                linktype: "external",
                link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbasi-tay.github.io%2Fbasi-tay%2F"
            },
            {
                name: "Reddit",
                ico: "bi-reddit",
                color: "#ed4f1c",
                linktype: "external",
                link: "https://www.reddit.com/submit?title=".concat("",vue.$t('donate.shareMessage'),"&url=https%3A%2F%2Fbasi-tay.github.io%2Fbasi-tay%2F")
            }
        ]
    }
}