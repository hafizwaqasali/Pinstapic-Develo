import { Icons } from "~assets";

//  for categories Images 
const category_Images_data = [
    { title: "PINSTAR", img: Icons.pinstarIcon },
    { title: "PINSTYLIST", img: Icons.pinstylistIcon },
    { title: "PINSTORE", img: Icons.pinstoreIcon },
];

//  for pinstylist type of stylist dropDown

const type_of_stylist = [{
    label: "Hair Stylist",
    isSelected: false,
},
{
    label: "Make up Artist",
    isSelected: false,
},
{
    label: "Stylist",
    isSelected: false,
},
{
    label: "Photographer",
    isSelected: false,
},
{
    label: "Designer",
    isSelected: false,
},
{
    label: "Nail Artist",
    isSelected: false,
},
]
const type_of_pinstar = [{
    label: "Classic",
    isSelected: false,
},
{
    label: "Designer",
    isSelected: false,
},
{
    label: "Sporty",
    isSelected: false,
},
{
    label: "Retro",
    isSelected: false,
},
{
    label: "Bohemian",
    isSelected: false,
},
{
    label: "Vintage",
    isSelected: false,
},
{
    label: "Sexy",
    isSelected: false,
},
{
    label: "Urban",
    isSelected: false,
},
{
    label: "Casual",
    isSelected: false,
},
{
    label: "Trendy",
    isSelected: false,
},
{
    label: "Gothic",
    isSelected: false,
},
{
    label: "Other",
    isSelected: false,
},
]
const type_of_pinstore = [{
    label: "Clothes",
    isSelected: false,
},
{
    label: "Shoes",
    isSelected: false,
},
{
    label: "Accessories",
    isSelected: false,
},
{
    label: "Cosmetic",
    isSelected: false,
},
{
    label: "Women",
    isSelected: false,
},
{
    label: "Men",
    isSelected: false,
},
{
    label: "Unisex",
    isSelected: false,
},
{
    label: "Kids",
    isSelected: false,
},
{
    label: "Babies",
    isSelected: false,
},
{
    label: "Pets",
    isSelected: false,
},
{
    label: "Other",
    isSelected: false,
},
]

// for profile data component

const profileData = {
    name: "MANGO SCAVO",
    location: "Newyork City. USA",
    description: "I love Fashion My style is very colorful & trendy.",
    type: "pinstar",
    noOfFollowers: 481,
    noOfFollowing: 264,
    noOfFavourites: 40,
}


export default function useDummyData() {
    return {
        categoryImages: category_Images_data,
        typeofstylist: type_of_stylist,
        typeofpinstar: type_of_pinstar,
        typeofpinstore: type_of_pinstore,
        profileData: profileData
    }
}