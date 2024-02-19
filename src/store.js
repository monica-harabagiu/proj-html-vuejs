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
    ]
})