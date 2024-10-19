import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Sikkim()
{
    return(
        <div>
            <a href='https://sikkimtourism.gov.in/Public/index'><h1 className='heading'>Sikkim</h1></a>
            <h2 className='capital'>Capital: Gangtok</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZ-IdlTgg3gRt_QxqcsSuiTtU0YkBScsKuQ&s"
                title="Tsomgo Lake"
                location="Gangtok"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-gangtok-india?search=200-64990;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Tsomgo+Chho/@27.3741609,88.7230188,14z/data=!3m1!4b1!4m6!3m5!1s0x39e6b293d735a6f5:0x4cd8b413df27f0ad!8m2!3d27.3741667!4d88.7619444!16zL20vMDU4bnl4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-2WJFD7gydUfBpzynbpUbrDs9kcaz-qqGw&s"
                title="Nathula Pass"
                location="Gangtok"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-gangtok-india?search=200-64990;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Nathula/@27.3865508,88.8283173,17z/data=!3m1!4b1!4m6!3m5!1s0x39e14da6a964259b:0x8fd8ed94ecf9807!8m2!3d27.3865684!4d88.8308731!16zL20vMDR3NTdr?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd4UYbHxGRolGRvDwvldSCbB5fhauO2jrbg&s"
                title="Pelling"
                location="Pelling"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-pelling-india?search=200-345158;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Pelling,+Sikkim+737113/@27.3200485,88.2339799,16z/data=!3m1!4b1!4m6!3m5!1s0x39e686717bf955cb:0x30eff5bdf9697aa1!8m2!3d27.3197716!4d88.2400333!16zL20vMDR4MDRf?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVRcmyVrAe1EdfLxblXAR5UDWX5Tmkb2BqQ&s"
                title="Yuksom"
                location="Yuksom"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-yuksom-india?search=200-345288;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Yuksom,+Sikkim+737113/@27.3719762,88.2106018,15z/data=!3m1!4b1!4m6!3m5!1s0x39e68894b9f72931:0x944b32349fc23e2!8m2!3d27.3724262!4d88.2229909!16zL20vMDZ4aGps?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbBqVAIGwAqZjofXxvXlVL3kQWW_Up5ZGXA&s"
                title="Cham Dance"
                location="A Tibetan Buddhist dance with masked costumes, performed during festivals to drive away evil spirits."
                locateUrl='https://www.youtube.com/watch?v=GOKMp1BdnNo'
                />
                <Hover1
                imageSrc="https://www.namasteindiatrip.com/wp-content/uploads/2020/06/Dress-of-Sikkim.jpg"
                title="Khaada and Gho"
                location="Men typically wear 'Gho' and 'Cholo', while women wear 'Khaada' (sari) and 'Rong-ju' (blouse)."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2MYWG8ThQ5STvIYoi5_DlsRhj4vtEFBaSw&s"
                title="Losar"
                location="Tibetan New Year festival celebrated with dances, music, and rituals."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Damfu_nepal.jpg/220px-Damfu_nepal.jpg"
                title="Tamang Selo"
                location="A drum used in traditional dances and ceremonies."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uPEjPDB5T2gdnkPZ-sVcI5OSfRPld9BsJA&s"
                title="Momos"
                location="Steamed dumplings filled with meat or vegetables, served with spicy dipping sauces."
                />
                <Hover1
                imageSrc="https://www.chefkunalkapur.com/wp-content/uploads/2022/10/DSC02785-1300x733.jpg?v=1664982558"
                title="Thukpa"
                location="A hearty noodle soup with meat or vegetables, flavored with Himalayan spices."
                />
                <Hover1
                imageSrc="https://www.holidify.com/images/cmsuploads/compressed/Phagshapa1456592879_20190830114620.png"
                title="Phagshapa"
                location="A traditional pork dish cooked with radishes and dried chilies, offering a blend of spicy and savory flavors."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfx1_SUr3lBtIfyThJ8WispCf4RFuntMjPdQ&s"
                title="Gundruk"
                location="Fermented leafy greens cooked into a tangy soup or curry, reflecting the local palate."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://img.traveltriangle.com/blog/wp-content/uploads/2018/05/cover.jpg"
                title="Yumthang Valley"
                locateUrl ="https://www.google.com/maps/place/Yumthang,+Sikkim+737120/@27.827041,88.6779068,14z/data=!3m1!4b1!4m6!3m5!1s0x39e6d6b31b80f707:0x1eabb09edbb663ae!8m2!3d27.8267952!4d88.6958087!16zL20vMDU4cDFx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrZfJ1aFOFbpHsJMIXYG0Q3DpmONwhL8Llw&s"
                title="Fambong Lho Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Fambonglho+wild+life+Sanctuary/@27.3656366,88.5622678,17z/data=!3m1!4b1!4m6!3m5!1s0x39e6bcecdfca0699:0xf3500c9c5bfcb171!8m2!3d27.3656366!4d88.5648481!16s%2Fm%2F0105mnkv?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://res.cloudinary.com/roundglass/image/upload/f_auto/q_auto/f_auto/c_limit,w_auto:breakpoints_200_2560_100_5:1265/v1637135610/rg/collective/media/singalila-rhododendrons-forest-bloom-dhritiman-mukherjee-1637135609740.jpg"
                title="Singalila National Park"
                locateUrl= "https://www.google.com/maps/place/Singalila+National+Park/@27.0371351,88.073643,17z/data=!3m1!4b1!4m6!3m5!1s0x39e5d65d76cd5f21:0x1e37b81a8379907d!8m2!3d27.0371351!4d88.0762233!16zL20vMDhfczY4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB17wgVnT9_UYar8CMVnljwt50Ym-gCKb8eA&s"
                title="Deorali Orchid Sanctuary"
                locateUrl="https://www.google.com/maps/search/Deorali+Orchid+Sanctuary/@27.2915332,88.2376613,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbLP0FBuVHZ6eo7t4EDRwzc2wY2I4XMtPLw&s"
                title="MG Road"
                locateUrl="https://www.google.com/maps/place/Mahatma+Gandhi+Marg,+Gangtok,+Sikkim/@27.3253821,88.6093097,17z/data=!3m1!4b1!4m6!3m5!1s0x39e6a51504b9b95b:0xe44eb58d5a699d1!8m2!3d27.3253821!4d88.61189!16s%2Fg%2F1tp1x6zg?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDW6cry45CLHsfORSgNbNN_Q6NkTtq7mariA&s"
                title="Lal Market"
                locateUrl="https://www.google.com/maps/place/Lal+Market+Rd,+Gangtok,+Sikkim/@27.32679,88.6090182,17z/data=!3m1!4b1!4m6!3m5!1s0x39e6a51444ac8fa7:0xf6d1671ef8b09ee7!8m2!3d27.32679!4d88.6115985!16s%2Fg%2F1hd_rp3ff?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8PMsUR9crCrQ8b12Q-hNzscZyCc4l-8Isg&s"
                title="New Market"
                locateUrl="https://www.google.com/maps/place/New+Market+-+Lal+Market+Rd,+Vishal+Gaon,+Gangtok,+Sikkim+737102/@27.3259151,88.6090261,17z/data=!3m1!4b1!4m6!3m5!1s0x39e6a5147a683ab9:0x709e213969d33abd!8m2!3d27.3259151!4d88.6116064!16s%2Fg%2F12hqvv1nl?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://www.exoticmiles.com/wp-content/uploads/2020/06/gangtok.jpg"
                title="Banjhakri Falls Market"
                locateUrl="https://www.google.com/maps/search/Banjhakri+Falls+Market,+Gangtok/@27.350776,88.6006495,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79hd8Q7rZGHtObY4kJPKRKTOp6O6uYN-UZQ&s"
                title="Rumtek Monastery"
                location="The largest monastery in Sikkim, reflecting the spiritual and cultural heritage of Tibetan Buddhism."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOmeXzkI6vMLV14UzvcahcwZkiPGTEGYs9A&s"
                title="Tashiding Monastery"
                location="An important pilgrimage site, considered one of the holiest monasteries in Sikkim."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmm2YognBVX7X-YtmH4H5bHM4nvH9Y81Um6g&s"
                title="Rabdentse Ruins"
                location="The remains of the former capital of the Kingdom of Sikkim, offering insights into the region's royal history."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-O7LJISeJ94x2nXwEW4dsKj9nLHVLNoDW-g&s"
                title="Namgyal Institute of Tibetology"
                location="A center for Tibetan culture, preserving rare manuscripts, artifacts, and religious artworks."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Permits Required"
                location="Many areas in Sikkim, especially near the borders, require special permits. Obtain them in advance."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Eco-Friendly Travel"
                location="Sikkim is an eco-conscious state. Avoid plastic, dispose of waste properly, and respect the environment."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Cash Availability"
                location="ATMs may be scarce in remote areas, so carry enough cash, especially if you plan to visit offbeat destinations."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Transportation"
                location="Roads in Sikkim can be winding and narrow. Be prepared for longer travel times and consider hiring a local driver familiar with the terrain."
                />
            </div>
        </div>
    )
}
export default Sikkim;
