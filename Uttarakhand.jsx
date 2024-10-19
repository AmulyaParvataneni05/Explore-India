import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'

function Uttarakhand()
{
    return(
        <div>
            <a href='https://www.euttaranchal.com/tourism/'><h1 className='heading'>Uttarakhand</h1></a>
            <h2 className='capital'>Capital: Dehradun</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://static.toiimg.com/photo/msid-104218043,width-96,height-65.cms"
                title="Nainital"
                location="Nainital"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-nainital-india?search=200-344056;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Nainital,+Uttarakhand/@29.3824486,79.4346283,14z/data=!3m1!4b1!4m6!3m5!1s0x39a0a1bc28fd9d61:0x7cae7ba916987db3!8m2!3d29.3924139!4d79.4533773!16zL20vMDE4Y2s5?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://rishikeshdaytour.com/blog/wp-content/uploads/2022/07/maldevta-Valley.jpg"
                title="Dehradun"
                location="Dehradun"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-dehradun-india?search=200-109106;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Dehradun,+Uttarakhand/@30.3254025,77.9345624,12z/data=!3m1!4b1!4m6!3m5!1s0x390929c356c888af:0x4c3562c032518799!8m2!3d30.3164945!4d78.0321918!16zL20vMDRiejJm?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://static.toiimg.com/photo/msid-80611280,width-96,height-65.cms"
                title="Mussoorie"
                location="Mussoorie"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-dehradun-india?search=200-109106;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Mussoorie,+Uttarakhand/@30.4547217,78.0557976,14z/data=!3m1!4b1!4m6!3m5!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!8m2!3d30.4547465!4d78.081985!16zL20vMDU0Mjlq?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://images.news18.com/ibnlive/uploads/2023/02/auli-summer-destination-16760023714x3.jpg"
                title="Auli"
                location="Chamoli"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-auli-india?search=200-424446;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/search/Auli/@29.4140245,77.0798446,8z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnu7chLxk_7oiFraNpluo0hRwQJ4CJ6c7fg&s"
                title="Langvir Nritya"
                location="A unique acrobatic dance performed by men, featuring impressive gymnastic feats."
                locateUrl='https://www.youtube.com/watch?v=6Lk89xMR_74'
                />
                <Hover1
                imageSrc="https://i.pinimg.com/550x/8f/36/77/8f3677d748f088b8432a19b63ad922ab.jpg"
                title="Ghagri and Kurta"
                location="The Ghagri is a long skirt worn by women, while the Kurta is a traditional tunic worn by men in Uttarakhand."
                />
                <Hover1
                imageSrc="https://www.holidify.com/images/cmsuploads/articles/571.jpg"
                title="Kumaoni Holi"
                location="A festival with traditional songs, dances, and instruments like the Dhol and Damoun."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhrcS1MmX57hLc19JqBUfjiuDqW4ozblfrA&s"
                title="Dholki"
                location="The Dholki is a key percussion instrument in Uttarakhand's folk music, providing rhythmic beats for traditional dances."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/10-oct/Uttaranchal_Style_Garwhali_Kafuli_Recipe_Spinach_Curry-9378.jpg"
                title="Kafuli"
                location="A thick, green curry made with spinach and fenugreek leaves, often enjoyed with steamed rice."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIrc-h8KHXbgF5zGMekIRKpFwcdY2H-n9TQ&s"
                title="Bhaang Ki Chutney"
                location="A tangy chutney made from roasted hemp seeds, offering a unique and earthy flavor."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2hF75swup84XpHXk87JPp0CIWY6-rRjr2g&s"
                title="Aloo Ke Gutke"
                location="A spicy potato dish, flavored with local spices and often served with puri or rice."
                />
                <Hover1
                imageSrc="https://media.licdn.com/dms/image/D4D12AQHVDhQv2BczNQ/article-cover_image-shrink_720_1280/0/1700052300381?e=2147483647&v=beta&t=cfdZcPRTWJw8uz1nprqJ3sWZiyoE4AnqYkNglNdSHKU"
                title="Chainsoo"
                location="A protein-rich curry made from black gram dal, roasted and ground, then cooked with spices."
                /> 
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVU_eCOtsQdu4f2YPowJi10pBNepTOsrtWQ&s"
                title="Jim Corbett National Park"
                locateUrl ="https://www.google.com/maps/place/Jim+Corbett+National+Park/@29.5521551,78.8806304,17z/data=!3m1!4b1!4m6!3m5!1s0x390a24ffffffffff:0x3017b72d3d253fd7!8m2!3d29.5521551!4d78.8832107!16zL20vMDFxMng4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTssHltqH3rsgb32rzAmLDQCwGmoEVw4ogdw&s"
                title="Rajaji National Park"
                locateUrl="https://www.google.com/maps/place/Rajaji+National+Park/@30.01542,78.1498181,17z/data=!3m1!4b1!4m6!3m5!1s0x39094647d037ee41:0xdf9423842225a0bc!8m2!3d30.01542!4d78.1523984!16zL20vMDhfd3kw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qvrjNOm90JKyBuixBH8tZAoCbPfd4g-B4Q&s"
                title="Nanda Devi National Park"
                locateUrl="https://www.google.com/maps/place/Nanda+Devi+National+Park/@30.6587637,79.8360739,17z/data=!3m1!4b1!4m6!3m5!1s0x39a7af65d017b76b:0xf18b856ca6555a38!8m2!3d30.6587637!4d79.8386542!16zL20vMGJrbWxu?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://ihplb.b-cdn.net/wp-content/uploads/2016/04/Valley-of-Flowers-National-Park-750x430.jpg"
                title="Valley of Flowers National Park"
                locateUrl="https://www.google.com/maps/place/Valley+of+Flowers+National+Park/@30.7274861,79.6047588,17z/data=!3m1!4b1!4m6!3m5!1s0x39a791153bd771ef:0x1f42050f9b6c125f!8m2!3d30.7274861!4d79.6073391!16zL20vMDNkMHg4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://www.imagesbof.in/wp-content/uploads/2022/02/Pacific-Mall-Dehradun-2.png"
                title="Pacific Mall"
                locateUrl="https://www.google.com/maps/place/Pacific+Mall+Dehradun/@30.366465,78.0677319,17z/data=!3m1!4b1!4m6!3m5!1s0x3908d7cbdc6e9d1b:0x7082f9fac370bdb7!8m2!3d30.366465!4d78.0703122!16s%2Fg%2F12hqm5l83?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://content3.jdmagicbox.com/comp/ludhiana/a3/0161px161.x161.170121153839.c1a3/catalogue/kashmiri-shawl-house-jawahar-nagar-ludhiana-shawl-retailers-2bxesk1.jpg"
                title="Kashmir Shawl House"
                locateUrl="https://www.google.com/maps/place/Kashmir+Emporium/@30.3246479,78.0345461,14z/data=!4m10!1m2!2m1!1sKashmir+Shawl+House+(Dehradun)!3m6!1s0x3908d7cc6f5bfb1d:0x28292b431369224e!8m2!3d30.3260642!4d78.0431172!15sCh5LYXNobWlyIFNoYXdsIEhvdXNlIChEZWhyYWR1bilaHiIca2FzaG1pciBzaGF3bCBob3VzZSBkZWhyYWR1bpIBDmNsb3RoaW5nX3N0b3JlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJEWjJOcWVUVjNSUkFC4AEA!16s%2Fg%2F1tctczw9?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/32/f7/12/tibetan-market.jpg?w=1200&h=-1&s=1"
                title="Tibetan Market"
                locateUrl="https://www.google.com/maps/place/Tibetan+Market,+Pant+Rd,+Race+Course,+Dehra+Dun,+Uttarakhand+248001/@30.3231537,78.0465518,19z/data=!3m1!4b1!4m6!3m5!1s0x390929c0a5a5dee3:0xcd91a676e0d256bb!8m2!3d30.3230659!4d78.0474174!16s%2Fg%2F11b8td59cr?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://static.toiimg.com/photo/57751048.cms"
                title="Paltan Bazar"
                locateUrl="https://www.google.com/maps/place/Paltan+Bazaar,+Dehradun,+Uttarakhand+248001/@30.3212733,78.0319039,16z/data=!3m1!4b1!4m6!3m5!1s0x39092994bbb9704d:0xa453a4d09723364a!8m2!3d30.3200884!4d78.0352346!16s%2Fg%2F1hjh6p94h?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Evening_view_of_Har-ki-Pauri%2C_Haridwar.jpg/640px-Evening_view_of_Har-ki-Pauri%2C_Haridwar.jpg"
                title="Har Ki Pauri"
                location="A sacred ghat along the Ganges River, where pilgrims gather for the Ganga Aarti, symbolizing spiritual heritage."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCR4-WP-wFY-by-TeCt2MsbpdwyR-rtDBhw&s"
                title="Jageshwar Temples"
                location="An ancient complex of over 100 stone temples, dating back to the 9th-13th centuries, dedicated to Lord Shiva."
                />
                <Hover1
                imageSrc="https://majesticjourney.in/wp-content/uploads/2020/05/badrinath-temple.jpg"
                title="Badrinath Temple"
                location="One of the Char Dham pilgrimage sites, revered for its spiritual significance and connection to Hindu mythology."
                />
                <Hover1
                imageSrc="https://images.herzindagi.info/image/2023/Apr/why-to-visit-kasar-devi-temple-almora.jpg"
                title="Kasar Devi"
                location="A site with ancient temples, also known for attracting several Western thinkers in the 20th century, contributing to its cultural importance."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Altitude Awareness"
                location="Parts of Uttarakhand, especially in the Himalayas, are at high altitudes. Acclimatize to avoid altitude sickness."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather Conditions"
                location="Winters can be cold, especially in hill stations, so pack warm clothing."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Permits"
                location="Some trekking routes and forest areas may require permits. Check in advance and carry valid identification."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Trekking Preparation"
                location="If you plan to trek, ensure you're well-prepared with the right gear and physical fitness. Hire local guides for safety."
                />
            </div>
        </div>
    )
}
export default Uttarakhand;
