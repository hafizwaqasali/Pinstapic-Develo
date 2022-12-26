import { Icons } from "~assets";

//  for categories Images 
const category_Images_data = [
    { title: "PINSTAR", img: Icons.pinstarIcon },
    { title: "PINSTYLIST", img: Icons.pinstylistIcon },
    { title: "PINSTORE", img: Icons.pinstoreIcon },
];



export default function useDummyData() {
    return {
        categoryImages: category_Images_data
    }
}