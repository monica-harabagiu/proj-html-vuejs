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
            link: '#history',
        },
        {
            name: 'Services',
            link: '#services',
        },
        {
            name: 'Yachts',
            link: '#yachts',
        },
        {
            name: 'Reservations',
            link: '#reservations',
        },
        {
            name: 'Blog',
            link: '#blog',
        },
        {
            name: 'Contacts',
            link: '#',
        }
    ],
    menuFooter: [
        {
            name: 'Yachts',
            link: '#yachts',
        },
        {
            name: 'Services',
            link: '#services',
        },
        {
            name: 'Reservations',
            link: '#reservations',
        },
        {
            name: 'Blog',
            link: '#blog',
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
    ],
    arrServices: [
        {
            icon: 'fa-solid fa-anchor',
            title: 'Yacht Rentals',
            text: 'With more than two hundred yacht and boat models on our fleet and both the East and the West coasts covered, we are able to offer you the best yacht chartering options.'
        },
        {
            icon: 'fa-regular fa-user',
            title: 'Management',
            text: 'On par with providing an amazing range of rentals on boats and yachts of all sizes and comfort levels, we will also gladly pick up on providing all kinds of maintenance…'
        },
        {
            icon: 'fa-solid fa-truck',
            title: 'Transportation',
            text: 'Whenever any of our clients wants to try some brand new sailing destination or make a place of residence move to another water area – there comes the issue of logistics.'
        },
        {
            icon: 'fa-regular fa-star',
            title: 'Yacht Repair',
            text: 'With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!'
        },
        {
            icon: 'fa-regular fa-thumbs-up',
            title: 'Yacht Upgrades',
            text: 'As far as any personally-owned vehicles are concerned, whether we are talking about cars with four wheels, bikes with two wheels or yachts with no wheels, owners do…'
        },
        {
            icon: 'fa-solid fa-briefcase',
            title: 'Corporate Events',
            text: 'When it comes to organizing a corporate yacht charter of a Fortune 500 scale for a big crew of people – we will be able to make it flawless.We will exceed your expectations!'
        }
    ],
    arrYachts: [
        {
            name: 'Express',
            img: 'services-1'
        },
        {
            name: 'Express',
            img: 'services1'
        },
        {
            name: 'Express',
            img: 'services2'
        },
        {
            name: 'Express',
            img: 'services3'
        },
        {
            name: 'Express',
            img: 'services4'
        },
        {
            name: 'Express',
            img: 'services5'
        },
        {
            name: 'Express',
            img: 'services6'
        },
        {
            name: 'Express',
            img: 'services7'
        }
    ],
    blogArticles: [
        {
            image: 'post1-1-570x450.jpg',
            title: 'Is Greece a Good Choice for Yacht Sailing?',
            date: 'December 16, 2020'
        },
        {
            image: 'post2-1-570x450.jpg',
            title: 'Seattle Yachts and Northwest Yachts Announce Merger',
            date: 'December 16, 2020'
        },
        {
            image: 'post3-1-570x450.jpg',
            title: 'Video: Superyacht ‘Project Jupiter’ Launched By Lurssen',
            date: 'December 16, 2020'
        }
    ],
    testimonials: [
        {
            image: 'person0.jpg',
            quote: `As a yacht owner, after either of my regular maintenance checkups, I oftentimes find it necessary to do this or that kind of a repair. The thing is that I don’t always have enough time (or sometimes the skill), to do all of the repairs all by myself…`,
            name: 'Albert Winning'
        },
        {
            image: 'person01.jpg',
            quote: `As a yacht owner, after either of my regular maintenance checkups, I oftentimes find it necessary to do this or that kind of a repair. The thing is that I don’t always have enough time (or sometimes the skill), to do all of the repairs all by myself…`,
            name: 'Albert Winning'
        },
        {
            image: 'person03.jpg',
            quote: `As a yacht owner, after either of my regular maintenance checkups, I oftentimes find it necessary to do this or that kind of a repair. The thing is that I don’t always have enough time (or sometimes the skill), to do all of the repairs all by myself…`,
            name: 'Albert Winning'
        }
    ],
    searchPopup: false
})