 import React from 'react';
 import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import { ReactComponent as IdeaIcon } from './assets/light-bulb.svg';

import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import HouseIcon from '@material-ui/icons/House';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
 /*
class Data extends React.Component {
    constructor(props){
    super(props)
    this.state= {data:" aha" }
    }
} */

const Data = [
  {
    id: 1,
    about: [  
    {
        id:1,
        icon: <PeopleAltIcon/>,    
        heading: 'Personal service',
        paragraph: 'Suspendisse potenti. Nullam aliquet dignissim imperdiet. Nullam aliquam ac lorem sed accumsan. Etiam a aliquam quam, et vestibulum sapien. Integer ut leo eget odio aliquam egestas vitae et justo. Donec vehicula mi et viverra pharetra. Etiam tincidunt erat sed viverra rutrum.'
    },
    {   
        id: 2,
        icon: <IdeaIcon/>, 
        heading: 'Innovation & Flexibility',
        paragraph: 'Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis.Suspendisse eleifend vel mi et interdum. Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis. '
    },
    {
        id: 3,
        icon: <TimerIcon/>, 
        heading:  'Qucikness',
        paragraph: 'Vestibulum id leo in lectus cursus rutrum eget quis lectus. Quisque rhoncus volutpat tortor a fermentum. Sed elementum volutpat tortor a scelerisque purus, at scelerisquvolutpat tortor a e turpis. Curabitur fringilla semper turpis ac tempus. Nullam arcu dui, egestas a tristique nec, venenatis non odio.'
    },
    {   
        id: 4,
        icon: <SettingsIcon/>, 
        heading:  'Latest Technologies',
        paragraph: 'Curabitur a convallis libero. Suspendisse potenti. Pellentesque eget sem ac justo porttitor vehicula vitae nec odio. Mauris tempus augue ac lectus finibus, in posuere nibh finibus. Sed felis felis, laoreet at eros ac, placerat dapibus erat. Integer mollis porta pellentesque. Morbi consectetur.'

    }

 ] },
    {
    id:2,
    sectionStarters: [
    {
        id:1,        
        heading: 'Specialising in comprehensive adaptations, redecorations & finishing interiors',
        paragraph: 'Suspendisse potenti. Nullam aliquet dignissim imperdiet. Nullam aliquam ac lorem sed accumsan. Etiam a aliquam quam, et vestibulum sapien. Integer ut leo eget odio aliquam egestas vitae et justo. Donec vehicula mi et viverra pharetra. Etiam tincidunt erat sed viverra rutrum.'
    },
    {   
        id: 2,
        
        heading: 'Projects',
        paragraph: 'Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis.Suspendisse eleifend vel mi et interdum. Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis. '
    },
    {
        id: 3,        
        heading:  'Our Process',
        paragraph: 'Vestibulum id leo in lectus cursus rutrum eget quis lectus. Quisque rhoncus volutpat tortor a fermentum. Sed elementum volutpat tortor a scelerisque purus, at scelerisquvolutpat tortor a e turpis.'
    },
    {
        id: 4,        
        heading:  'Happy Clients',
        paragraph: ' Pellentesque sagittis, mauris vitae porta cursus, nunc felis vehicula nulla, in aliquam tellus arcu congue sapien. Nullam ac odio massa.'
    },
    {
        id: 5,        
        heading:  'Our Trusted Customers',
        paragraph: ''
    }

    ]
    },
    {
    id:3,
    houses: [
        
  
        {
            id:1,
            image: 'https://i.imgur.com/aWWfwbn.jpg',
            type: 'house'
        },
        {
            id:2,
            image: 'https://i.imgur.com/3kbVP6w.jpg',
            type: 'house'
        },
        {
            id:3,
            image: 'https://i.imgur.com/pIPC9QD.jpg',
            type: 'apartment'
        },
        {
            id:4,
            image: 'https://i.imgur.com/T2QgYHI.jpg',
            type: 'apartment'
        },
        {
            id:5,
            image: 'https://i.imgur.com/txYIW26.jpg',
            type: 'house'
        },
        {
            id:6,
            image: 'https://i.imgur.com/xr2Fh0j.jpg',
            type: 'house'
        },
        {
            id:7,
            image: 'https://i.imgur.com/Bjf7lw3.jpg',
            type: 'apartment'
        },
        {
            id:8,
            image: 'https://i.imgur.com/SvFGKgI.jpg',
            type: 'apartment',
        },
        {
            id:9,
            image: 'https://i.imgur.com/LADlZkE.jpg',
            type: 'house',            
        },
        {
            id:10,
            image: 'https://i.imgur.com/MqLFCUz.jpg',
            type: 'house',            
        },
        {
            id:11,
            image: 'https://i.imgur.com/OSQRQ7Q.jpg',
            type: 'house',            
        },
        {
            id:12,
            image: 'https://i.imgur.com/Bjf7lw3.jpg',
            type: 'apartment'
        },
        {
            id:13,
            image: 'https://i.imgur.com/SvFGKgI.jpg',
            type: 'apartment',
        },
        {
            id:14,
            image: 'https://i.imgur.com/Bjf7lw3.jpg',
            type: 'apartment'
        },
        {
            id:15,
            image: 'https://i.imgur.com/SvFGKgI.jpg',
            type: 'apartment',
        },

        {
            id:16,
            image: 'https://i.imgur.com/OSQRQ7Q.jpg',
            type: 'house',            
        }

        

    ]
    },

    {
        id: 4,
        process: [  
        {
            id:1,
            icon: <DescriptionIcon/>,    
            heading: 'Plan',
            paragraph: 'Suspendisse potenti. Nullam aliquet dignissim imperdiet. Nullam aliquam ac lorem sed accumsan. Etiam a aliquam quam, et vestibulum sapien. Integer ut leo eget odio aliquam egestas vitae et justo. Donec vehicula mi et viverra pharetra. Etiam tincidunt erat sed viverra rutrum.'
        },
        {   
            id: 2,
            icon: <HouseIcon/>, 
            heading: 'Construction',
            paragraph: 'Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis.Suspendisse eleifend vel mi et interdum. Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis. '
        },
        {
            id: 3,
            icon: <ContactPhoneIcon/>, 
            heading:  'Support',
            paragraph: 'Vestibulum id leo in lectus cursus rutrum eget quis lectus. Quisque rhoncus volutpat tortor a fermentum. Sed elementum volutpat tortor a scelerisque purus, at scelerisquvolutpat tortor a e turpis. Curabitur fringilla semper turpis ac tempus. Nullam arcu dui, egestas a tristique nec, venenatis non odio.'
        }
    
     ] },

     {
         id:5,
        slider: [
            'https://i.imgur.com/2SOptd6.jpg',
            'https://i.imgur.com/wn946ZI.jpg',
            'https://i.imgur.com/zcf49gC.jpg',
            'https://i.imgur.com/vJuTQcO.png',
            'https://i.imgur.com/2SOptd6.jpg',
            'https://i.imgur.com/wn946ZI.jpg',
            'https://i.imgur.com/zcf49gC.jpg',
            'https://i.imgur.com/vJuTQcO.png'
        ]
     }
 
]

export default Data;