import { reactive } from "vue";

export const store = reactive({
    socialMenuIcons: [
        {
            name: 'Facebook',
            icon: 'fa-facebook-f'
        },
        {
            name: 'Twitter',
            icon: 'fa-twitter'
        },
        {
            name: 'Instagram',
            icon: 'fa-instagram'
        }
    ],
    menuHeader: [
        {
            name: 'About',
            link: '#',
        },
        {
            name: 'Services',
            link: '#',
        },
        {
            name: 'Yachts',
            link: '#',
        },
        {
            name: 'Reservations',
            link: '#',
        },
        {
            name: 'Blog',
            link: '#',
        },
        {
            name: 'Contacts',
            link: '#',
        }
    ],
    menuFooter: [
        {
            name: 'Yachts',
            link: '#',
        },
        {
            name: 'Services',
            link: '#',
        },
        {
            name: 'Reservations',
            link: '#',
        },
        {
            name: 'Blog',
            link: '#',
        },
        {
            name: 'Privacy Policy',
            link: '#',
        },
        {
            name: 'Terms of Use',
            link: '#',
        }
    ],
    heroCarousel: [
        {
            img: './src/assets/img/bg1-1.jpg',
            title: 'QuickWind',
            description: `all kinds of boats, yacht charters and sailing destinations for hobbyist yachtsmen and
            women!`,
        },
        {
            img: './src/assets/img/bg2.jpg',
            title: 'QuickWind',
            description: `all kinds of boats, yacht charters and sailing destinations for hobbyist yachtsmen and
            women!`,
        },
        {
            img: './src/assets/img/bg3.jpg',
            title: 'QuickWind',
            description: `all kinds of boats, yacht charters and sailing destinations for hobbyist yachtsmen and
            women!`,
        }
    ]
})