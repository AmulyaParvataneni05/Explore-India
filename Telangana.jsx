import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Telangana()
{
    return(
        <div>
            <a href='https://tourism.telangana.gov.in/home'><h1 className='heading'>Telangana</h1></a>
            <h2 className='capital'>Capital: Hyderabad</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSls-vMOmVoUR4LQ2xqADG72OVkKEifCN6l-g&s"
                title="Ramoji Film City"
                location="Hyderabad"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-hyderabad-india?search=200-64958;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Ramoji+Film+City/@17.2641373,78.6792436,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb098aaf875395:0xc344846c0208671b!8m2!3d17.2641373!4d78.6818239!16zL20vMDc3M2w3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVE3a95V80B1TYhzFRBrs1qfRu21xRpUNmA&s"
                title="Hussain Sagar Lake"
                location="Hyderabad"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-hyderabad-india?search=200-64958;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Hussain+Sagar/@17.4241052,78.4641954,15z/data=!3m1!4b1!4m6!3m5!1s0x3bcb97558c2e9b6b:0x25705363cc844e9d!8m2!3d17.4238798!4d78.4738215!16zL20vMDNzX3Js?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://images.news9live.com/h-upload/2022/09/19/559496-salarjung2.jpg"
                title="Salar Jung Museum"
                location="Hyderabad"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-hyderabad-india?search=200-64958;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Salar+Jung+Museum/@17.3713411,78.4790263,18z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9787e263d7bb:0x353b934b9b69a041!8m2!3d17.3716084!4d78.4802439!16zL20vMDNfMHZm?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://m.economictimes.com/thumb/msid-84752138,width-1200,height-900,resizemode-4,imgsize-470204/a-view-of-the-ramappa-temple-at-palampet-village-in-mulugu-district-.jpg"
                title="Ramappa Temple"
                location="Palampet"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-hyderabad-india?search=200-64958;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Kakatiya+Rudreshwara+Ramappa+Temple/@18.2335429,79.9242924,14z/data=!4m10!1m2!2m1!1sRamappa+Temple!3m6!1s0x3a330e7519eefc6f:0xacc2bee174187d8a!8m2!3d18.259276!4d79.9433178!15sCg5SYW1hcHBhIFRlbXBsZVoQIg5yYW1hcHBhIHRlbXBsZZIBDGhpbmR1X3RlbXBsZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOWGNWOUVaREZSUlJBQuABAA!16zL20vMGd5ajV2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTg1XNa6yj6_nAXB6Mpdlo08IJoB2Cun1ug&s"
                title="Perini Shivatandavam"
                location="An ancient dance form dedicated to Lord Shiva, known for its vigorous and masculine movements."
                locateUrl='https://www.youtube.com/watch?v=AaFoB46BA4M'
                />
                <Hover1
                imageSrc="https://qph.cf2.quoracdn.net/main-qimg-a94be20532a442c6d79dc3de9c2d399f-lq"
                title="Saree and Dhoti"
                location="Women wear sarees with gold jewelry, and men wear dhotis with kurta or sherwani, often with a turban."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX50knMfTMsoXa3LtwxVB1aNGqXOnI8tUDTA&s"
                title="Bonalu"
                location="A major festival in Telangana dedicated to the Goddess Mahakali, celebrated with vibrant processions and offerings."
                />
                <Hover1
                imageSrc="https://www.indianarrative.com/wp-content/uploads/2022/07/Darshanam-Mogilaiah1.webp"
                title="Folk Music"
                location="Instruments like the dappu and kinnera are used, with songs reflecting the rural life and traditions of Telangana."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"
                title="Hyderabadi Biryani"
                location="A fragrant rice dish with marinated meat and saffron, renowned for its rich and spicy flavor."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN8glAWllJNE8u0W3xAEh87p_-xOmpSW8ug&s"
                title="Sajja Rotte"
                location="A type of flatbread made from pearl millet, typically served with spicy curries and chutneys."
                />
                <Hover1
                imageSrc="https://images.squarespace-cdn.com/content/v1/5cef7b136434550001a53d10/1606999552941-KXOTA2W8075CUC9JJJA3/village+style+chicken+curry.jpg"
                title="Ragi Sangati"
                location="A traditional dish made from finger millet flour, cooked into a dense, savory porridge, commonly served with spicy curries and chutneys."
                />
                <Hover1
                imageSrc="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Andhra_Style_Sarva_PindiGine_Pindi_Recipe_Rice_Flour_and_Chana_Dal_Flatbread_Recipe_.jpg"
                title="Sarva Pindi"
                location="A savory pancake made from rice flour and spices, popular as a snack or breakfast item."
                /> 
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHQS8HZXnygijTFwDSQfNBWH_BLOSVdkYmQ&s"
                title="Kawal Tiger Reserve"
                locateUrl ="https://www.google.com/maps/place/Kawal+Tiger+Reserve/@19.118895,78.9963927,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcd67402f2125d5:0x93ee1fb328c9e430!8m2!3d19.118895!4d78.998973!16s%2Fm%2F03c5zr6?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEl1kaLVvTutXrOxyUVCQ4-XTViJQWV4gMg&s"
                title="Pocharam Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Pocharam+Wildlife+Sanctuary,+Pocharam+Forest+%26+Wildlife+Sanctuary+Trail+Rd,+Mirgudpally+(DP),+Telangana+502113/@18.123726,78.1936713,16z/data=!3m1!4b1!4m6!3m5!1s0x3bcc3c264bc17841:0x1c4cd63faad5ea27!8m2!3d18.1233843!4d78.197765!16s%2Fm%2F05h3xhw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/19/70/7c/f1/screenshot-2019-09-30.jpg"
                title="Eturnagaram Wildlife Sanctuary"
                locateUrl= "https://www.google.com/maps/place/Eturnagaram+Wildlife+Sanctuary/@18.2659736,80.3554007,17z/data=!3m1!4b1!4m6!3m5!1s0x3a33bd00766d8db9:0x1786a06e2d2cd116!8m2!3d18.2659736!4d80.357981!16s%2Fg%2F11w2cvr214?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://cms.tgtdc.in/fetch?payload=b77c115d-ebbd-4a63-abfa-eea49922590e.jpg"
                title="Pranahita Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Pranahita+Wildlife+Sanctuary/@18.9688507,79.7604609,17z/data=!4m10!1m2!2m1!1sPranahita+Wildlife+Sanctuary!3m6!1s0x3a3295bfc3909211:0xb8c35d3d076b7984!8m2!3d18.973107!4d79.7633419!15sChxQcmFuYWhpdGEgV2lsZGxpZmUgU2FuY3R1YXJ5kgENd2lsZGxpZmVfcGFya-ABAA!16s%2Fm%2F012w4hwc?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Laad_Bazaar.jpg/640px-Laad_Bazaar.jpg"
                title="Laad Bazaar"
                locateUrl="https://www.google.com/maps/place/Laad+Bazar,+Char+Kaman,+Ghansi+Bazaar,+Hyderabad,+Telangana+500002/@17.362675,78.4717053,18z/data=!3m1!4b1!4m6!3m5!1s0x3bcb978a2f7203eb:0xe7a1b5faba1fc694!8m2!3d17.3628791!4d78.4741288!16zL20vMDZfNHk0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://th-i.thgim.com/public/migration_catalog/article14373554.ece/alternates/FREE_1200/HYM28RESIDENCY"
                title="Sultan Bazaar"
                locateUrl="https://www.google.com/maps/place/Sultan+Bazar,+Koti,+Hyderabad,+Telangana/@17.3895295,78.4784343,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99d3d91b0eab:0x2e7a0b46ac1dc3f6!8m2!3d17.3913784!4d78.4783369!16s%2Fm%2F02q6hl3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/03/f4/9c/inorbit-entrance.jpg?w=1200&h=-1&s=1"
                title="Inorbit Mall"
                locateUrl="https://www.google.com/maps/place/Inorbit+Mall+Cyberabad/@17.4338224,78.3843723,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb972fe66d4711:0x7f2d27691ca15313!8m2!3d17.4338224!4d78.3869526!16s%2Fm%2F09gkt3j?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://www.scai.in/wp-content/uploads/2020/05/Forum-Sujana-Hyderabad.jpg"
                title="Forum Sujana Mall"
                locateUrl="https://www.google.com/maps/place/The+Forum+Sujana+Mall,+12,+Kukatpally+Housing+Board+Rd,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4843067,78.3870086,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91892f017663:0x87833d088fba3798!8m2!3d17.4843067!4d78.3895889!16s%2Fg%2F11j2f2dbl1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwx8UgfnuKSFQspYsMRoPPDiNY9xKsQHZo4g&s"
                title="Charminar"
                location="An iconic 16th-century monument and mosque in Hyderabad, symbolizing the city's history."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Golconda_Fort_005.jpg/800px-Golconda_Fort_005.jpg"
                title="Golconda Fort"
                location="A historic fort near Hyderabad known for its impressive ruins and acoustics."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZjzQ39BRVg1Hxx-RrT-GVtQ_TkzZWOLIqg&s"
                title="Qutb Shahi Tombs"
                location="A group of tombs in Hyderabad, reflecting the architectural style of the Qutb Shahi dynasty."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZc3ttxH6m-UBhoiI7eLxmQu2UfdUSM--emg&s"
                title="Warangal Fort"
                location="A historic fort with impressive ruins from the Kakatiya dynasty."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather"
                location="Telangana experiences hot summers. Wear light clothing and stay hydrated, especially if you're traveling between April and June."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Transport"
                location="Public transportation is available, but renting a car might be more convenient for exploring rural areas."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Cultural Etiquette"
                location="Respect local customs and traditions. When visiting religious sites, dress modestly."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Health Precautions"
                location="Carry necessary medications and be aware of basic health precautions, such as drinking bottled water."
                />
            </div>
        </div>
    )
}
export default Telangana;
