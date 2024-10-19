import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function JammuAndKashmir() {
  return(
    <div>
        <a href='https://tourism.jk.gov.in/#/landing'><h1 className='heading'>Jammu And Kashmir</h1></a>
        <h2 className='capital'>Summer Capital: Srinagar</h2>
        <h2 className='capital'>Winter Capital: Jammu</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMav2U0VD558HPbl7nP4xos_pIpx9Np-3Ig&s"
            title="Dal Lake"
            location="Srinagar"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-srinagar-india?search=200-64973;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Dal+Lake/@34.1136818,74.8134593,13z/data=!3m1!4b1!4m6!3m5!1s0x38e185c268876847:0xbf6def9295995179!8m2!3d34.1105857!4d74.8682569!16zL20vMDZkNmJk?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-a_04wPHJUjOyMC751sFNF4bVozDKPq3U0w&s"
            title="Gulmarg"
            location="Gulmarg Gondola"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-gulmarg-india?search=200-344948;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Gulmarg+193403/@34.0506346,74.3627199,15z/data=!3m1!4b1!4m6!3m5!1s0x38e1af91308dd977:0x7a5cc65c8fb01df7!8m2!3d34.0483704!4d74.3804791!16zL20vMDU0eXMw?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmmLlefhizb4TFAwWCiPluZiIBgYmBXswYQ&s"
            title="Pahalgam"
            location="Betaab Valley"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-srinagar-india?search=200-64973;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Pahalgam/@34.0104033,75.294982,14z/data=!3m1!4b1!4m6!3m5!1s0x38e23f2a7b9509df:0x8c1cff001fb18c5!8m2!3d34.0160751!4d75.3149796!16zL20vMGY1d3du?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/a/a2/Sonmarg_rishav7336.jpg"
            title="Sonamarg"
            location="Thajiwas Glacier"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-srinagar-india?search=200-64973;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Sonamarg/@34.3028357,75.286561,16z/data=!3m1!4b1!4m6!3m5!1s0x38e234e197d78061:0x5ccdc93dd4660335!8m2!3d34.3031616!4d75.293111!16s%2Fm%2F03cgp27?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTLuUmnbsjXNvfQNmWsknkBzUM0FYpPagjQ&s"
            title="Rouf"
            location="A graceful folk dance by Kashmiri women during Eid, marked by synchronized foot movements."
            locateUrl='https://www.youtube.com/watch?v=enet0gL42u0'
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrVZlb24abTIhNAy4ablRXISYrgONVaKmjA&s"
            title="Pheran"
            location="A traditional long, loose gown worn by both men and women, typically paired with a warm woolen shawl during winter."
            />
            <Hover1
            imageSrc="https://www.villagesquare.in/wp-content/uploads/2022/10/Hemis-01.jpg"
            title="Hemis Festival"
            location="A grand Buddhist festival celebrated at Hemis Monastery in Ladakh, featuring traditional dances and rituals."
            />
            <Hover1
            imageSrc="https://saxonianfolkways.wordpress.com/wp-content/uploads/2013/01/kashmir_sufiyana.jpg"
            title="Sufiana Kalam"
            location="A classical form of Kashmiri music, featuring traditional instruments like the Santoor and reflecting Sufi themes."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgAd6r6ihFxwwcssyjfeU96LvxpO0YpAY6g&s"
            title="Rogan Josh"
            location="A flavorful lamb dish cooked in a blend of Kashmiri spices and yogurt, known for its rich, aromatic gravy."
            />
            <Hover1
            imageSrc="https://i.ytimg.com/vi/n5j3xQRaDp8/maxresdefault.jpg"
            title="Yakhni"
            location="A traditional yogurt-based curry made with mutton, seasoned with saffron and cardamom."
            />
            <Hover1
            imageSrc="https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/kashmiri-pulao-3.jpg"
            title="Kashmiri Pulao"
            location="A fragrant rice dish mixed with dry fruits, nuts, and saffron, often served with curries."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPrxqXOrVli6AGbIYTqm16g872knnhIQyFg&s"
            title="Dum Aloo"
            location="Potatoes slow-cooked in a spicy tomato and yogurt gravy, a popular vegetarian dish in Kashmir."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJUAAQ3g61VESqQtpiAVQUJu_i3HSZhfAdw&s"
            title="Hemis National Park"
            locateUrl ="https://www.google.com/maps/place/Hemis+National+Park/@33.7187211,77.3856421,17z/data=!3m1!4b1!4m6!3m5!1s0x3902707b177afb8b:0xf74ea9833e5618e2!8m2!3d33.7187211!4d77.3882224!16zL20vMDhfdndi?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.tourmyindia.com/states/jammu-kashmir/image/dachigam-national-park3.jpg"
            title="Dachigam National Park"
            locateUrl="https://www.google.com/maps/place/Dachigam+National+Park/@34.1371836,75.0351697,17z/data=!3m1!4b1!4m6!3m5!1s0x38e18ff66de4f5a1:0x5d09f338a9bf1496!8m2!3d34.1371836!4d75.03775!16zL20vMDhfcHln?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpHIUK7aUHSPNbZnAS_E8RM0aqncRICWPsg&s"
            title="Gulmarg Biosphere Reserve"
            locateUrl= "https://www.google.com/maps/place/Gulmarg+Wildlife+Sanctuary/@34.0820038,74.3444367,17z/data=!3m1!4b1!4m6!3m5!1s0x38e1af07a3a05827:0x6d0a6c2e74613277!8m2!3d34.0820038!4d74.347017!16s%2Fg%2F11lgy3pv1l?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gyH5KFlbO4pW9wecv7XlFqRds84W0FMCmg&s"
            title="Wular Lake"
            locateUrl="https://www.google.com/maps/place/Wular+Lake/@34.3519139,74.4956182,12z/data=!3m1!4b1!4m6!3m5!1s0x38e10b7d1a6438ed:0xb3ebfa5078d4e7d1!8m2!3d34.3696106!4d74.5580454!16zL20vMDhrdHd5?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://www.seawatersports.com/images/places/raghunath-bazaar-in-jammu.jpg"
            title="Raghunath Bazaar"
            locateUrl="https://www.google.com/maps/place/Raghunath+Bazar,+Jammu+180001/@32.7310241,74.8622265,18z/data=!3m1!4b1!4m6!3m5!1s0x391e848615d5d253:0x38506de25cc1c7fe!8m2!3d32.7311733!4d74.8636884!16s%2Fg%2F1hjg_03gx?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/lal-chowk-145931-16x9.jpg?VersionId=UuSVUGZY24.gFDII9QkZd5ZUm__V_Sj3&size=690:388"
            title="Lal Chowk"
            locateUrl="https://www.google.com/maps/place/Lal+Chowk,+Srinagar+190001/@34.0713272,74.8080439,17z/data=!3m1!4b1!4m6!3m5!1s0x38e18f914ffc0931:0x2064a703ea27c42!8m2!3d34.0713272!4d74.8106242!16s%2Fm%2F0g9sr_c?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://assets.telegraphindia.com/telegraph/2023/May/1683937277_kashmirpoloview.jpg"
            title="Polo View Market"
            locateUrl="https://www.google.com/maps/place/POLO+VIEW+MARKET/@34.0739592,74.8173958,17z/data=!3m1!4b1!4m6!3m5!1s0x38e18f4cb25478ff:0x8eae397eb612d367!8m2!3d34.0739592!4d74.8199761!16s%2Fg%2F11q8r_0yw8?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/17/d5/57/city-square-mall.jpg?w=1200&h=-1&s=1"
            title="City Square Mall"
            locateUrl="https://www.google.com/maps/place/City+Square/@34.1036661,74.8064662,17z/data=!3m1!4b1!4m6!3m5!1s0x38e1859cdf64ff69:0xbc0b2deacff8fe70!8m2!3d34.1036661!4d74.8090465!16s%2Fg%2F11n08zm_hw?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fb/3a/19/shankaracharya-temple.jpg?w=1200&h=1200&s=1"
            title="Shankaracharya Temple"
            location="An ancient Lord Shiva temple on Shankaracharya Hill, offering panoramic views of Srinagar."
            />
            <Hover1
            imageSrc="https://img.etimg.com/thumb/msid-85364234,width-640,height-480,imgsize-559669,resizemode-4/hari-parbat.jpg"
            title="Hari Parbat Fort"
            location="A Mughal-era fort, offering historical insights and stunning views of Dal Lake and the surrounding city."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6rbiyCSwF4NhfwVjx261IBnw4rCjC_VqWA&s"
            title="Martand Sun Temple"
            location="Ruins of a grand 8th-century temple dedicated to the Sun God, showcasing Kashmiri Hindu architecture."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_XHGyw38fIdV5GefGNSr8CwHBa98TLuSog&s"
            title="Mubarak Mandi Palace"
            location="A royal palace blending Rajasthani, Mughal, and European architecture, once home to the Dogra dynasty."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit between April to October for pleasant weather and blooming gardens."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Clothing"
            location="Pack warm clothes even in summer, as nights can be chilly, especially in high-altitude areas."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Permits"
            location="Ensure you carry required permits for areas like Leh-Ladakh and some border regions."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Stay Hydrated"
            location="At high altitudes, like Gulmarg and Leh, stay hydrated and avoid heavy physical exertion."
            />
        </div>
    </div>
)
}
export default JammuAndKashmir;