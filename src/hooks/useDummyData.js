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



export default function useDummyData() {
    return {
        categoryImages: category_Images_data,
        typeofstylist: type_of_stylist,
    }
}