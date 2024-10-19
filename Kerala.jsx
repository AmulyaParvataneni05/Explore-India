import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Kerala() {
  return(
    <div>
        <a href='https://www.keralatourism.org/'><h1 className='heading'>Kerala</h1></a>
        <h2 className='capital'>Capital: Thiruvananthapuram</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WA1672jeOEKmWEEY6OBzipH5Zq1R2OtDoQ&s"
            title="Fort Kochi"
            location="Kochi"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-kochi-india?search=200-74258;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Fort+Kochi,+Kochi,+Kerala/@9.9606009,76.2396009,16z/data=!3m1!4b1!4m6!3m5!1s0x3b086d314f0b178d:0xc545233f390db43b!8m2!3d9.9657787!4d76.2421147!16zL20vMDhrZHp4?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e9/52/a2/sunset-at-tata-tea-gardens.jpg?w=1200&h=-1&s=1"
            title="Tea Gardens"
            location="Munnar"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-munnar-india?search=200-345103;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Tea+Gardens/@10.7261706,76.011401,9z/data=!4m10!1m2!2m1!1sTea+Gardens!3m6!1s0x3b07990510c1a091:0xd1da0241528ea45b!8m2!3d10.0578407!4d77.0660813!15sCgtUZWEgR2FyZGVuc1oNIgt0ZWEgZ2FyZGVuc5IBBGZhcm2aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUldhM0JFYUhCUlJSQULgAQA!16s%2Fg%2F11d_8gvd6_?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://static.toiimg.com/photo/msid-83336319,width-96,height-65.cms"
            title="Backwaters"
            location="Alleppey"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-thiruvananthapuram-india?search=200-428004;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/The+Great+Backwaters/@10.7247828,76.0086417,9z/data=!4m10!1m2!2m1!1sBackwaters!3m6!1s0x3b08840ecab707bf:0x8ed1609c40c6ab93!8m2!3d9.5259641!4d76.3579037!15sCgpCYWNrd2F0ZXJzWgwiCmJhY2t3YXRlcnOSAQ9uYXR1cmVfcHJlc2VydmXgAQA!16s%2Fg%2F11c54c62r_?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBSymXJ9uPJQwl6w0d2aVuMkYjzb39czLng&s"
            title="Vembanad Lake"
            location="Kumarakom"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-kumarakom-india?search=200-341431;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Vembanad+Lake/@9.6716035,76.2265831,11z/data=!3m1!4b1!4m6!3m5!1s0x3b087e25c546345d:0x3c5cd59d4c4d745c!8m2!3d9.5967665!4d76.3984537!16zL20vMDVyNHBq?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kathakali_BNC.jpg/220px-Kathakali_BNC.jpg"
            title="Kathakali"
            location="A classical dance known for its elaborate costumes, makeup, and expressive storytelling."
            locateUrl='https://www.youtube.com/watch?v=GBbcYtkqVKQ'
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIxK-fKAUNk52Vvw3wjkjA2KVX8D951uW-Q&s"
            title="Set Mundus"
            location="Women wear the saree in a traditional style called 'set mundu,' while men wear white or cream mundus with colorful borders."
            />
            <Hover1
            imageSrc="https://jeevaniyam.in/wp-content/uploads/2023/09/onam.1.1800191.jpg"
            title="Onam"
            location="A significant harvest festival marked by feasting, cultural events, and the elaborate Onam Sadhya, a traditional vegetarian meal served on banana leaves."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6Bh0P7_NAUEprE1hmvyb-u4nkp_NyzuO4Q&s"
            title="Harmonium"
            location="The harmonium is a popular keyboard instrument in Indian music, known for its rich sound and portability, often used in classical and folk performances."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://i.pinimg.com/564x/59/d0/fb/59d0fb5bbe00dffd857326cd4c574c83.jpg"
            title="Appam with Stew"
            location="A soft, fluffy rice pancake served with mildly spiced coconut-based stew, usually with vegetables or meat."
            />
            <Hover1
            imageSrc="https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1567754084680-PYI15OGCX57BF357MMKN/7969908980_a992ab9bea_b.jpg?format=1500w"
            title="Sadya"
            location="A traditional vegetarian feast served on a banana leaf, featuring various curries, rice, and pickles."
            />
            <Hover1
            imageSrc="https://premasculinary.com/wp-content/uploads/2015/06/puttu-kadala-curry.jpg"
            title="Puttu and Kadala Curry"
            location="Steamed rice cake cylinders served with black chickpea curry, a breakfast favorite."
            />
            <Hover1
            imageSrc="https://www.chefkunalkapur.com/wp-content/uploads/2021/05/Malabar-Paratha-1300x867.jpg?v=1620281813"
            title="Malabar Parotta"
            location="A flaky, layered flatbread served with spicy curries, popular in the Malabar region."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VohgP8LdXmnInTMEI1TbVXqfuyPiVt903A&s"
            title="Periyar National Park"
            locateUrl ="https://www.google.com/maps/place/Periyar+National+Park/@9.5332924,77.1565085,13z/data=!4m10!1m2!2m1!1sPeriyar+National+Park!3m6!1s0x3b06f7f28a088c89:0x1f8406b9a08dc67b!8m2!3d9.4631378!4d77.2286518!15sChVQZXJpeWFyIE5hdGlvbmFsIFBhcmtaFyIVcGVyaXlhciBuYXRpb25hbCBwYXJrkgENbmF0aW9uYWxfcGFya-ABAA!16zL20vMDh4eGp6?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://2.bp.blogspot.com/-nnUskIASTmY/WwzgBMNmdAI/AAAAAAAAGMA/K8Gv-dXu5-4dGpJ00qOG9Fhe1a5Em-zvgCLcBGAs/s1600/Silent-Valley-National-Park-cover.jpg"
            title="Silent Valley National Park"
            locateUrl="https://www.google.com/maps/place/Silent+Valley+National+Park/@11.0694222,76.4254221,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba62af225691cfd:0xf9e2a321ac787017!8m2!3d11.0694222!4d76.4280024!16zL20vMDYycjM3?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmPb-F90ECucg7C6kibL5hMeDzVgVVwLcrA&s"
            title="Wayanad Wildlife Sanctuary"
            locateUrl= "https://www.google.com/maps/place/Wayanad+Wildlife+Sanctuary/@11.6716011,76.349602,15z/data=!4m10!1m2!2m1!1sWayanad+Wildlife+Sanctuary!3m6!1s0x3ba5c3361c6e0a53:0x90e2cb76f7e13df7!8m2!3d11.6716011!4d76.3686564!15sChpXYXlhbmFkIFdpbGRsaWZlIFNhbmN0dWFyeVocIhp3YXlhbmFkIHdpbGRsaWZlIHNhbmN0dWFyeZIBGHdpbGRsaWZlX2FuZF9zYWZhcmlfcGFya-ABAA!16zL20vMDhqZDl5?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXaVKdshn3J3YRM2jsBRjMx2lzc0W9j_PMg&s"
            title="Thattekad Bird Sanctuary"
            locateUrl="https://www.google.com/maps/place/Thattekad+Bird+Sanctuary/@10.1298125,76.6844822,17z/data=!3m1!4b1!4m6!3m5!1s0x3b07efad2c005063:0x9323fcfb2d6e07de!8m2!3d10.1298125!4d76.6870625!16zL20vMGRmZzlk?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqfaZ6cBEJ1T8PmpQoWJfC9-6tsMVv_zNNQ&s"
            title="Lulu Mall"
            locateUrl="https://www.google.com/maps/place/LuLu+International+Shopping+Mall/@10.0271483,76.3056053,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080dafbed183bf:0x5951f316ba13a37e!8m2!3d10.0271483!4d76.3081856!16s%2Fm%2F065_mhh?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Magnum_w_452_h_285_c_fill_g_auto_q_auto:good_f_jpg/v1464170505/Kochi_Shopping_MG_Road.jpg"
            title="MG Road"
            locateUrl="https://www.google.com/maps/place/Mahatma+Gandhi+Rd,+Kochi,+Kerala/@9.964817,76.2844842,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080d5ac142675f:0x496d3b3a330d1713!8m2!3d9.964817!4d76.2870645!16s%2Fm%2F0cny67r?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcg55oAXpelTb_RopWvcBiOeiLLyHL7HUkw&s"
            title="Broadway"
            locateUrl="https://www.google.com/maps/place/Broadway,+Ernakulam,+Kochi,+Kerala+682031/@9.9808359,76.2718781,17z/data=!3m1!4b1!4m10!1m2!2m1!1sBroadway,+Marine+Drive,+Ernakulam,+Kerala!3m6!1s0x3b080d56d1d2abb3:0xd3ebda0798040e26!8m2!3d9.9808359!4d76.2767437!15sCilCcm9hZHdheSwgTWFyaW5lIERyaXZlLCBFcm5ha3VsYW0sIEtlcmFsYZIBBXJvdXRl4AEA!16s%2Fg%2F11bxb8xq1_?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/72/d5/18/sahara-mall.jpg?w=1200&h=-1&s=1"
            title="Sahara Mall"
            locateUrl="https://www.google.com/maps/place/Sahara+Plaza/@10.6143716,74.5928953,8z/data=!3m1!5s0x3ba43b3c7c2aa24f:0x441c331f83c6cb3e!4m10!1m2!2m1!1sSahara+Mall+kerala!3m6!1s0x3ba43bcc860ad5df:0x6c0eb245b8a9d293!8m2!3d11.8910718!4d75.4664201!15sChJTYWhhcmEgTWFsbCBrZXJhbGFaFCISc2FoYXJhIG1hbGwga2VyYWxhkgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F11gj0wl7ty?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGyFUDRBWdcTwxUAiZyb9vUQsG8WCnhd8yQ&s"
            title="Padmanabha Puram Palace"
            location="A traditional wooden palace of the Travancore rulers, known for its beautiful murals and intricate carvings."
            />
            <Hover1
            imageSrc="https://myholidayhappiness.com/uploads/mattancherry-palace-9468.jpg"
            title="Mattancherry Palace"
            location="Built by the Portuguese, this palace houses stunning murals depicting Hindu legends and is also called the Dutch Palace."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24scZuWnEXc8V-nm8ewSQ_2hqnzNHl6ItQg&s"
            title="Bekal Fort"
            location="A large coastal fort built in the 17th century, offering panoramic views of the Arabian Sea."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Synagogue_Plzen_087.JPG/1200px-Synagogue_Plzen_087.JPG"
            title="Jewish Synagogue"
            location="One of the oldest synagogues in India, reflecting Kerala’s multicultural history."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="The ideal time to visit Kerala is between September and March for cool, dry weather."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Monsoon Precautions"
            location="If visiting during the monsoon, pack waterproof gear and be prepared for occasional travel delays."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Try Local Cuisine"
            location="Enjoy traditional Kerala meals like appam with stew, seafood, and the famous Sadhya."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Backwaters Experience"
            location="Book a houseboat in Alleppey or Kumarakom to explore Kerala’s scenic backwaters."
            />
        </div>
    </div>
)
}
export default Kerala;