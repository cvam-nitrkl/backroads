import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Backroads are less safe than other roads, with much higher fatality rates.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Backroads are less safe than other roads, with much higher fatality rates.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Backroads are less safe than other roads, with much higher fatality rates.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Backroads tend to have narrow lanes, limited or non-existent shoulders, inconsistent pavement with gravel patches, sharp curves, steep slopes, and poor visibility. `,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Backroads tend to have narrow lanes, limited or non-existent shoulders, inconsistent pavement with gravel patches, sharp curves, steep slopes, and poor visibility. `,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Backroads tend to have narrow lanes, limited or non-existent shoulders, inconsistent pavement with gravel patches, sharp curves, steep slopes, and poor visibility. `,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Backroads tend to have narrow lanes, limited or non-existent shoulders, inconsistent pavement with gravel patches, sharp curves, steep slopes, and poor visibility. `,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
];
